import { Sequelize } from "sequelize-typescript";
import { BaseRepository } from "src/app/extras/repositories";
import { Brand } from "src/app/models";

export class BrandRepository extends BaseRepository<Brand> {
    constructor(sequelize: Sequelize) {
        super(Brand, sequelize);
    }
}
