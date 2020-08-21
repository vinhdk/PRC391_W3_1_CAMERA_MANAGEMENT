import { BelongsTo, Column, CreatedAt, Default, ForeignKey, HasMany, IsUUID, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import uuid from "uuidv4";
import { OrderDetail } from "./order-detail.model";
import { Account } from "./account.model";

@Table
export class Order extends Model<Order> {

    @IsUUID(4)
    @Default(uuid)
    @PrimaryKey
    @Column
    public Id!: string;

    @ForeignKey(() => Account)
    @Column
    public Username!: string;

    @BelongsTo(() => Account, "Username")
    public Account!: Account;

    @HasMany(() => OrderDetail)
    public OrderDetails!: OrderDetail[];

    @Default(false)
    @Column
    public IsDelete!: boolean;

    @CreatedAt
    public CreatedAt!: Date;

    @UpdatedAt
    public UpdatedAt!: Date;
}
