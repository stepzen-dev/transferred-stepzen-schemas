## Setting up your disqus

1. Create a disqus account to install on an existing site.
2. Create your API application here, https://help.disqus.com/en/articles/1717083-how-to-create-an-api-application
3. Add the api_key to your config file and deploy Stepzen!
```bash
  - configuration:
      name: disqus_config
      api_key: {{ api_key }}
```
