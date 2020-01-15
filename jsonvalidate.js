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

// for (let i = 0; i < schemaNames.length - 1; i++) {
//   let schemaName = schemaNames[i]
//   ajv.addSchema(schema[`${schemaName}`], schemaName)
// }
console.log(schemaNames)


// var ajv = new Ajv({schemas: schemasArray});
// var validate = ajv.compile(schema["ancestries-schema"]);
// var valid = validate(ancestry);
// if (!valid) console.log(validate.errors);

console.log(ajv.schemas)

console.log(ajv.validate('ancestries-schema', ancestry), ajv.errors);
