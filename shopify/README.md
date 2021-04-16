### Overview

For a full tutorial on importing schemas into your StepZen project, the main [Readme](https://github.com/steprz/stepzen-schemas) of this repository provides step-by-step instructions to do so.

Power your ecommerce full-cycle experience with the Shopify backend.

This schema will include authentication to an endpoint through the Shopify REST API to query instances from a fixed shopify schema.

## What comes with the Shopify backend <a name="context"></a>

1. A true all-in-one e-commerce platform.
2. Vast network of tools and applications to integrate with the core platform.
3. Provides storefront hosting and server uptime at 99.9%.

## REST vs GraphQL API in Shopify <a name="context"></a>

Shopify provides both a <a href="https://shopify.dev/docs/admin-api/rest/reference" name="context">REST</a> and <a href="https://shopify.dev/docs/admin-api/graphql/reference" name="context">GraphQL</a> API. Within both of these API standards, there is an admin and storefront api that you can access. This tutorial will include authentication processes through the REST admin API to link together customers and orders in the StepZen SDL.

## Preparing your Shopify Configuration

<em>First step to importing a schema into your StepZen SDL (Schema Definition Language) is to prepare the API for import. If you already have your API configurations, [skip](#import) this section.</em>

1. Create a free trial, https://www.shopify.com/ or log into your existing store.
2. Once in the store, go to the Apps section and <ins>Enable Private App Development</ins>
3. After permitting private apps, you will be asked to create read/write permissions. Select <ins>Show inactive Admin API permissions</ins> dropdown. You need to enable read permissions on customers, draft orders, orders, products, and product listings. Feel free to add read and writer permissions to any other types you would like to expose for development.
4. In the apps section, reenter the app and copy the example url.
5. Curl the example url in terminal or paste it into your postman environment. If the endpoint returns blank orders such as `{"orders":[]}` or an array of existing store data then the API is successfully set up!

```bash
curl https://{{api_key}}:{{api_password}}@{{store_name}}.myshopify.com/admin/api/2021-01/orders.json
```

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
$ stepzen import shopify
```

3. Now the project should include the following directory layout in your root folder. Add your credentials in the config.yaml to properly deploy the StepZen Endpoint.

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

The config.yaml configuration for shopify.

```bash
- configuration:
      name: shopify_config
      api_key: {{ key }}
      api_password: {{ password }}
      store_name: {{ store_name }}
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

Done! The StepZen Dashboard should be deployed at `http://localhost:5000/foo/bar` with an explorer listing the query documentation. 🚀

![Localhost](https://res.cloudinary.com/dvfhnc6ui/image/upload/v1614608265/stepzen-localhost-dashboard.png)

##

Not signed up for StepZen? Try it free here -> https://stepzen.com/request-invite
