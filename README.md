# stepzen-schemas

This repository contains pre-defined schemas for use with [StepZen](https://stepzen.com). Each schema directory contains a README describing the schema and providing instructions for use.

Each schema directory contains:
1. One or more `.graphql` files that define the schema.
2. Zero or one stepzen.config.json file - used to build any require configuration settings.
3. A README file.

For more information on how to import and deploy your GraphQL API, see this short video (1':08") on youtube >> https://youtu.be/vvfWQZ8kUBI

------

### To Use a Template Schema:  

1. Log into to your StepZen account. 

Not signed up for StepZen? Try it free here -> https://stepzen.com/request-invite

2.  [Install StepZen](https://my.stepzen.com/docs/setup/setup#1-install-stepzen) 

3.  Import a template schema to (i) start a new project from scratch, or (ii) add functionality to an existing project

**Create a new project from scratch** 

Add the name of your project folder at the end of your `stepzen import` command.

```
// Create new project with schemas
$ stepzen import [schema] [my-app]
// Deploy and run your GraphQL endpoint
$ stepzen start [folder/name]
```
See the [Hello World](https://my.stepzen.com/docs/helloworld/?utm_source=steprz#starting-with-weather) tutorial for an example of how to use  `stepzen import` followed by `stepzen start` to spin up your live GraphQL endpoint. 

**Add a template schema to an existing project**

If you already have a project folder (perhaps the one you created doing the [Hello World](https://my.stepzen.com/docs/helloworld/?utm_source=steprz#starting-with-weather) tutorial), you can import and deploy other template schemas by following the same method: `stepzen import` and `stepzen start` in your project's root directory.

```
// Import template schemas into an exisiting project
$ cd my-app
$ stepzen import [schema]
// Deploy and run your GraphQL endpoint
$ stepzen start [folder/name]
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
The `extend.graphql` SDL file is an [directive schema](https://my.stepzen.com/docs/reference/code/#set-of-directives) that uses the @materializer directive to stitch your data together.  Read more about how StepZen directives can unify your data here, https://my.stepzen.com/docs/reference/code/#set-of-directives and take your data to the next level 🚀

Note: All the questions are preconfigured with a `stepzen.config.json` and can be viewed in the directories found in this repo. You can go use this information to properly prep your configurations for the questions following the `stepzen import` command. https://github.com/steprz/stepzen-schemas/blob/main/cloudinary/stepzen.config.json
