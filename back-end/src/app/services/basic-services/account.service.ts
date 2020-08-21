import { Sequelize } from "sequelize-typescript";
import { BaseService } from "src/app/extras/services";
import { Account } from "src/app/models";
import { AccountRepository } from "src/app/repositories";
export class AccountService extends BaseService<Account> {
    constructor(sequelize: Sequelize) {
        super(Account, sequelize);
    }
    public initRepository = () => {
        return new AccountRepository(this.getSequelize());
    }
}
