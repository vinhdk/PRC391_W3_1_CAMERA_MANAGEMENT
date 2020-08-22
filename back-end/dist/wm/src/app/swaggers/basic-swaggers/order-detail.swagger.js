"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailSwagger = void 0;
const swaggers_1 = require("src/app/extras/swaggers");
exports.OrderDetailSwagger = swaggers_1.BaseSwagger.initBaseSwagger({
    name: "OrderDetail",
    data: {
        CM: {
            properties: {
                Quantity: {
                    minLength: 1,
                    title: "Quantity",
                    type: "integer",
                    format: "int64",
                },
                OrderId: {
                    minLength: 1,
                    title: "OrderId",
                    type: "string",
                },
                CameraId: {
                    minLength: 1,
                    title: "CameraId",
                    type: "string",
                },
            },
            required: ["Quantity", "OrderId", "CameraId"],
        },
        UM: {
            properties: {
                Quantity: {
                    minLength: 1,
                    title: "Quantity",
                    type: "integer",
                    format: "int64",
                },
                OrderId: {
                    minLength: 1,
                    title: "OrderId",
                    type: "string",
                },
                CameraId: {
                    minLength: 1,
                    title: "CameraId",
                    type: "string",
                },
                Id: {
                    minLength: 1,
                    title: "Id",
                    type: "string",
                },
            },
            required: ["Id", "Quantity", "OrderId", "CameraId"],
        },
    },
});
//# sourceMappingURL=order-detail.swagger.js.map