import fs = require('fs');
import typeParser = require('../parsers/type');
import cleanTypeName = require('../helpers/clean-type-name');

function interfaceWriter(swaggerJson: SwaggerObject, filepath: string) {
    if (!filepath) {
        throw new Error('Invalid file name for saving interfaces.');
    }

    var toWrite = '';

    if (swaggerJson && swaggerJson.definitions) {
        for (var entityName in swaggerJson.definitions) {
            toWrite += 'interface I' + cleanTypeName(entityName) + ' {\n';

            var entityDefinition: Schema = swaggerJson.definitions[entityName];
            if (entityDefinition && entityDefinition.properties) {
                for (var key in entityDefinition.properties) {
                    var schema: Schema = entityDefinition.properties[key];
                    toWrite += ('\t' + cleanTypeName(key) + ': ' + typeParser(schema) + ';\n');
                }
            }

            toWrite += '}\n\n';
        }
    }

    fs.writeFile(filepath, toWrite, (err) => {
        if (err) {
            console.log('Interfaces write failed: ', err);
        } else {
            console.log('Interfaces write succeeded.');
        }
    });
}

export = interfaceWriter;
