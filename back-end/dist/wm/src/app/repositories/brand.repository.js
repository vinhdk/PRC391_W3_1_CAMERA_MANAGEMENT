"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandRepository = void 0;
const repositories_1 = require("src/app/extras/repositories");
const models_1 = require("src/app/models");
class BrandRepository extends repositories_1.BaseRepository {
    constructor(sequelize) {
        super(models_1.Brand, sequelize);
    }
}
exports.BrandRepository = BrandRepository;
//# sourceMappingURL=brand.repository.js.map