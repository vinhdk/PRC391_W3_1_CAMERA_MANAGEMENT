"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
exports.environment = {
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
        endPoint: "https://camera-management.et.r.appspot.com",
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
                host: "35.198.196.168",
                dialect: "mysql",
            },
        },
    },
    firebase: {
        databaseURL: "https://camera-management.firebaseio.com",
        bucketUrl: "camera-management.appspot.com",
        linkDownloadFile: "https://storage.googleapis.com/camera-management.appspot.com/",
    },
    jwt: {
        code: "vzicqoasanQhtZicTmeGsBpacNomny",
        issue: "cameramanagement",
        subject: "analalayker@gmail.com",
    },
};
//# sourceMappingURL=environment.js.map