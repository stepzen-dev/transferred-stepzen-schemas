# Location schema

This schema provides the ability to retrieve location information given an IP address. It defines:
- an interface for location information in the file `location.graphql`. 
- a concrete type that implements that interface using the IpApi API in the file `locationIpApi.graphql`