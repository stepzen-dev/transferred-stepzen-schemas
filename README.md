<h1>Notice: This repository is no longer maintained.</h1>
<h3>Please refer to https://graphql.stepzen.com for up to date schemas.</h3>

# stepzen-schemas

Looking for a simple and fast way to build a GraphQL API that gets data from popular API or database services, including Airtable, Cloudinary, Mailchimp, Wordpress, FedEx, UPS, and more? [StepZen](https://stepzen.com) enables you to create a GraphQL API on any data source in minutes, starting with a template schema.

These templates are pre-made GraphQL schemas configured with types, queries, and backends, giving you a live GraphQL API in minutes. Then you can easily easily combine, customize, and extend your schema files to combine data from multiple backend data sources.

This repository contains one directory per pre-made GraphQL schemas. Each schema directory contains:

1. One or more `.graphql` files -- the Schema Definition Language (SDL) files that define the types, queries, and connectors for the specified backend.
2. Zero or one `stepzen.config.json` file - used to build any required configuration settings like keys, secrets etc.
3. A README describing the schema and providing instructions for its use.

For an example of how to import and deploy your GraphQL API, see the [Quickstart](https://stepzen.com/docs/quick-start/import-a-template) for an example of how to use `stepzen import` followed by stepzen start to spin up your live GraphQL endpoint.

---

### To Use a Template Schema:

1. Log into to your StepZen account.

Not signed up for StepZen? Try it free here -> https://stepzen.com/signup

2.  [Install StepZen](https://stepzen.com/docs/quick-start)

3.  Import a template schema to (i) start a new project from scratch, or (ii) add functionality to an existing project

**Create a new project from scratch**

Add the name of your project folder at the end of your `stepzen import` command.

```
// Create new project with schemas
$ stepzen import [schema] [my-app]
// Deploy and run your GraphQL endpoint
$ stepzen start
```

See the [Quickstart](https://stepzen.com/docs/quick-start/import-a-template)  tutorial for an example of how to use `stepzen import` followed by `stepzen start` to spin up your live GraphQL endpoint.

**Add a template schema to an existing project**

If you already have a project folder (perhaps the one you created doing the [Import a Prebuilt Schema Template](https://stepzen.com/docs/quick-start/import-a-template) tutorial), you can import and deploy other template schemas by following the same method: `stepzen import` and `stepzen start` in your project's root directory.

```
// Import template schemas into an exisiting project
$ cd my-app
$ stepzen import [schema]
// Deploy and run your GraphQL endpoint
$ stepzen start
```

### Providing Credentials to Create a `config.yaml`

When you run `stepzen import` you are asked for your authentication to create your `config.yaml` file.

- You can add the credentials in the command line or add the credentials directly in your `config.yaml` file.
- Be sure to add the credentials before `stepzen start` or the endpoint will not work.

```
// Sample of questions to build your config.yaml
$ stepzen import cloudinary my-app
? What is the api_key for your cloudinary API? [input is hidden]
? What is the api_secret for your cloudinary API? [input is hidden]
? What is the cloud_name for your cloudinary API? [input is hidden]
Successfully imported 1 schemas from StepZen
```

After a successful import, <strong>with or without</strong> credentials added in the command line, your directory looks like this. (Note that some imports have multiple `graphql` (Schema Definition Language (SDL)) files in the schemas directory.

```shell
🐒➔ tree
.
├── index.graphql
├── config.yaml
└── cloudinary
    ├── cloudinary.graphql
    └── README.md

1 directories, 4 files
```

Example of multiple SDL files from one import.

`$ stepzen import shopify my-app`

```shell
🐒➔ tree
.
├── index.graphql
├── config.yaml
└── shopify
    ├── customers.graphql
    ├── products.graphql
    ├── orders.graphql
    ├── extend.graphql
    └── README.md

1 directories, 7 files
```

The `extend.graphql` SDL file is a [directive schema](https://stepzen.com/docs/design-a-graphql-schema) that uses the @materializer directive to stitch your data together. Read more about how StepZen directives can unify your data here, https://stepzen.com/docs/features and take your data to the next level 🚀

Note: All the questions are preconfigured with a `stepzen.config.json` and can be viewed in the directories found in this repo. You can go use this information to properly prep your configurations for the questions following the `stepzen import` command. https://github.com/steprz/stepzen-schemas/blob/main/cloudinary/stepzen.config.json
