## Setting up your amadeus

1. Create an account for the Self-Service API, https://developers.amadeus.com/get-started/get-started-with-self-service-apis-335.
2. Confirm email address and create an app.
3. Curl the auth token endpoint with the api key and secret
curl https://{{key}}:{{password}}@{{uniqueStore}}.myshopify.com/admin/api/2021-01/orders.json
4. In the apps section, reenter the app and copy the example url.
```bash
curl "https://test.api.amadeus.com/v1/security/oauth2/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=client_credentials&client_id={{api_key}}&client_secret={{api_secret}}"
```
5. Add the bearer token to your config.yaml file and deploy StepZen! This bearer token will need to be regenerated upon expiration.
```bash
  - configuration:  
      name: amadeus_config
      Authorization: Bearer {{bearer_token}}
```
