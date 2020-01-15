var Ajv = require('ajv');
const schema = require("./JSON/schema.json")
const ancestry = require("./JSON/ancestry.json")
var schemaNames = Object.keys(schema)

const ajv = new Ajv({
  allErrors: true,
  extendRefs: 'fail',
  verbose: true,
  schemas: schema
});

var valid = ajv.validate('ancestries-schema', ancestry["ancestries"]);
if (!valid) {
  console.log(ajv.errors);
} else {
  console.log("Success! JSON is Valid.")
}
