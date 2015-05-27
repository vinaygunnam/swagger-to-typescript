import SwaggerTypes = require('../../models/swagger-types');
import SwaggerFormats = require('../../models/swagger-formats');
import refParser = require('./ref');

export = (schema: Schema): string => {
    switch (schema.type) {
        case SwaggerTypes.Integer:
        case SwaggerTypes.Number:
            return "number";
        case SwaggerTypes.String:
            switch (schema.format) {
                case SwaggerFormats.Date:
                case SwaggerFormats.DateTime:
                    return "Date";
                default:
                    return "string";
            }
        case SwaggerTypes.Boolean:
            return "boolean";
        case SwaggerTypes.Array:
            return "I" + refParser(schema) + "[]";
        default:
            return "any";
    }
}
