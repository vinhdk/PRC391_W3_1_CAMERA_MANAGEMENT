import { Sequelize } from "sequelize-typescript";
import { BaseService } from "src/app/extras/services";
import { Brand } from "src/app/models";
import { BrandRepository } from "src/app/repositories";
export class BrandService extends BaseService<Brand> {
    constructor(sequelize: Sequelize) {
        super(Brand, sequelize);
    }
    public initRepository = () => {
        return new BrandRepository(this.getSequelize());
    }
}
