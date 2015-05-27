function extractTypeNameFromRef(ref: string): string {
    if (ref) {
        return ref.replace('#/definitions/', '');
    }

    return null;
}

function refParser(schema: Schema): string {
    if (!schema) return null;

    if (schema.$ref) {
        return extractTypeNameFromRef(schema.$ref);
    }

    return null;
};

export = refParser;
