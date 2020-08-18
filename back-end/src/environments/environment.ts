export const environment = {
    apiLink: {
        basic: {
            role: {
                getById: "/api/Role/:id",
                main: "/api/Role",
            },
            account: {
                getById: "/api/Account/:id",
                main: "/api/Account",
            },
            camera: {
                getById: "/api/Camera/:id",
                main: "/api/Camera",
            },
            category: {
                getById: "/api/Category/:id",
                main: "/api/Category",
            },
            brand: {
                getById: "/api/Brand/:id",
                main: "/api/Brand",
            },
            order: {
                getById: "/api/Order/:id",
                main: "/api/Order",
            },
            orderDetail: {
                getById: "/api/OrderDetail/:id",
                main: "/api/OrderDetail",
            },
        },
        extra: {
            auth: {
                main: "/api/Auth",
                token: "/api/Auth/Token",
            },
        },
        endPoint: "http://localhost:8888",
    },
    database: {
        config: {
            development: {
                username: "root",
                password: "123456cb",
                database: "cameramanagement",
                host: "localhost",
                dialect: "mysql",
                operatorsAliases: false,
            },
            test: {
                username: "root",
                password: "123456cb",
                database: "cameramanagement",
                host: "localhost",
                dialect: "mysql",
                operatorsAliases: false,
            },
            production: {
                username: "root",
                password: "123456cb",
                database: "cameramanagement",
                host: "34.87.92.197",
                dialect: "mysql",
            },
        },
    },
    jwt: {
        code: "vzicqoasanQhtZicTmeGsBpacNomny",
        issue: "cameramanagement",
        subject: "analalayker@gmail.com",
    },
};
