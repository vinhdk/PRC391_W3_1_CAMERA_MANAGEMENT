"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSwagger = void 0;
const swaggers_1 = require("src/app/extras/swaggers");
exports.OrderSwagger = swaggers_1.BaseSwagger.initBaseSwagger({
    name: "Order",
    data: {
        CM: {
            properties: {
                Username: {
                    minLength: 1,
                    title: "Username",
                    type: "string",
                },
            },
            required: ["Username"],
        },
        UM: {
            properties: {
                Username: {
                    minLength: 1,
                    title: "Username",
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
//# sourceMappingURL=order.swagger.js.map