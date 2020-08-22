"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthSwagger = void 0;
const swaggers_1 = require("src/app/extras/swaggers");
exports.AuthSwagger = swaggers_1.BaseSwagger.initAuthSwagger({
    name: "Auth",
    data: {
        GM: {
            properties: {
                Username: {
                    minLength: 1,
                    title: "Username",
                    type: "string",
                },
                Password: {
                    minLength: 1,
                    title: "Password",
                    type: "string",
                },
            },
            required: ["Username", "Password"],
        },
        CM: {
            properties: {
                Username: {
                    minLength: 1,
                    title: "Username",
                    type: "string",
                },
                Fullname: {
                    minLength: 1,
                    title: "Fullname",
                    type: "string",
                },
                Password: {
                    minLength: 1,
                    title: "Password",
                    type: "string",
                },
                Email: {
                    minLength: 1,
                    title: "Email",
                    type: "string",
                },
                Phone: {
                    minLength: 1,
                    title: "Phone",
                    type: "string",
                },
                RoleId: {
                    minLength: 1,
                    title: "RoleId",
                    type: "string",
                },
            },
            required: ["Username", "Fullname", "Password", "Email", "Phone", "RoleId"],
        },
        UM: {
            properties: {
                Username: {
                    minLength: 1,
                    title: "Username",
                    type: "string",
                },
                Fullname: {
                    minLength: 1,
                    title: "Fullname",
                    type: "string",
                },
                Email: {
                    minLength: 1,
                    title: "Email",
                    type: "string",
                },
                Phone: {
                    minLength: 1,
                    title: "Phone",
                    type: "string",
                },
                RoleId: {
                    minLength: 1,
                    title: "RoleId",
                    type: "string",
                },
            },
            required: ["Username", "Fullname", "Email", "Phone", "RoleId"],
        },
    },
});
//# sourceMappingURL=auth.swagger.js.map