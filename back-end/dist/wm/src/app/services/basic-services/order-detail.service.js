"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailService = void 0;
const services_1 = require("src/app/extras/services");
const models_1 = require("src/app/models");
const repositories_1 = require("src/app/repositories");
class OrderDetailService extends services_1.BaseService {
    constructor(sequelize) {
        super(models_1.OrderDetail, sequelize);
        this.initRepository = () => {
            return new repositories_1.OrderDetailRepository(this.getSequelize());
        };
    }
}
exports.OrderDetailService = OrderDetailService;
//# sourceMappingURL=order-detail.service.js.map