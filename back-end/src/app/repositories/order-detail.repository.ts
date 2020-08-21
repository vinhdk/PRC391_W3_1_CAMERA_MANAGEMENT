import { Sequelize } from "sequelize-typescript";
import { BaseRepository } from "src/app/extras/repositories";
import { OrderDetail } from "src/app/models";

export class OrderDetailRepository extends BaseRepository<OrderDetail> {
    constructor(sequelize: Sequelize) {
        super(OrderDetail, sequelize);
    }
}
