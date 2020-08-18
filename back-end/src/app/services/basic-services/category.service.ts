import { Sequelize } from "sequelize-typescript";
import { BaseService } from "src/app/extras/services";
import { Category } from "src/app/models";
import { CategoryRepository } from "src/app/repositories";
export class CategoryService extends BaseService<Category> {
    constructor(sequelize: Sequelize) {
        super(Category, sequelize);
    }
    public initRepository = () => {
        return new CategoryRepository(this.getSequelize());
    }
}
