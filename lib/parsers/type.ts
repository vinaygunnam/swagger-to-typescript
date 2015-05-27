import SwaggerTypes = require('../../models/swagger-types');
import SwaggerFormats = require('../../models/swagger-formats');
import refParser = require('./ref');
import cleanTypeName = require('../helpers/clean-type-name');

function typeParser(schema: Schema): string {
    if (schema) {
        if (schema.type) {
            switch (schema.type) {
                case SwaggerTypes.Integer:
                case SwaggerTypes.Number:
                    return 'number';
                case SwaggerTypes.String:
                    switch (schema.format) {
                        case SwaggerFormats.Date:
                        case SwaggerFormats.DateTime:
                            return 'Date';
                        default:
                            return 'string';
                    }
                case SwaggerTypes.Boolean:
                    return 'boolean';
                case SwaggerTypes.Array:
                    return typeParser(schema.items) + '[]';
                case SwaggerTypes.Object:

                default:
                    return 'any';
            }
        } else if (schema.$ref) {
            return 'I' + cleanTypeName(refParser(schema));
        } else {
            return 'any';
        }
    }
}

export = typeParser;
