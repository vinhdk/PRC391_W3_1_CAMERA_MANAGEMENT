import { Application } from "express";
import { Sequelize } from "sequelize-typescript";
import { environment } from "src/environments/environment";
import { BrandController, AuthController } from "src/app/controllers";

export const BrandRouter = (app: Application, sequelize: Sequelize) => {
    const AUTH = new AuthController(sequelize).useAuthorzie;
    const CONTROLLER = new BrandController(sequelize);
    app.route(environment.apiLink.basic.brand.main)
        .get(AUTH, (req, res, next) => {
            CONTROLLER.useFindAll(req, res, next);
        })
        .post(AUTH, (req, res, next) => {
            CONTROLLER.useCreate(req, res, next);
        })
        .put(AUTH, (req, res, next) => {
            CONTROLLER.useUpdate(req, res, next);
        });
    app.route(environment.apiLink.basic.brand.getById)
        .get(AUTH, (req, res, next) => {
            CONTROLLER.useFindById(req, res, next);
        })
        .delete(AUTH, (req, res, next) => {
            CONTROLLER.useRemove(req, res, next);
        });
};
