## Setting up your Wordpress API

1. Create or log into a wordpress environment.  Recommended quick start up with Digital Ocean, https://www.digitalocean.com/community/tutorials/how-to-use-the-wordpress-one-click-install-on-digitalocean-2.
2. Install the advanced custom fields plugin to expose custom field configurations and embed the code below in your functions.php file. (optional)
```bash
// Expose the fields on the RestAPI
function create_ACF_meta_in_REST() {
    $postypes_to_exclude = ['acf-field-group','acf-field'];
    $extra_postypes_to_include = ["page"];
    $post_types = array_diff(get_post_types(["_builtin" => false], 'names'),$postypes_to_exclude);
    array_push($post_types, $extra_postypes_to_include);
    foreach ($post_types as $post_type) {
        register_rest_field( $post_type, 'fields', [
            'get_callback'    => 'expose_ACF_fields',
            'schema'          => null,
       ]
     );
    }
}
function expose_ACF_fields( $object ) {
    $ID = $object['id'];
    return get_fields($ID);
}
add_action( 'rest_api_init', 'create_ACF_meta_in_REST' );
```
3. If you would like to add authentication to your wordpress endpoint, install the miniOrange RestAPI Authentication, https://www.miniorange.com/wordpress-rest-api-authentication.  Below is the configuration for setting basic authentication with the plugin.
```bash
  - configuration:
      name: wordpress_config
      username: {{ username }}
      password: {{ password }}
```

Not signed up for StepZen? Try it free here - https://stepzen.com/request-invite