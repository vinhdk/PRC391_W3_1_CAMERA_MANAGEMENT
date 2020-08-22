"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySwagger = void 0;
const swaggers_1 = require("src/app/extras/swaggers");
exports.CategorySwagger = swaggers_1.BaseSwagger.initBaseSwagger({
    name: "Category",
    data: {
        CM: {
            properties: {
                Name: {
                    minLength: 1,
                    title: "Name",
                    type: "string",
                },
            },
            required: ["Name"],
        },
        UM: {
            properties: {
                Name: {
                    minLength: 1,
                    title: "Name",
                    type: "string",
                },
                Id: {
                    minLength: 1,
                    title: "Id",
                    type: "string",
                },
            },
            required: ["Name", "Id"],
        },
    },
});
//# sourceMappingURL=category.swagger.js.map