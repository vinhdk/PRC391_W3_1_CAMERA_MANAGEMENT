"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const services_1 = require("src/app/extras/services");
const models_1 = require("src/app/models");
const repositories_1 = require("src/app/repositories");
class CategoryService extends services_1.BaseService {
    constructor(sequelize) {
        super(models_1.Category, sequelize);
        this.initRepository = () => {
            return new repositories_1.CategoryRepository(this.getSequelize());
        };
    }
}
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map