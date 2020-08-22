"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROUTERS = void 0;
const brand_router_1 = require("./basic-routers/brand.router");
const category_router_1 = require("./basic-routers/category.router");
const camera_router_1 = require("./basic-routers/camera.router");
const role_router_1 = require("./basic-routers/role.router");
const account_router_1 = require("./basic-routers/account.router");
const order_router_1 = require("./basic-routers/order.router");
const order_detail_router_1 = require("./basic-routers/order-detail.router");
const auth_router_1 = require("./extra-routers/auth.router");
__exportStar(require("./basic-routers/brand.router"), exports);
__exportStar(require("./basic-routers/category.router"), exports);
__exportStar(require("./basic-routers/camera.router"), exports);
__exportStar(require("./basic-routers/role.router"), exports);
__exportStar(require("./basic-routers/account.router"), exports);
__exportStar(require("./basic-routers/order.router"), exports);
__exportStar(require("./basic-routers/order-detail.router"), exports);
__exportStar(require("./extra-routers/auth.router"), exports);
exports.ROUTERS = [auth_router_1.AuthRouter, brand_router_1.BrandRouter, category_router_1.CategoryRouter, camera_router_1.CameraRouter, role_router_1.RoleRouter, account_router_1.AccountRouter, order_router_1.OrderRouter, order_detail_router_1.OrderDetailRouter];
//# sourceMappingURL=index.js.map