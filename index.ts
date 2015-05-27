var _ = require('lodash');
var swaggerJson: SwaggerObject = require('./temp/swagger.json');
import typeParser = require('./lib/parsers/type');
import refParser = require('./lib/parsers/ref');

var entityName = "User";
var entityDefinition: Schema = swaggerJson.definitions[entityName];

var toWrite = "interface I" + entityName + " {\n";

if (entityDefinition && entityDefinition.properties) {
    for (var key in entityDefinition.properties) {
        var schema: Schema = entityDefinition.properties[key];
        toWrite += ("\t" + key + ": " + typeParser(schema) + ";\n");
    }
}

toWrite += "}";

console.log(toWrite);
