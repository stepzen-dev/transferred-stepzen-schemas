## Overview of the Shopify API <a name="context"></a>

1. A true all-in-one e-commerce platform.
2. Vast network of tools and applications to integrate with the core platform.
3. Provides storefront hosting and server uptime at 99.9%.

## REST vs GraphQL API in Shopify <a name="context"></a>

Shopify provides both a <a href="https://shopify.dev/docs/admin-api/rest/reference" name="context">REST</a> and <a href="https://shopify.dev/docs/admin-api/graphql/reference" name="context">GraphQL</a> API.  Within both of these API standards, there is an admin and storefront api that you can access. This tutorial will include authentication processes through the REST admin API to link together customers and orders in the StepZen SDL.

## Setting up your Shopify Store

The shopify admin API is completely free to set up.

1. Create a free trial, https://www.shopify.com/ or log into your existing store.
2. Once in the store, go to the Apps section and <ins>Enable Private App Development</ins>
3. After permitting private apps, you will be asked to create read/write permissions. Select <ins>Show inactive Admin API permissions</ins> dropdown. You need to enable read permissions on customers, draft orders, orders, products, and product listings.  Feel free to add read and writer permissions to any other types you would like to expose for development.
4. In the apps section, reenter the app and copy the example url.
5. Curl the example url in terminal or paste it into your postman environment. If the endpoint returns blank orders such as `{"orders":[]}` or an array of existing store data then the API is successfully set up!
```bash
curl https://{{api_key}}:{{api_password}}@{{store_name}}.myshopify.com/admin/api/2021-01/orders.json
```
6. Add the api key, password, and store name to your config file and deploy Stepzen!
```bash
- configuration:
      name: shopify_config
      api_key: {{ key }}
      api_password: {{ password }}
      store_name: {{ store_name }}
```
