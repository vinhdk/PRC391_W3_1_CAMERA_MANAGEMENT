"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountService = void 0;
const services_1 = require("src/app/extras/services");
const models_1 = require("src/app/models");
const repositories_1 = require("src/app/repositories");
class AccountService extends services_1.BaseService {
    constructor(sequelize) {
        super(models_1.Account, sequelize);
        this.initRepository = () => {
            return new repositories_1.AccountRepository(this.getSequelize());
        };
    }
}
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map