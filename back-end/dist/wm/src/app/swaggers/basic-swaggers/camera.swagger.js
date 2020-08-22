"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CameraSwagger = void 0;
const swaggers_1 = require("src/app/extras/swaggers");
exports.CameraSwagger = swaggers_1.BaseSwagger.initBaseSwagger({
    name: "Camera",
    data: {
        CM: {
            properties: {
                Name: {
                    minLength: 1,
                    title: "Name",
                    type: "string",
                },
                Price: {
                    minLength: 1,
                    title: "Price",
                    type: "integer",
                    format: "int64",
                },
                Megapixel: {
                    minLength: 1,
                    title: "Megapixel",
                    type: "integer",
                    format: "int64",
                },
                Quantity: {
                    minLength: 1,
                    title: "Quantity",
                    type: "integer",
                    format: "int64",
                },
                Description: {
                    minLength: 1,
                    title: "Description",
                    type: "string",
                },
            },
            required: ["Name", "Price", "Megapixel", "Quantity", "Image"],
        },
        UM: {
            properties: {
                Id: {
                    minLength: 1,
                    title: "Id",
                    type: "string",
                },
                Name: {
                    minLength: 1,
                    title: "Name",
                    type: "string",
                },
                Price: {
                    minLength: 1,
                    title: "Price",
                    type: "integer",
                    format: "int64",
                },
                Megapixel: {
                    minLength: 1,
                    title: "Megapixel",
                    type: "integer",
                    format: "int64",
                },
                Quantity: {
                    minLength: 1,
                    title: "Quantity",
                    type: "integer",
                    format: "int64",
                },
                Description: {
                    minLength: 1,
                    title: "Description",
                    type: "string",
                },
            },
            required: ["Id", "Name", "Price", "Megapixel", "Quantity", "Image"],
        },
    },
});
//# sourceMappingURL=camera.swagger.js.map