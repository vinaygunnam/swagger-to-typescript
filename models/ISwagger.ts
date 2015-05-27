interface PathItemObject {
    $ref?: string;
    default?: OperationObject;
    get?: OperationObject;
    put?: OperationObject;
    post?: OperationObject;
    delete?: OperationObject;
    options?: OperationObject;
    head?: OperationObject;
    patch?: OperationObject;
    parameters?: ParameterObject[];
}

interface ParameterObject {
    name: string;
    in: string;
    description?: string;
    required?: boolean;
    type?: string;
    format?: string;
}

interface ReferenceObject {
    $ref?: string;
}

interface OperationObject {
    tags?: string[];
    summary?: string;
    description?: string;
    externalDocs?: ExternalDocumentation;
    operationId?: string;
    consumes?: string[];
    produces?: string[];
    parameters?: ParameterObject[];
    responses: { [statusCode: string]: ResponseObject|ReferenceObject };
    schemes?: string[];
    deprecated?: boolean;
    security?: any; // TODO: https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md#securityRequirementObject
}

interface Schema {
    $ref?: string;
    format?: string;
    title?: string;
    enum?: string[];
    type?: string;
    required?: string[];
    properties?: {
        [name: string]: Object;
    };
    items?: Schema|Schema[];
    additionalItems?: boolean|Schema;
}

interface SwaggerObject {
    swagger: string;
    info: Info;
    host?: string;
    basePath?: string;
    schemes?: string[];
    consumes?: string[];
    produces?: string[];
    paths: {
        [path: string]: PathItemObject
    };
    definitions?: {
        [name: string]: Schema
    };
    parameters?: {
        [name: string]: ParameterObject
    };
    // TODO: lot more properties to define https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md#swagger-object-
}

interface Info {
    version: string;
    title: string;
    description?: string;
    termsOfService?: string;
    contact?: Contact;
    license?: License;
}

interface Contact {
    name?: string;
    url?: string;
    email?: string;
}

interface License {
    name: string;
    url?: string;
}

interface ResponseObject {
    description: string;
    schema?: Schema;
    headers?: HeaderObject[];
    examples?: any; // TODO https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md#exampleObject
}

interface HeaderObject extends ItemsObject {
    type: string;
    description?: string;
}

interface ItemsObject {
    format?: string;
    items?: ItemsObject;
}

interface ExternalDocumentation {
    description: string;
    url: string;
}

interface ResourceType {
    type: string;
}

interface MetaData {
    type: string;
    items: Schema;
}
