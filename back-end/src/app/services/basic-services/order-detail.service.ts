import { Sequelize } from "sequelize-typescript";
import { BaseService } from "src/app/extras/services";
import { OrderDetail } from "src/app/models";
import { OrderDetailRepository } from "src/app/repositories";
export class OrderDetailService extends BaseService<OrderDetail> {
    constructor(sequelize: Sequelize) {
        super(OrderDetail, sequelize);
    }
    public initRepository = () => {
        return new OrderDetailRepository(this.getSequelize());
    }
}
