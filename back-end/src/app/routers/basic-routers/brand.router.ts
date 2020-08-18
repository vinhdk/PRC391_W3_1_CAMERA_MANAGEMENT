import { Application } from "express";
import { Sequelize } from "sequelize-typescript";
import { environment } from "src/environments/environment";
import { BrandController } from "src/app/controllers";

export const BrandRouter = (app: Application, sequelize: Sequelize) => {
    // const AUTH = new AuthService(sequelize).useAuthorzie;
    const CONTROLLER = new BrandController(sequelize);
    app.route(environment.apiLink.basic.brand.main)
        .get((req, res, next) => {
            CONTROLLER.useFindAll(req, res, next);
        })
        .post((req, res, next) => {
            CONTROLLER.useCreate(req, res, next);
        })
        .put((req, res, next) => {
            CONTROLLER.useUpdate(req, res, next);
        });
    app.route(environment.apiLink.basic.brand.getById)
        .get((req, res, next) => {
            CONTROLLER.useFindById(req, res, next);
        })
        .delete((req, res, next) => {
            CONTROLLER.useRemove(req, res, next);
        });
};
