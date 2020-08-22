"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const services_1 = require("src/app/extras/services");
const models_1 = require("src/app/models");
const repositories_1 = require("src/app/repositories");
class OrderService extends services_1.BaseService {
    constructor(sequelize) {
        super(models_1.Order, sequelize);
        this.initRepository = () => {
            return new repositories_1.OrderRepository(this.getSequelize());
        };
    }
}
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map