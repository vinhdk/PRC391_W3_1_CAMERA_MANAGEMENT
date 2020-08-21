import { BelongsTo, Column, CreatedAt, Default, ForeignKey, HasMany, IsUUID, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import uuid from "uuidv4";
import { Order } from "./order.model";
import { Role } from "./role.model";

@Table
export class Account extends Model<Account> {

    @PrimaryKey
    @Column
    public Username!: string;

    @Column
    public Fullname!: string;

    @Column
    public Email!: string;

    @Column
    public Phone!: string;

    @Column
    public PasswordHash!: string;

    @ForeignKey(() => Role)
    @Column
    public RoleId!: string;

    @BelongsTo(() => Role, "RoleId")
    public Role!: Role;

    @HasMany(() => Order)
    public Orders!: Order[];

    @Default(false)
    @Column
    public IsDelete!: boolean;

    @CreatedAt
    public CreatedAt!: Date;

    @UpdatedAt
    public UpdatedAt!: Date;
}
