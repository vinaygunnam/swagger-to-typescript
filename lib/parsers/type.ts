var SwaggerTypes = require('../../models/swagger-types'),
    SwaggerFormats = require('../../models/swagger-formats');

export = (type: string, format: string): string => {
    switch (type) {
        case SwaggerTypes.Integer:
        case SwaggerTypes.Number:
            return "number";
        case SwaggerTypes.String:
            switch (format) {
                case SwaggerFormats.Date:
                case SwaggerFormats.DateTime:
                    return "Date";
                default:
                    return "string";
            }
        case SwaggerTypes.Boolean:
            return "boolean";
        default:
            return "any";
    }
}
