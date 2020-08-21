import { BrandSwagger } from "./basic-swaggers/brand.swagger";
import { CategorySwagger } from "./basic-swaggers/category.swagger";
import { CameraSwagger } from "./basic-swaggers/camera.swagger";
import { RoleSwagger } from "./basic-swaggers/role.swagger";
import { AccountSwagger } from "./basic-swaggers/account.swagger";
import { OrderSwagger } from "./basic-swaggers/order.swagger";
import { OrderDetailSwagger } from "./basic-swaggers/order-detail.swagger";
import { AuthSwagger } from "./extra-swaggers/auth.swagger";

export const SWAGGERS = [AuthSwagger, BrandSwagger, CategorySwagger, CameraSwagger, RoleSwagger, AccountSwagger, OrderSwagger, OrderDetailSwagger];
