import { Sequelize } from "sequelize-typescript";
import { BaseRepository } from "src/app/extras/repositories";
import { Order } from "src/app/models";

export class OrderRepository extends BaseRepository<Order> {
    constructor(sequelize: Sequelize) {
        super(Order, sequelize);
    }
}
