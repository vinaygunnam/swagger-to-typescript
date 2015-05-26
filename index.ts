var _ = require('lodash');
var swaggerJson: SwaggerObject = require('./temp/swagger.json');

var entityName = "User";
var entityDefinition: Schema = swaggerJson.definitions[entityName];

var toWrite = "interface I" + entityName + " {\n";

if (entityDefinition && entityDefinition.properties) {
    for (var key in entityDefinition.properties) {
        toWrite += ("\t" + key + ": any;\n");
    }
}

toWrite += "}";

console.log(toWrite);
