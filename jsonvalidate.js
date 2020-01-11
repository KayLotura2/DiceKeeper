var Ajv = require('ajv');
const schema = require("./JSON/schema.json")
const ancestry = require("./JSON/ancestry.json")

var ajv = new Ajv();
var validate = ajv.compile(schema["ancestries-schema"]);
var valid = validate(ancestry);
if (!valid) console.log(validate.errors);
if(valid) console.log('IT WORKED EUREKA')
