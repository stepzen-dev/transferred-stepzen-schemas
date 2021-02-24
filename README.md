# stepzen-schemas

This repository contains pre-defined schemas for use with [StepZen](https://stepzen.com). Each schema directory contains a README describing the schema and providing any necessary instructions for use.

Each schema directory must contain:
1. One or more .graphql files that define the schema
2. Zero or one stepzen.config.json file that is used to build any require configuration settings.
3. A readme file with useful information.

For more information on how to import and deploy your GraphQL API, see this short video (1':08")on youtube >> https://youtu.be/vvfWQZ8kUBI

------

To use a template schema:  

You will need to have StepZen installed. Not signed up for StepZen? Try it free here -> https://stepzen.com/request-invite

1. Login to StepZen and set up your account with the [Getting Set Up](https://my.stepzen.com/docs/helloworld/#getting-set-up) tutorial in the StepZen [docs](https://my.stepzen.com/docs/).
2. The [Starting With Weather](https://my.stepzen.com/docs/helloworld/?utm_source=steprz#starting-with-weather) tutorial is a great example of a `import` & `start` spin up of the StepZen endpoint. Feel free to follow that tutorial to get started with `stepzen import` or continue reading if you would like to add additional schema templates to your project. 
3. If you would like to import other schema templates, follow the same method of `import` & `start` in your projects root directory. If you do not have an existing project and want to create a new project, simply add the name of your folder at the end of your import command.

```
// Import schema templates into an exisiting project
$ cd my-app
$ stepzen import [schemas]
// Create new project with schemas
$ stepzen import [schemas] [my-app]
```

4. You will be asked of your authentication to create your `config.yaml` file when running `stepzen import`. You can add the credentials in the command line or add the credentials directly in your `config.yaml` file. Be sure to add the credentials before `stepzen start` or the endpoint will not work.
```
// Sample of questions to build your config.yaml
$ stepzen import cloudinary my-app
? What is the api_key for your cloudinary API? [input is hidden]
? What is the api_secret for your cloudinary API? [input is hidden]
? What is the cloud_name for your cloudinary API? [input is hidden]
Successfully imported 1 schemas from StepZen
```

After a successful import, <strong>with or without</strong> credentials added in the command line, your directory should look like this. The only difference is some imports have multiple SDL (Schema Definition Language) files in the schema directory.

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

The `extend.graphql` SDL file is a [directive](https://my.stepzen.com/docs/reference/code/#set-of-directives) that stitches your data together.  Read more about how StepZen directives can unify your data here, https://my.stepzen.com/docs/reference/code/#set-of-directives and take your data to the next level 🚀

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
To note: All the questions are preconfigured with a `stepzen.config.json` and can be viewed in the directories found in this repo. You can go use this information to properly prep your configurations for the questions following the `stepzen import` command. https://github.com/steprz/stepzen-schemas/blob/main/cloudinary/stepzen.config.json