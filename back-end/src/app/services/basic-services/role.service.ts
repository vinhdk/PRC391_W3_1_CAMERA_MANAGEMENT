import { Sequelize } from "sequelize-typescript";
import { BaseService } from "src/app/extras/services";
import { Role } from "src/app/models";
import { RoleRepository } from "src/app/repositories";
export class RoleService extends BaseService<Role> {
    constructor(sequelize: Sequelize) {
        super(Role, sequelize);
    }
    public initRepository = () => {
        return new RoleRepository(this.getSequelize());
    }
}
