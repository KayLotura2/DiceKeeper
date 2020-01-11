var Ajv = require('ajv');
const schema = require("./JSON/schema.json")
const ancestry = require("./JSON/ancestry.json")
var schemaNames = Object.keys(schema)
let schemasArray = []

for (let i = 0; i < schemaNames.length - 1; i++) {
  schemasArray.push(schema[`${schemaNames[i]}`])
}
console.log(schemasArray)

var ajv = new Ajv({schemas: schemasArray});
// var validate = ajv.compile(schema["ancestries-schema"]);
// var valid = validate(ancestry);
// if (!valid) console.log(validate.errors);
// if(valid) console.log('IT WORKED EUREKA')
