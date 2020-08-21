import { BaseSwagger } from "src/app/extras/swaggers";

export const OrderSwagger = BaseSwagger.initBaseSwagger({
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
