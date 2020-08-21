import { BelongsTo, Column, CreatedAt, Length, Default, ForeignKey, HasMany, IsUUID, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import uuid from "uuidv4";
import { Category } from "./category.model";
import { Brand } from "./brand.model";
import { OrderDetail } from "./order-detail.model";

@Table
export class Camera extends Model<Camera> {

    @IsUUID(4)
    @Default(uuid)
    @PrimaryKey
    @Column
    public Id!: string;

    @Column
    public Name!: string;

    @Column
    public Megapixel!: number;

    @Column
    public Price!: number;

    @Column
    public Quantity!: number;

    @Column
    public Image!: string;

    @Length({ max: 500, min: 0 })
    @Column
    public Description?: string;

    @ForeignKey(() => Category)
    @Column
    public CategoryId!: string;

    @BelongsTo(() => Category, "CategoryId")
    public Category!: Category;

    @ForeignKey(() => Brand)
    @Column
    public BrandId!: string;

    @BelongsTo(() => Brand, "BrandId")
    public Brand!: Brand;

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
