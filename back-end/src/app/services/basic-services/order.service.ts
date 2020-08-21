import { Sequelize } from "sequelize-typescript";
import { BaseService } from "src/app/extras/services";
import { Order } from "src/app/models";
import { OrderRepository } from "src/app/repositories";
export class OrderService extends BaseService<Order> {
    constructor(sequelize: Sequelize) {
        super(Order, sequelize);
    }
    public initRepository = () => {
        return new OrderRepository(this.getSequelize());
    }
}
