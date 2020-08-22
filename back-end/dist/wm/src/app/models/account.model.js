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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const order_model_1 = require("./order.model");
const role_model_1 = require("./role.model");
let Account = class Account extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Account.prototype, "Username", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Account.prototype, "Fullname", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Account.prototype, "Email", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Account.prototype, "Phone", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Account.prototype, "PasswordHash", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => role_model_1.Role),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Account.prototype, "RoleId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => role_model_1.Role, "RoleId"),
    __metadata("design:type", role_model_1.Role)
], Account.prototype, "Role", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => order_model_1.Order),
    __metadata("design:type", Array)
], Account.prototype, "Orders", void 0);
__decorate([
    sequelize_typescript_1.Default(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Account.prototype, "IsDelete", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Account.prototype, "CreatedAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Account.prototype, "UpdatedAt", void 0);
Account = __decorate([
    sequelize_typescript_1.Table
], Account);
exports.Account = Account;
//# sourceMappingURL=account.model.js.map