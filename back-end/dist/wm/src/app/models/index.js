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
exports.MODELS = void 0;
const brand_model_1 = require("./brand.model");
const camera_model_1 = require("./camera.model");
const category_model_1 = require("./category.model");
const order_model_1 = require("./order.model");
const account_model_1 = require("./account.model");
const role_model_1 = require("./role.model");
const order_detail_model_1 = require("./order-detail.model");
__exportStar(require("./brand.model"), exports);
__exportStar(require("./camera.model"), exports);
__exportStar(require("./category.model"), exports);
__exportStar(require("./order.model"), exports);
__exportStar(require("./account.model"), exports);
__exportStar(require("./role.model"), exports);
__exportStar(require("./order-detail.model"), exports);
exports.MODELS = [brand_model_1.Brand, camera_model_1.Camera, category_model_1.Category, order_model_1.Order, account_model_1.Account, role_model_1.Role, order_detail_model_1.OrderDetail];
//# sourceMappingURL=index.js.map