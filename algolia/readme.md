## Setting up your algolia indices and authentication

1. Create an account, an app, and upload a list for indexing.
2. Add sample data for an indice, https://www.briandunning.com/sample-data/
3. Add the appropriate key and app id that contains the indice data submitted above.
```bash
   - configuration:
      name: algolia_config
      X-Algolia-API-Key: {{ X-Algolia-API-Key }}
      X-Algolia-Application-Id: {{ X-Algolia-Application-Id }}
```


Not signed up for StepZen? Try it free here -> https://stepzen.com/request-invite

