import { BelongsTo, Column, CreatedAt, Default, ForeignKey, HasMany, IsUUID, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import uuid from "uuidv4";
import { Account } from "./account.model";

@Table
export class Role extends Model<Role> {

    @IsUUID(4)
    @Default(uuid)
    @PrimaryKey
    @Column
    public Id!: string;

    @Column
    public Name!: string;

    @HasMany(() => Account)
    public Accounts!: Account[];

    @Default(false)
    @Column
    public IsDelete!: boolean;

    @CreatedAt
    public CreatedAt!: Date;

    @UpdatedAt
    public UpdatedAt!: Date;
}
