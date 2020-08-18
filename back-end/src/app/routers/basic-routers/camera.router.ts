import { Application } from "express";
import { Sequelize } from "sequelize-typescript";
import { environment } from "src/environments/environment";
import { CameraController } from "src/app/controllers";

export const CameraRouter = (app: Application, sequelize: Sequelize) => {
    // const AUTH = new AuthService(sequelize).useAuthorzie;
    const CONTROLLER = new CameraController(sequelize);
    app.route(environment.apiLink.basic.camera.main)
        .get((req, res, next) => {
            CONTROLLER.useFindAll(req, res, next);
        })
        .post((req, res, next) => {
            CONTROLLER.useCreate(req, res, next);
        })
        .put((req, res, next) => {
            CONTROLLER.useUpdate(req, res, next);
        });
    app.route(environment.apiLink.basic.camera.getById)
        .get((req, res, next) => {
            CONTROLLER.useFindById(req, res, next);
        })
        .delete((req, res, next) => {
            CONTROLLER.useRemove(req, res, next);
        });
};
