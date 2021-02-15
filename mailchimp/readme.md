## Setting up your mailchimp

1. Create a standard mailchimp account.
2. Grab your authentication code here, https://{{ your_unique_server }}.admin.mailchimp.com/account/api/
3. The code will be used as your api_password and you can use any string as your api_key
4. Add the password to your config file and deploy Stepzen!
```bash
- configuration:  
      name: mailchimp_config
      api_key: anystring
      api_password: {{ auth_code }}
```

Not signed up for StepZen? Try it free here - https://stepzen.com/request-invite