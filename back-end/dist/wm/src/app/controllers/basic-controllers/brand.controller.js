"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandController = void 0;
const controllers_1 = require("src/app/extras/controllers");
const services_1 = require("src/app/services");
const view_models_1 = require("src/app/view-models");
class BrandController extends controllers_1.BaseController {
    constructor(sequelize) {
        super({
            service: new services_1.BrandService(sequelize),
            childService: new services_1.CameraService(sequelize),
        });
        this.useCreate = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const model = new view_models_1.BrandCM(req.body);
            return yield this.insert(model.getData())
                .then((brand) => {
                return res.status(201).json(brand.get());
            })
                .catch((err) => {
                return res.status(400).json({ message: "Có lỗi xảy ra" });
            });
        });
        this.useUpdate = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const model = new view_models_1.BrandUM(req.body);
            return yield this.update(model.getData(), { Id: model.Id })
                .then(() => {
                return res.status(201).json(model);
            })
                .catch((err) => {
                return res.status(400).json({ message: "Có lỗi xảy ra" });
            });
        });
        this.useRemove = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            return yield this.findById({ Id: req.params.id })
                .then((model) => __awaiter(this, void 0, void 0, function* () {
                if (model !== null) {
                    return yield this.remove({ Id: req.params.id })
                        .then(() => {
                        return res.status(200).json({ message: "Xóa thành công" });
                    }).catch((err) => {
                        res.status(400).json({ message: "Có lỗi xảy ra" });
                    });
                }
                else {
                    return res.status(404).json({ message: "Không tìm thấy " + req.params.id });
                }
            })).catch((err) => {
                return res.status(400).json({ message: "Có lỗi xảy ra" });
            });
        });
        this.useFindAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            return yield this.findAll()
                .then((arr) => {
                return res.status(200).json(arr);
            }).catch((err) => {
                return res.status(400).json({ message: "Có lỗi xảy ra" });
            });
        });
        this.useFindById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            return yield this.findById({ Id: req.params.id })
                .then((arr) => {
                return res.status(200).json(arr);
            }).catch((err) => {
                return res.status(400).json({ message: "Có lỗi xảy ra" });
            });
        });
    }
}
exports.BrandController = BrandController;
//# sourceMappingURL=brand.controller.js.map