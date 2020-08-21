import { BaseSwagger } from "src/app/extras/swaggers";

export const AuthSwagger = BaseSwagger.initAuthSwagger({
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
