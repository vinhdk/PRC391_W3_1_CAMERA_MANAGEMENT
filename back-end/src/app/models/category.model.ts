import { BelongsTo, Column, CreatedAt, Default, ForeignKey, HasMany, IsUUID, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import uuid from "uuidv4";
import { Camera } from "./camera.model";

@Table
export class Category extends Model<Category> {

    @IsUUID(4)
    @Default(uuid)
    @PrimaryKey
    @Column
    public Id!: string;

    @Column
    public Name!: string;

    @HasMany(() => Camera)
    public Cameras!: Camera[];
}
