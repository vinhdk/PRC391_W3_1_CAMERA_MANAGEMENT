"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const environment_1 = require("src/environments/environment");
const controllers_1 = require("src/app/controllers");
exports.AuthRouter = (app, sequelize) => {
    const CONTROLLER = new controllers_1.AuthController(sequelize);
    app.route(environment_1.environment.apiLink.extra.auth.main)
        .get((req, res, next) => {
        req.extras = {};
        CONTROLLER.useAuthorzie(req, res, next);
    })
        .post((req, res, next) => {
        CONTROLLER.useRegister(req, res, next);
    });
    app.route(environment_1.environment.apiLink.extra.auth.token)
        .post((req, res, next) => {
        CONTROLLER.useLogin(req, res, next);
    });
};
//# sourceMappingURL=auth.router.js.map