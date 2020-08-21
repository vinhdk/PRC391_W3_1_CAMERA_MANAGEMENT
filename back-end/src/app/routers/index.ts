import { BrandRouter } from "./basic-routers/brand.router";
import { CategoryRouter } from "./basic-routers/category.router";
import { CameraRouter } from "./basic-routers/camera.router";
import { RoleRouter } from "./basic-routers/role.router";
import { AccountRouter } from "./basic-routers/account.router";
import { OrderRouter } from "./basic-routers/order.router";
import { OrderDetailRouter } from "./basic-routers/order-detail.router";
import { AuthRouter } from "./extra-routers/auth.router";

export * from "./basic-routers/brand.router";
export * from "./basic-routers/category.router";
export * from "./basic-routers/camera.router";
export * from "./basic-routers/role.router";
export * from "./basic-routers/account.router";
export * from "./basic-routers/order.router";
export * from "./basic-routers/order-detail.router";
export * from "./extra-routers/auth.router";

export const ROUTERS = [AuthRouter, BrandRouter, CategoryRouter, CameraRouter, RoleRouter, AccountRouter, OrderRouter, OrderDetailRouter];
