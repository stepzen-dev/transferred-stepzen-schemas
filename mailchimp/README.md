### Overview

For a full tutorial on importing schemas into your StepZen project, the main [Readme](https://github.com/steprz/stepzen-schemas) of this repository provides step-by-step instructions to do so.

Power your audience email engagement with the Mailchimp backend.

This schema will include authentication to an endpoint through the Mailchimp REST API to query instances from a fixed mailchimp schema.

## What comes with the Mailchimp backend <a name="context"></a>

1. All-in-one platform for audience interaction and feedback.
2. Real-time analytics data on full-cycle audience engagement.

## Preparing your Mailchimp Configuration

<em>First step to importing a schema into your StepZen SDL (Schema Definition Language) is to prepare the API for import. If you already have your API configurations, [skip](#import) this section.</em>

1. Create a standard mailchimp account.
2. Grab your authentication code here, https://{{ your_unique_server }}.admin.mailchimp.com/account/api/.
3. The code will be used as your api_password and you can use any string as your api_key.

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
$ stepzen import mailchimp
```

3. Now the project should include the following directory layout in your root folder. Add your credentials in the config.yaml to properly deploy the StepZen Endpoint.

```shell
🐒➔ tree
.
├── index.graphql
├── config.yaml
└── mailchimp
    ├── mailchimp.graphql
    └── README.md

1 directories, 4 files
```

The config.yaml configuration for mailchimp.

```bash
- configuration:
      name: mailchimp_config
      api_key: anystring
      api_password: {{ auth_code }}
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
