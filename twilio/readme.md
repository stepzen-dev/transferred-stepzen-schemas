## Setting up your twilio API

1. Create a twilio account
2. Applying the standard `username:password` to the endpoint in your SDL with the Account SID and Auth Token, respectively, https://www.twilio.com/console
3. Add the configs accordingly and deploy StepZen!
```bash
  - configuration:
      name: twilio_config
      api_key: {{ account_sid }}
      api_secret: {{ auth_token }}
```


Not signed up for StepZen? Try it free here -> https://stepzen.com/request-invite

