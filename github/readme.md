## Setting up your github access token

1. Register a personal token, https://github.com/settings/tokens
2. Add read/write permissions.
3. Test the bearer token by trying to access private repositories `https://api.github.com/user/repos?type=private`
```bash
  - configuration:  
      name: github_config
      Authorization: Bearer {{bearer_token}}
```

Not signed up to the StepZen API? Sign up here - https://stepzen.com/request-invite