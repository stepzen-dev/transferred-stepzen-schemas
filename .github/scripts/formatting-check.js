const core = require("@actions/core")
const fs = require("fs")
const glob = require("glob")
const prettier = require("prettier")

async function run() {
  const files = glob.sync("**/*.graphql")

  for (const file of files) {
    const graphql = fs.readFileSync(file, "utf8")

    const hacked = graphql.replace(
      /(type\s(\S+)\simplements\s(\S+)\s?{})\n/gi,
      "type $2 implements $3\n"
    )
    const formatted = prettier.format(hacked, { parser: "graphql" })
    const unhacked = formatted.replace(
      /(type\s(\S+)\simplements\s(\S+))\n/gi,
      "type $2 implements $3 {}\n"
    )

    if (graphql !== unhacked) {
      throw new Error(`File ${file} not formatted correctly`)
    }
  }
}

run().catch((e) => core.setFailed(e))
