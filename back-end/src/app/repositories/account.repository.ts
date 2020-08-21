import { Sequelize } from "sequelize-typescript";
import { BaseRepository } from "src/app/extras/repositories";
import { Account } from "src/app/models";

export class AccountRepository extends BaseRepository<Account> {
    constructor(sequelize: Sequelize) {
        super(Account, sequelize);
    }
}
