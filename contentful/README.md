### Overview

For a full tutorial on importing schemas into your StepZen project, the main [Readme](https://github.com/steprz/stepzen-schemas) of this repository provides step-by-step instructions to do so.

## Preparing your Contentful Configuration

Contentful, unlike many other backends like Shopify, does not have a fixed schema. Our template assumes that the Contentful contains [BlogPost](https://github.com/contentful/starter-gatsby-blog) content model and content. If you want to learn by just using this example, add that to your space. If your content is different, we will also explain how to modify our templates to conform to your content in the [How to modify the imported template section](#modify)

There are two "keys" that you need for connecting to Contentful. One is the `spaceid` (which, for all practical purposes is like a database in the MySQL/Postgres sense). Second is the `API Key`, which is a unique key with which to access the specific base. You can find good information on these at in your cContentful accounts section.

For example, a call

```curl
curl https://cdn.contentful.com/spaces/XXXXX/entries?content_type=blogPost \
-H "Authorization: Bearer YOUR_API_KEY"
```

fetches all data for the `content_type blogPost` within the Contentful Space.

## StepZen Import <a href="import"></a>

<em>The StepZen CLI will import the schema and request your authentication configurations. You can add the configurations in the command line or add the configurations after import.</em>

1. Before importing the schema, either create a new project or access your existing project in the command line.

Creating a new StepZen SDL project.

```bash
$ mkdir my-app
$ cd my-app
```

Access an existing project

```bash
$ cd my-existing-project
```

2. Importing the schema. As mentioned earlier, you can skip the configuration questions by pressing `[Enter]` and adding the configurations manually.

```bash
$ stepzen import contentful
```

3. Now the project should include the following directory layout in your root folder. Add your credentials in the config.yaml to properly deploy the StepZen Endpoint.

```shell
🐒➔ tree
.
├── index.graphql
├── config.yaml
└── contentful
    ├── blog.graphql
    |__ person.graphql
    |__ blog-person.graphql
    └── README.md

1 directories, 6 files
```

The config.yaml configuration for contentful.

```bash
- configuration:
      name: contentful_config
      Authorization: Bearer {{ Bearer }}
      spaceid: {{ spaceid }}
```

4. Start up the StepZen Endpoint. Provide the directory path to deploy your endpoint appropriately.  
   <em>https://accountname.stepzen.net/foo/bar/__graphql</em>

```bash
$ stepzen start foo/bar
```

A successfull deploy should respond with the below CLI message. If it did not successfully deploy, post on [Github Issues](https://github.com/steprz/stepzen-schemas/issues)

```bash
Watching /Users/username/Desktop/myapp/config.yaml for configuration changes
Watching /Users/username/Desktop/myapp for GraphQL changes

http://localhost:5000/foo/bar
Deploying to StepZen...... done

Successfully deployed foo/bar at 8:06:59 AM

Your endpoint is available at https://accountname.stepzen.net/foo/bar/__graphql
```

Done! The StepZen Dashboard should be deployed at `http://localhost:5000/foo/bar` with an explorer listing the query documentation. 🚀

![Localhost](https://res.cloudinary.com/dvfhnc6ui/image/upload/v1614608265/stepzen-localhost-dashboard.png)

## Modify the Imported Template <a href="import"></a>

Let us take a look at `blog.graphql`. You will see that it defines an `interface Blog` (which is how you will query the data, not caring about where it comes from), and a concrete `type ContentfulBlog` that implements `interface Blog`. You will see that the interface has fewer fields than are there in the actual Contentful space, and the names have been changed slightly. StepZen automatically does subsetting, but to change names, it needs `setters` that renames fields from appropriate path in the JSON returned object. Go ahead and look at the `setters` in the `query blogs`.

Each query that you define on the interface should have a corresponding query in the concrete implementation. The directive `@supplies` connects the two.

Each query in the concrete implementation uses `@rest` directive to fetch data from Airtable. We have already talked about `setters` parameter. As a convenience, there is an extra parameter--`resultroot` that says that all `setters` values must be gotten from the subtree starting at `resultroot`. And finally, you do not need setters for fields that have the same name and are at `reultroot` (hence we have no setter for `title`, though of course you are free to set it).

We have conveniently provided three queries for you. `blog` returns a specific blog. `blogs` returns all the events. And `searchBlogs` takes the `title` of the blog as a parameter and returns all the blogs that satisfy it. The syntax of the actual API call we make to Contentful is there for you to see in tbe `endpoint` parameter. The `$` you see in these are filled either from query parameters (e.g., `title`), or from `config,yaml` (e.g., `spaceid`).

Examine `person.graphql`. It is very similar.

The last file you should look at is `blog-person.graphql`. One of the superb things about GraphQL is that different interfaces/types can be linked together. What we are saying in this fragment:

```graphql
xtend interface Blog {
  author: Person
    @materializer(
      query: "person"
      arguments: [{ name: "id", field: "authorId" }]
    )
}
```

is that a new field in `Blog` called `author` returns an object of `interface Person`, and that the way to connect the two is to execute the `query person` by passing the right parameter.

That's it.

Now you can move on to modifying stuff.

1. If you have a different `space`, then edit `spaceid` in `config.yaml`.
1. If you want to query a different content type, then
   1. Make sure you define the right `interface`.
   1. Generally the three queries like `blog (id: ID!)` (which returns a specific blog), `blogs` (which returns all blogs) and `searchBlogs (title: String!)` (which searches using some criteria) are good practice.
   1. Make sure that the `endpoint` string uses that content type, as opposed to `blogPost` or `person`.
   1. Make sure that your `interface` and `setters` are in sync.
1. If you want to link two types together (let us say you want to make `Order` a child of `Customer`), make sure that you have a query on `Order` that can take some fields available in `Customer` and return all the orders. In our case, we used the query `person (id: ID!)` and passed it the parameter `authorId` which was available in `Blog`.

That should do it. Hit us up on discord if you run into any toruble.

##

Not signed up for StepZen? Try it free here -> https://stepzen.com/request-invite
