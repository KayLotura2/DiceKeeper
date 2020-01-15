var Ajv = require('ajv');
const schema = require("./JSON/schema.json")
const ancestry = require("./JSON/ancestry.json")
const blocks = require("./JSON/archetypeBlock.json")
var schemaNames = Object.keys(schema)

const ajv = new Ajv({
  allErrors: true,
  extendRefs: 'fail',
  verbose: true,
  schemas: schema
});

function testSchema(schemaName, jsonObj) {
  var valid = ajv.validate(schemaName, jsonObj);
  if (!valid) {
    console.log(`Errors in ${schemaName}: ${ajv.errors}`);
  } else {
    console.log(`Success!${schemaName} is valid!`)
  }
}

testSchema('ancestries-schema', ancestry["ancestries"]);
testSchema('archetypeBlock-schema', blocks["archetypeBlocks"]);
