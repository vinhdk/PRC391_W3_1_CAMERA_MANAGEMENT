"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountSwagger = void 0;
const swaggers_1 = require("src/app/extras/swaggers");
exports.AccountSwagger = swaggers_1.BaseSwagger.initBaseSwagger({
    name: "Account",
    data: {
        CM: {
            properties: {
                Username: {
                    minLength: 1,
                    title: "Name",
                    type: "Username",
                },
                Fullname: {
                    minLength: 1,
                    title: "Name",
                    type: "Fullname",
                },
                Password: {
                    minLength: 1,
                    title: "Name",
                    type: "Password",
                },
                Email: {
                    minLength: 1,
                    title: "Name",
                    type: "Email",
                },
                Phone: {
                    minLength: 1,
                    title: "Name",
                    type: "Phone",
                },
                RoleId: {
                    minLength: 1,
                    title: "Name",
                    type: "RoleId",
                },
            },
            required: ["Username", "Fullname", "Password", "Email", "Phone", "RoleId"],
        },
        UM: {
            properties: {
                Username: {
                    minLength: 1,
                    title: "Name",
                    type: "Username",
                },
                Fullname: {
                    minLength: 1,
                    title: "Name",
                    type: "Fullname",
                },
                Email: {
                    minLength: 1,
                    title: "Name",
                    type: "Email",
                },
                Phone: {
                    minLength: 1,
                    title: "Name",
                    type: "Phone",
                },
                RoleId: {
                    minLength: 1,
                    title: "Name",
                    type: "RoleId",
                },
            },
            required: ["Username", "Fullname", "Email", "Phone", "RoleId"],
        },
    },
});
//# sourceMappingURL=account.swagger.js.map