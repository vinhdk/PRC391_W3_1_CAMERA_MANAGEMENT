"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseSwagger = void 0;
class BaseSwagger {
}
exports.BaseSwagger = BaseSwagger;
BaseSwagger.initBaseSwagger = (options) => {
    const definitions = {
        [options.name + "CM"]: {
            additionalProperties: false,
            properties: options.data.CM.properties,
            required: options.data.CM.required,
            type: "object",
        },
        [options.name + "UM"]: {
            additionalProperties: false,
            properties: options.data.UM.properties,
            required: options.data.UM.required,
            type: "object",
        },
    };
    const paths = {
        [`/api/${options.name}`]: {
            get: {
                tags: [options.name],
                operationId: options.name + "_Get",
                consumes: [
                    "application/json",
                    "application/json-patch+json",
                    "text/json",
                    "application/*+json",
                ],
                responses: {
                    200: {
                        "x-nullable": true,
                        "description": "",
                    },
                },
                security: [{
                        JWT: [],
                    }],
            },
            post: {
                tags: [options.name],
                operationId: options.name + "_Post",
                consumes: [
                    "application/json",
                    "application/json-patch+json",
                    "text/json",
                    "application/*+json",
                ],
                parameters: [{
                        "name": "model",
                        "in": "body",
                        "required": true,
                        "schema": {
                            $ref: "#/definitions/" + options.name + "CM",
                        },
                        "x-nullable": false,
                    }],
                responses: {
                    200: {
                        "x-nullable": true,
                        "description": "",
                    },
                },
                security: [{
                        JWT: [],
                    }],
            },
            put: {
                tags: [options.name],
                operationId: options.name + "_Put",
                consumes: [
                    "application/json",
                    "application/json-patch+json",
                    "text/json",
                    "application/*+json",
                ],
                parameters: [{
                        "name": "model",
                        "in": "body",
                        "required": true,
                        "schema": {
                            $ref: "#/definitions/" + options.name + "UM",
                        },
                        "x-nullable": false,
                    }],
                responses: {
                    200: {
                        "x-nullable": true,
                        "description": "",
                    },
                },
                security: [{
                        JWT: [],
                    }],
            },
        },
        [`/api/${options.name}/{id}`]: {
            get: {
                tags: [options.name],
                operationId: options.name + "_GetById",
                consumes: [
                    "application/json",
                    "application/json-patch+json",
                    "text/json",
                    "application/*+json",
                ],
                parameters: [{
                        "name": "id",
                        "in": "path",
                        "type": "string",
                        "format": "uuid",
                        "required": true,
                        "x-nullable": false,
                    }],
                responses: {
                    200: {
                        "x-nullable": true,
                        "description": "",
                    },
                },
                security: [{
                        JWT: [],
                    }],
            },
            delete: {
                tags: [options.name],
                operationId: options.name + "_Delete",
                consumes: [
                    "application/json",
                    "application/json-patch+json",
                    "text/json",
                    "application/*+json",
                ],
                parameters: [{
                        "name": "id",
                        "in": "path",
                        "type": "string",
                        "format": "uuid",
                        "required": true,
                        "x-nullable": false,
                    }],
                responses: {
                    200: {
                        "x-nullable": true,
                        "description": "",
                    },
                },
                security: [{
                        JWT: [],
                    }],
            },
        },
    };
    return {
        definitions,
        paths,
    };
};
BaseSwagger.initAuthSwagger = (options) => {
    const definitions = {
        [options.name + "GM"]: {
            additionalProperties: false,
            properties: options.data.GM.properties,
            required: options.data.GM.required,
            type: "object",
        },
        [options.name + "CM"]: {
            additionalProperties: false,
            properties: options.data.CM.properties,
            required: options.data.CM.required,
            type: "object",
        },
        [options.name + "UM"]: {
            additionalProperties: false,
            properties: options.data.UM.properties,
            required: options.data.UM.required,
            type: "object",
        },
    };
    const paths = {
        [`/api/${options.name}`]: {
            get: {
                tags: [options.name],
                operationId: options.name + "_Get",
                consumes: [
                    "application/json",
                    "application/json-patch+json",
                    "text/json",
                    "application/*+json",
                ],
                responses: {
                    200: {
                        "x-nullable": true,
                        "description": "",
                    },
                },
                security: [{
                        JWT: [],
                    }],
            },
            post: {
                tags: [options.name],
                operationId: options.name + "_Post",
                consumes: [
                    "application/json",
                    "application/json-patch+json",
                    "text/json",
                    "application/*+json",
                ],
                parameters: [{
                        "name": "model",
                        "in": "body",
                        "required": true,
                        "schema": {
                            $ref: "#/definitions/" + options.name + "CM",
                        },
                        "x-nullable": false,
                    }],
                responses: {
                    200: {
                        "x-nullable": true,
                        "description": "",
                    },
                },
                security: [{
                        JWT: [],
                    }],
            },
            put: {
                tags: [options.name],
                operationId: options.name + "_Put",
                consumes: [
                    "application/json",
                    "application/json-patch+json",
                    "text/json",
                    "application/*+json",
                ],
                parameters: [{
                        "name": "model",
                        "in": "body",
                        "required": true,
                        "schema": {
                            $ref: "#/definitions/" + options.name + "UM",
                        },
                        "x-nullable": false,
                    }],
                responses: {
                    200: {
                        "x-nullable": true,
                        "description": "",
                    },
                },
                security: [{
                        JWT: [],
                    }],
            },
        },
        [`/api/${options.name}/Token`]: {
            post: {
                tags: [options.name],
                operationId: options.name + "_PostToken",
                consumes: [
                    "application/json",
                    "application/json-patch+json",
                    "text/json",
                    "application/*+json",
                ],
                parameters: [{
                        "name": "model",
                        "in": "body",
                        "required": true,
                        "schema": {
                            $ref: "#/definitions/" + options.name + "GM",
                        },
                        "x-nullable": false,
                    }],
                responses: {
                    200: {
                        "x-nullable": true,
                        "description": "",
                    },
                },
                security: [{
                        JWT: [],
                    }],
            },
        },
    };
    return {
        definitions,
        paths,
    };
};
//# sourceMappingURL=index.js.map