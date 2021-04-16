### Overview

For a full tutorial on importing schemas into your StepZen project, the main [Readme](https://github.com/steprz/stepzen-schemas) of this repository provides step-by-step instructions to do so.

Power your content management custom shema with the Airtable backend.

This schema will include authentication to an endpoint through the Airtable REST API to query instances from a custom airtable schema.

## What comes with the Airtable backend <a name="context"></a>

1. An enterprise scale content solution with modern usability.
2. Real-time collaboration for a fast deploy cycle of content.

## Preparing your Airtable Configuration

Airtable, unlike many other backends like Shopify, does not have a fixed schema. Our template assumes that the Airtable contains [Event Planning](https://airtable.com/templates/event-marketing) tables and data. If you want to learn by just using this example, deploy that template into your Airtable account. If your data is different, we will also explain how to modify our templates to conform to your data in the [How to modify the imported template section](#modify)

There are two "keys" that you need for connecting to Airtable. One is the `baseid` (which, for all practical purposes is like a database in the MySQL/Postgres sense). Second is the `API Key`, which is a unique key with which to access the specific base. You can find good information on these at [Airtable's API Section](https://airtable.com/api), where you will also see what the API does, and how it returns the data.

For example, a call

```curl
curl https://api.airtable.com/v0/appXXXXXXXXXXXX/Events \
-H "Authorization: Bearer YOUR_API_KEY"
```

fetches all records from the table `Events` within the Event Marketing base.

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
$ stepzen import airtable
```

3. Now the project should include the following directory layout in your root folder. Add your credentials in the config.yaml to properly deploy the StepZen Endpoint.

```shell
% tree
.
├── index.graphql
├── config.yaml
└── airtable
    ├── event.graphql
    |__ venue.graphql
    |__ event-venue.graphql
    └── README.md

1 directories, 6 files
```

The config.yaml configuration for airtable.

```bash
- configuration:
      name: airtable_config
      Authorization: Bearer {{ Bearer }}
      baseid: {{ baseid }}
```

4. Start up the StepZen Endpoint.

```bash
$ stepzen start
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

Done! The StepZen Dashboard should be deployed at `http://localhost:5000/foo/bar` with an explorer listing the query documentation.

![image](https://user-images.githubusercontent.com/1117488/112496392-f05dc580-8d41-11eb-8c33-87817bd7ec97.png)

## Modify the Imported Template <a href="import"></a>

Let us take a look at `event.graphql`. You will see that it defines an `interface Event` (which is how you will query the data, not caring about where it comes from), and a concrete `type AirtableEvent` that implements `interface Event`. You will see that the interface has fewer fields than are there in the actual Airtable, and the names have been changed slightly. StepZen automatically does subsetting, but to change names, it needs `setters` that renames fields from appropriate path in the JSON returned object. Go ahead and look at the `setters` in the `query events`.

Each query that you define on the interface should have a corresponding query in the concrete implementation. The directive `@supplies` connects the two.

Each query in the concrete implementation uses `@rest` directive to fetch data from Airtable. We have already talked about `setters` parameter. As a convenience, there is an extra parameter--`resultroot` that says that all `setters` values must be gotten from the subtree starting at `resultroot`. And finally, you do not need setters for fields that have the same name and are at `reultroot` (hence we have no setter for `id`, though of course you are free to set it).

We have conveniently provided three queries for you. `event` returns a specific event. `events` returns all the events. And `searchEvents` takes the `name` of the event as a parameter and returns all the events that satisfy it. The syntax of the actual API call we make to Airtable is there for you to see in tbe `endpoint` parameter. The `$` you see in these are filled either from query parameters (e.g., `name`), or from `config,yaml` (e.g., `baseid`).

Examine `venue.graphql`. It is very similar.

The last file you should look at is `event-venue.graphql`. One of the superb things about GraphQL is that different interfaces/types can be linked together. What we are saying in this fragment:

```graphql
extend interface Event {
  venue: Venue
    @materializer(query: "venue", arguments: [{ name: "id", field: "venueId" }])
}
```

is that a new field in `Event` called `venue` returns an object of `interface Venue`, and that the way to connect the two is to execute the `query venue` by passing the right parameter.

That's it.

Now you can move on to modifying stuff.

1. If you have a different `base`, then edit `baseid` in `config.yaml`.
1. If you want to query a different table, then
   1. Make sure you define the right `interface`.
   1. Generally the three queries like `event (id: ID!)` (which returns a specific event), `events` (which returns all events) and `searchEvents (name: String!)` (which searches using some criteria) are good practice.
   1. Make sure that the `endpoint` string uses that table name, as opposed to `Events` or `Venues`.
   1. Make sure that your `interface` and `setters` are in sync.
1. If you want to link two types together (let us say you want to make `Order` a child of `Customer`), make sure that you have a query on `Order` that can take some fields available in `Customer` and return all the orders. In our case, we used the query `venue (id: ID!)` and passed it the parameter `venueId` which was available in `Event`.

That should do it. Hit us up on discord if you run into any toruble.

##

Not signed up for StepZen? Try it free here -> https://stepzen.com/request-invite
