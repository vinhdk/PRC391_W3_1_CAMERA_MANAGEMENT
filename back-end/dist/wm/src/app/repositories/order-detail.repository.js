"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailRepository = void 0;
const repositories_1 = require("src/app/extras/repositories");
const models_1 = require("src/app/models");
class OrderDetailRepository extends repositories_1.BaseRepository {
    constructor(sequelize) {
        super(models_1.OrderDetail, sequelize);
    }
}
exports.OrderDetailRepository = OrderDetailRepository;
//# sourceMappingURL=order-detail.repository.js.map