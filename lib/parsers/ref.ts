function extractTypeNameFromRef(ref: string): string {
    if (ref) {
        return ref.replace("#/definitions/", "");
    }

    return null;
}

export = (schema: Schema): string => {
    if (!schema) return null;

    if (schema.$ref) {
        return extractTypeNameFromRef(schema.$ref);
    }

    if (schema.items) {
        if (schema.items instanceof Array) {
            // TODO: What should I do?
            return null;
        } else {
            return extractTypeNameFromRef((<Schema>schema.items).$ref);
        }
    }

    return null;
};
