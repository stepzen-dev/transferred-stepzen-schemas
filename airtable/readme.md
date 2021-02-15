## REST API on the Airtable base model <a name="context"></a>

Airtable has a great model of building out different bases for organizing tables of data in one collaborative platform

1. Create an account and choose the Event Marketing Template.
2. Head over to your account and grab the api key, https://airtable.com/account
3. Grab the unique id to your airtable at the beginning of the API docs and add it in with the bearer token as shown below.
```bash
- configuration:  
      name: airtable_config
      Authorization: Bearer {{ Bearer }}
      table: {{ table }}
```

Not signed up for StepZen? Try it free here - https://stepzen.com/request-invite