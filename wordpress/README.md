### Overview

For a full tutorial on importing schemas into your StepZen project, the main [Readme](https://github.com/steprz/stepzen-schemas) of this repository provides step-by-step instructions to do so.

Power your content management open-source schema with the Wordpress backend.

This schema will include authentication to an endpoint through the Wordpress REST API to query instances from a wordpress schema.

## What comes with the Wordpress backend <a name="context"></a>

1. A scalable content solution with 100% open-source and optional custom configurations.
2. Large community to find workable use case solutions.

## Preparing your Wordpress Configuration

<em>First step to importing a schema into your StepZen SDL (Schema Definition Language) is to prepare the API for import. If you already have your API configurations, [skip](#import) this section.</em>

1. Create or log into a wordpress environment. Recommended quick start up with Digital Ocean, https://www.digitalocean.com/community/tutorials/how-to-use-the-wordpress-one-click-install-on-digitalocean-2.
2. <em>(Optional)</em> Install the miniOrange RestAPI Authentication, https://www.miniorange.com/wordpress-rest-api-authentication.
3. Select Basic Authentication with the `username:password` configuration.

The config.yaml configuration for miniOrange on wordpress.

```bash
  - configuration:
      name: wordpress_config
      username: {{ username }}
      password: {{ password }}
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
$ stepzen import wordpress
```

3. Now the project should include the following directory layout in your root folder. If you set up miniOrange authentication, add your credentials in the config.yaml to properly deploy the StepZen Endpoint.

```shell
🐒➔ tree
.
├── index.graphql
├── config.yaml
└── wordpress
    ├── wordpress.graphql
    └── README.md

1 directories, 4 files
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
