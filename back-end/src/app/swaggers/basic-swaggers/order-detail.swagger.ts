import { BaseSwagger } from "src/app/extras/swaggers";

export const OrderDetailSwagger = BaseSwagger.initBaseSwagger({
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
