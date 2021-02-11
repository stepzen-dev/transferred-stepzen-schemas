## Setting up your eligible account and authentication

1. Create an account which does require payment information
2. Go to account and generate a new api key using the account password, https://account.eligible.com/profile/access_keys
3. Add the appropriate key to your config file and keep in mind that the retrieval of test data carries the utm parameter ?test=true
```bash
  - configuration:
      name: eligible_config
      api_key: {{ api_key }}
```

Not signed up to the StepZen API? Sign up here - https://stepzen.com/request-invite