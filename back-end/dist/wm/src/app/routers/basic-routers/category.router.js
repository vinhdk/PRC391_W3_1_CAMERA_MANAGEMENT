"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRouter = void 0;
const environment_1 = require("src/environments/environment");
const controllers_1 = require("src/app/controllers");
exports.CategoryRouter = (app, sequelize) => {
    const AUTH = new controllers_1.AuthController(sequelize).useAuthorzie;
    const CONTROLLER = new controllers_1.CategoryController(sequelize);
    app.route(environment_1.environment.apiLink.basic.category.main)
        .get(AUTH, (req, res, next) => {
        CONTROLLER.useFindAll(req, res, next);
    })
        .post(AUTH, (req, res, next) => {
        CONTROLLER.useCreate(req, res, next);
    })
        .put(AUTH, (req, res, next) => {
        CONTROLLER.useUpdate(req, res, next);
    });
    app.route(environment_1.environment.apiLink.basic.category.getById)
        .get(AUTH, (req, res, next) => {
        CONTROLLER.useFindById(req, res, next);
    })
        .delete(AUTH, (req, res, next) => {
        CONTROLLER.useRemove(req, res, next);
    });
};
//# sourceMappingURL=category.router.js.map