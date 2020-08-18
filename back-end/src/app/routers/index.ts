import { BrandRouter } from "./basic-routers/brand.router";
import { CategoryRouter } from "./basic-routers/category.router";
import { CameraRouter } from "./basic-routers/camera.router";

export * from "./basic-routers/brand.router";
export * from "./basic-routers/category.router";
export * from "./basic-routers/camera.router";

export const ROUTERS = [BrandRouter, CategoryRouter, CameraRouter];
