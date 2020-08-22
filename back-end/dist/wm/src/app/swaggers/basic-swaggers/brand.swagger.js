"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandSwagger = void 0;
const swaggers_1 = require("src/app/extras/swaggers");
exports.BrandSwagger = swaggers_1.BaseSwagger.initBaseSwagger({
    name: "Brand",
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
//# sourceMappingURL=brand.swagger.js.map