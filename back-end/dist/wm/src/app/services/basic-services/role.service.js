"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleService = void 0;
const services_1 = require("src/app/extras/services");
const models_1 = require("src/app/models");
const repositories_1 = require("src/app/repositories");
class RoleService extends services_1.BaseService {
    constructor(sequelize) {
        super(models_1.Role, sequelize);
        this.initRepository = () => {
            return new repositories_1.RoleRepository(this.getSequelize());
        };
    }
}
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map