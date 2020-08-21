import { Application } from "express";
import { Sequelize } from "sequelize-typescript";
import { environment } from "src/environments/environment";
import { AuthController } from "src/app/controllers";

export const AuthRouter = (app: Application, sequelize: Sequelize) => {
    const CONTROLLER = new AuthController(sequelize);
    app.route(environment.apiLink.extra.auth.main)
        .get((req, res, next) => {
            (req as any).extras = {};
            CONTROLLER.useAuthorzie(req, res, next);
        })
        .post((req, res, next) => {
            CONTROLLER.useRegister(req, res, next);
        });
    app.route(environment.apiLink.extra.auth.token)
        .post((req, res, next) => {
            CONTROLLER.useLogin(req, res, next);
        });
};
