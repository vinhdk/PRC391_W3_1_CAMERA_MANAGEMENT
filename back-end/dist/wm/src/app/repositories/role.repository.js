"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleRepository = void 0;
const repositories_1 = require("src/app/extras/repositories");
const models_1 = require("src/app/models");
class RoleRepository extends repositories_1.BaseRepository {
    constructor(sequelize) {
        super(models_1.Role, sequelize);
    }
}
exports.RoleRepository = RoleRepository;
//# sourceMappingURL=role.repository.js.map