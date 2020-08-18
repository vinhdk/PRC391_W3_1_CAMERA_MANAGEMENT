import { Sequelize } from "sequelize-typescript";
import { Category } from "src/app/models";
import { BaseRepository } from "src/app/extras/repositories";

export class CategoryRepository extends BaseRepository<Category> {
    constructor(sequelize: Sequelize) {
        super(Category, sequelize);
    }
}
