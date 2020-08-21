import { BelongsTo, Column, CreatedAt, Default, ForeignKey, HasMany, IsUUID, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import uuid from "uuidv4";
import { Camera } from "./camera.model";
import { Order } from "./order.model";

@Table
export class OrderDetail extends Model<OrderDetail> {

    @IsUUID(4)
    @Default(uuid)
    @PrimaryKey
    @Column
    public Id!: string;

    @Column
    public Quantity!: number;

    @ForeignKey(() => Camera)
    @Column
    public CameraId!: string;

    @BelongsTo(() => Camera, "CameraId")
    public Camera!: Camera;

    @ForeignKey(() => Order)
    @Column
    public OrderId!: string;

    @BelongsTo(() => Order, "OrderId")
    public Order!: Order;

    @Default(false)
    @Column
    public IsDelete!: boolean;

    @CreatedAt
    public CreatedAt!: Date;

    @UpdatedAt
    public UpdatedAt!: Date;
}
