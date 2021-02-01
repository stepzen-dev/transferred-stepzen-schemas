# stepzen-schemas

This repository contains pre-defined schemas for use with [StepZen](https://stepzen.com). Each schema directory contains a README describing the schema and providing any necessary instructions for use.

Each schema directory must contain:
1. One or more .graphql files that define the schema
2. Zero or one stepzen.config.json file that is used to build any require configuration settings.
3. A readme file with useful information.


------

## List of Schemas

| Name | Description |
| ----- | ------------ |
| location | returns location info for an ip address
| weatherreport  | returns current conditions for a | latitude/longitude
location-weatherreport | extends the `location` type with `weatherreport`