"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
const repositories_1 = require("src/app/extras/repositories");
const models_1 = require("src/app/models");
class OrderRepository extends repositories_1.BaseRepository {
    constructor(sequelize) {
        super(models_1.Order, sequelize);
    }
}
exports.OrderRepository = OrderRepository;
//# sourceMappingURL=order.repository.js.map