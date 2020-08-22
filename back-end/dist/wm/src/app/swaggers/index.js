"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SWAGGERS = void 0;
const brand_swagger_1 = require("./basic-swaggers/brand.swagger");
const category_swagger_1 = require("./basic-swaggers/category.swagger");
const camera_swagger_1 = require("./basic-swaggers/camera.swagger");
const role_swagger_1 = require("./basic-swaggers/role.swagger");
const account_swagger_1 = require("./basic-swaggers/account.swagger");
const order_swagger_1 = require("./basic-swaggers/order.swagger");
const order_detail_swagger_1 = require("./basic-swaggers/order-detail.swagger");
const auth_swagger_1 = require("./extra-swaggers/auth.swagger");
exports.SWAGGERS = [auth_swagger_1.AuthSwagger, brand_swagger_1.BrandSwagger, category_swagger_1.CategorySwagger, camera_swagger_1.CameraSwagger, role_swagger_1.RoleSwagger, account_swagger_1.AccountSwagger, order_swagger_1.OrderSwagger, order_detail_swagger_1.OrderDetailSwagger];
//# sourceMappingURL=index.js.map