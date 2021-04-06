### Overview

For a full tutorial on importing schemas into your StepZen project, the main [Readme](https://github.com/steprz/stepzen-schemas) of this repository provides step-by-step instructions to do so.

Power your app with AI-powered search & discovery from Algolia.

This schema will include authentication to an endpoint through the Algolia <a href="https://shopify.dev/docs/admin-api/rest/reference" name="context">REST API</a> to query instances from your predefined algolia data.

## What comes with the Algolia API <a name="context"></a>

1. Pay-As-You-Go Search Tool.
2. Real-time, first keystroke AI powered search.
3. Delivers queries results in under 100ms for websites, mobile, and voice applications.

## Preparing your Algolia Configuration

<em>First step to importing a schema into your StepZen SDL (Schema Definition Language) is to prepare the API for import. If you already have your API configurations, [skip](#import) this section.</em>

1. Create an [Algolia](https://www.algolia.com/) account, an app, and upload a list for indexing.
2. Add sample data for an indice, https://www.briandunning.com/sample-data/
3. In the Agolia dashboard, go to API Keys in the sidebar and copy over your keys to import into your schema.

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
$ stepzen import algolia
```

3. Now the project should include the following directory layout in your root folder. Add your credentials in the config.yaml to properly deploy the StepZen Endpoint.

```shell
🐒➔ tree
.
├── index.graphql
├── config.yaml
└── algolia
    ├── algolia.graphql
    └── README.md

1 directories, 4 files
```

The config.yaml configuration for algolia.

```bash
   - configuration:
      name: algolia_config
      X-Algolia-API-Key: {{ X-Algolia-API-Key }}
      X-Algolia-Application-Id: {{ X-Algolia-Application-Id }}
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

##

Not signed up for StepZen? Try it free here -> https://stepzen.com/request-invite
