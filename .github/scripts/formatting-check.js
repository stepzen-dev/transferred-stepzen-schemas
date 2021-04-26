const core = require("@actions/core");
const fs = require("fs");
const glob = require("glob");
const prettier = require("prettier");

async function run() {
  const files = glob.sync("**/*.graphql");

  for (const file of files) {
    const graphql = fs.readFileSync(file, "utf8");
    const formatted = prettier.format(graphql, { parser: "graphql" });
    if (graphql !== formatted) {
      throw new Error(
        `File ${file} has an error. Please check it is valid GraphQL and formatted, by running 'prettier'`
      );
    }
  }
}

run().catch((e) => core.setFailed(e));
