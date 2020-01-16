var Ajv = require('ajv');
const schema = require("./JSON/schema.json")
const ancestry = require("./JSON/ancestry.json")
const blocks = require("./JSON/archetypeBlock.json")
const personality = require("./JSON/personality.json")
const weapon = require("./JSON/weapon.json")
var schemaNames = Object.keys(schema)

const ajv = new Ajv({
  allErrors: true,
  extendRefs: 'fail',
  verbose: true,
  schemas: schema
});

const green = '\x1b[32m'
const red = '\x1b[31m'
const reset = '\x1b[0m'

function testSchema(schemaName, jsonObj) {
  const valid = ajv.validate(schemaName, jsonObj);
  if (!valid) {
    console.log(`Errors in`, red, `${schemaName}`, reset)
    console.log(ajv.errors)
  } else {
    console.log(`Success!`, green , `${schemaName}`, reset , `is valid!`)
  }
}

// List of Validations to run
testSchema('ancestries-schema', ancestry["ancestries"]);
testSchema('archetypeBlocks-schema', blocks["archetypeBlocks"]);
testSchema('personality-schema', personality);
testSchema('weapons-schema', weapon["weapons"]);
