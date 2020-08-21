import { Sequelize } from "sequelize-typescript";
import { BaseRepository } from "src/app/extras/repositories";
import { Role } from "src/app/models";

export class RoleRepository extends BaseRepository<Role> {
    constructor(sequelize: Sequelize) {
        super(Role, sequelize);
    }
}
