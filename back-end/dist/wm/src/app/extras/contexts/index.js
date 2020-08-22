"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const environment_1 = require("src/environments/environment");
const models_1 = require("src/app/models");
class Context {
    constructor() {
        const config = environment_1.environment.database.config.production;
        this.sequelize = new sequelize_typescript_1.Sequelize(Object.assign(Object.assign({ models: [...models_1.MODELS] }, config), { dialect: config.dialect, host: config.host, name: config.database, password: config.password, pool: {
                // connectionLimit: 1000,
                // acquire: 300000000,
                // idle: 100000000,
                max: 1000,
                min: 0,
            }, repositoryMode: true, username: config.username, validateOnly: false }));
    }
    connection() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.sequelize.sync();
        });
    }
}
exports.Context = Context;
//# sourceMappingURL=index.js.map