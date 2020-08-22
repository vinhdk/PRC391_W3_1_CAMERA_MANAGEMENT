"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const uuidv4_1 = __importDefault(require("uuidv4"));
const order_detail_model_1 = require("./order-detail.model");
const account_model_1 = require("./account.model");
let Order = class Order extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.IsUUID(4),
    sequelize_typescript_1.Default(uuidv4_1.default),
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Order.prototype, "Id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => account_model_1.Account),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Order.prototype, "Username", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => account_model_1.Account, "Username"),
    __metadata("design:type", account_model_1.Account)
], Order.prototype, "Account", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => order_detail_model_1.OrderDetail),
    __metadata("design:type", Array)
], Order.prototype, "OrderDetails", void 0);
__decorate([
    sequelize_typescript_1.Default(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Order.prototype, "IsDelete", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Order.prototype, "CreatedAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Order.prototype, "UpdatedAt", void 0);
Order = __decorate([
    sequelize_typescript_1.Table
], Order);
exports.Order = Order;
//# sourceMappingURL=order.model.js.map