import { Application } from "express";
import { Sequelize } from "sequelize-typescript";
import { environment } from "src/environments/environment";
import { CategoryController, AuthController } from "src/app/controllers";

export const CategoryRouter = (app: Application, sequelize: Sequelize) => {
    const AUTH = new AuthController(sequelize).useAuthorzie;
    const CONTROLLER = new CategoryController(sequelize);
    app.route(environment.apiLink.basic.category.main)
        .get(AUTH, (req, res, next) => {
            CONTROLLER.useFindAll(req, res, next);
        })
        .post(AUTH, (req, res, next) => {
            CONTROLLER.useCreate(req, res, next);
        })
        .put(AUTH, (req, res, next) => {
            CONTROLLER.useUpdate(req, res, next);
        });
    app.route(environment.apiLink.basic.category.getById)
        .get(AUTH, (req, res, next) => {
            CONTROLLER.useFindById(req, res, next);
        })
        .delete(AUTH, (req, res, next) => {
            CONTROLLER.useRemove(req, res, next);
        });
};
