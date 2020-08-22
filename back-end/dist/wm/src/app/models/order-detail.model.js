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
exports.OrderDetail = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const uuidv4_1 = __importDefault(require("uuidv4"));
const camera_model_1 = require("./camera.model");
const order_model_1 = require("./order.model");
let OrderDetail = class OrderDetail extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.IsUUID(4),
    sequelize_typescript_1.Default(uuidv4_1.default),
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], OrderDetail.prototype, "Id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], OrderDetail.prototype, "Quantity", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => camera_model_1.Camera),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], OrderDetail.prototype, "CameraId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => camera_model_1.Camera, "CameraId"),
    __metadata("design:type", camera_model_1.Camera)
], OrderDetail.prototype, "Camera", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => order_model_1.Order),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], OrderDetail.prototype, "OrderId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => order_model_1.Order, "OrderId"),
    __metadata("design:type", order_model_1.Order)
], OrderDetail.prototype, "Order", void 0);
__decorate([
    sequelize_typescript_1.Default(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], OrderDetail.prototype, "IsDelete", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], OrderDetail.prototype, "CreatedAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], OrderDetail.prototype, "UpdatedAt", void 0);
OrderDetail = __decorate([
    sequelize_typescript_1.Table
], OrderDetail);
exports.OrderDetail = OrderDetail;
//# sourceMappingURL=order-detail.model.js.map