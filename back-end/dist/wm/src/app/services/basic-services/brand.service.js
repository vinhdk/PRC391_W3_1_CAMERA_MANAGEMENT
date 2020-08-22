"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandService = void 0;
const services_1 = require("src/app/extras/services");
const models_1 = require("src/app/models");
const repositories_1 = require("src/app/repositories");
class BrandService extends services_1.BaseService {
    constructor(sequelize) {
        super(models_1.Brand, sequelize);
        this.initRepository = () => {
            return new repositories_1.BrandRepository(this.getSequelize());
        };
    }
}
exports.BrandService = BrandService;
//# sourceMappingURL=brand.service.js.map