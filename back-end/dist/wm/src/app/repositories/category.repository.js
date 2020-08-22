"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRepository = void 0;
const models_1 = require("src/app/models");
const repositories_1 = require("src/app/extras/repositories");
class CategoryRepository extends repositories_1.BaseRepository {
    constructor(sequelize) {
        super(models_1.Category, sequelize);
    }
}
exports.CategoryRepository = CategoryRepository;
//# sourceMappingURL=category.repository.js.map