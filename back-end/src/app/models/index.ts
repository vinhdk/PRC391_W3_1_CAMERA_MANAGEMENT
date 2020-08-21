import { Brand } from "./brand.model";
import { Camera } from "./camera.model";
import { Category } from "./category.model";
import { Order } from "./order.model";
import { Account } from "./account.model";
import { Role } from "./role.model";
import { OrderDetail } from "./order-detail.model";

export * from "./brand.model";
export * from "./camera.model";
export * from "./category.model";
export * from "./order.model";
export * from "./account.model";
export * from "./role.model";
export * from "./order-detail.model";

export const MODELS = [Brand, Camera, Category, Order, Account, Role, OrderDetail];
