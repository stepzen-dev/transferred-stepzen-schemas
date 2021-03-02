### Overview
For a full tutorial on importing schemas into your StepZen project, the main [Readme](https://github.com/steprz/stepzen-schemas) of this repository provides step-by-step instructions to do so.

## Preparing your Amadeus Configuration

<em>First step to importing a schema into your StepZen SDL (Schema Definition Language) is to prepare the API for import. If you already have your API configurations, [skip](#import) this section.</em>

1. Create an account for the Self-Service API, https://developers.amadeus.com/get-started/get-started-with-self-service-apis-335.
2. Confirm email address and create an app.
3. Curl the auth token endpoint with the api key and secret
curl https://{{key}}:{{password}}@{{uniqueStore}}.myshopify.com/admin/api/2021-01/orders.json
4. In the apps section, reenter the app and copy the example url.
```bash
curl "https://test.api.amadeus.com/v1/security/oauth2/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=client_credentials&client_id={{api_key}}&client_secret={{api_secret}}"
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

2. Importing the schema.  As mentioned earlier, you can skip the configuration questions by pressing `[Enter]` and adding the configurations manually.

```bash
$ stepzen import amadeus
```

3. Now the project should include the following directory layout in your root folder.  Add your credentials in the config.yaml to properly deploy the StepZen Endpoint.

```shell
🐒➔ tree
.
├── index.graphql
├── config.yaml
└── amadeus
    ├── flights.graphql
    └── README.md

1 directories, 4 files
```

The config.yaml configuration for amadeus.
```bash
  - configuration:  
      name: amadeus_config
      Authorization: Bearer {{bearer_token}}
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