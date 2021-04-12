### Overview

For a full tutorial on importing schemas into your StepZen project, the main [Readme](https://github.com/steprz/stepzen-schemas) of this repository provides step-by-step instructions to do so.

Power your SMS, email, video, and audio messaging with the Twilio backend.

This schema will include authentication to an endpoint through the Twilio REST API to query instances from a fixed twilio schema.

## What comes with the Twilio backend <a name="context"></a>

1. Connecting with customers in a multitude of ways from one backend.
2. Simple integration configurations for complex engagement solutions for your audience.

## Preparing your Twilio Configuration

<em>First step to importing a schema into your StepZen SDL (Schema Definition Language) is to prepare the API for import. If you already have your API configurations, [skip](#import) this section.</em>

1. Create a twilio account.
2. Applying the standard `username:password` to the endpoint in your SDL with the Account SID and Auth Token, respectively, https://www.twilio.com/console.

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
$ stepzen import twilio
```

3. Now the project should include the following directory layout in your root folder. Add your credentials in the config.yaml to properly deploy the StepZen Endpoint.

```shell
🐒➔ tree
.
├── index.graphql
├── config.yaml
└── twilio
    ├── twilio.graphql
    └── README.md

1 directories, 4 files
```

The config.yaml configuration for twilio.

```bash
  - configuration:
      name: twilio_config
      api_key: {{ account_sid }}
      api_secret: {{ auth_token }}
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
