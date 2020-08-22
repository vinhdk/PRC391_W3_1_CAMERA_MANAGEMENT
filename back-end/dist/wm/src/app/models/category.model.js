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
exports.Category = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const uuidv4_1 = __importDefault(require("uuidv4"));
const camera_model_1 = require("./camera.model");
let Category = class Category extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.IsUUID(4),
    sequelize_typescript_1.Default(uuidv4_1.default),
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Category.prototype, "Id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Category.prototype, "Name", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => camera_model_1.Camera),
    __metadata("design:type", Array)
], Category.prototype, "Cameras", void 0);
__decorate([
    sequelize_typescript_1.Default(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Category.prototype, "IsDelete", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Category.prototype, "CreatedAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Category.prototype, "UpdatedAt", void 0);
Category = __decorate([
    sequelize_typescript_1.Table
], Category);
exports.Category = Category;
//# sourceMappingURL=category.model.js.map