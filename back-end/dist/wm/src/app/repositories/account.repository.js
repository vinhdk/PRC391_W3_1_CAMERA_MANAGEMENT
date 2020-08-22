"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountRepository = void 0;
const repositories_1 = require("src/app/extras/repositories");
const models_1 = require("src/app/models");
class AccountRepository extends repositories_1.BaseRepository {
    constructor(sequelize) {
        super(models_1.Account, sequelize);
    }
}
exports.AccountRepository = AccountRepository;
//# sourceMappingURL=account.repository.js.map