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
exports.CameraController = void 0;
const controllers_1 = require("src/app/extras/controllers");
const services_1 = require("src/app/services");
const view_models_1 = require("src/app/view-models");
const environment_1 = require("src/environments/environment");
class CameraController extends controllers_1.BaseController {
    constructor(sequelize) {
        super({
            service: new services_1.CameraService(sequelize),
            childService: new services_1.OrderDetailService(sequelize),
        });
        this.useCreate = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const model = new view_models_1.CameraCM(req.body);
            yield this.useFirebase().useUploadFileBase64("cameras/" + model.Name + "." + model.Image.substring(model.Image.indexOf("data:image/") + 11, model.Image.indexOf(";base64")), model.Image, model.Image.substring(model.Image.indexOf("data:image/") + 5, model.Image.indexOf(";base64")));
            model.Image = environment_1.environment.firebase.linkDownloadFile + "cameras/" + model.Name + "." + model.Image.substring(model.Image.indexOf("data:image/") + 11, model.Image.indexOf(";base64"));
            return yield this.insert(model.getData())
                .then((camera) => {
                return res.status(201).json(camera.get());
            })
                .catch((err) => {
                return res.status(400).json({ message: "Có lỗi xảy ra" });
            });
        });
        this.useUpdate = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const model = new view_models_1.CameraUM(req.body);
            if (model.Image.includes("data:image/")) {
                yield this.useFirebase().useUploadFileBase64("cameras/" + model.Name + "." + model.Image.substring(model.Image.indexOf("data:image/") + 11, model.Image.indexOf(";base64")), model.Image, model.Image.substring(model.Image.indexOf("data:image/") + 5, model.Image.indexOf(";base64")));
                model.Image = environment_1.environment.firebase.linkDownloadFile + "cameras/" + model.Name + "." + model.Image.substring(model.Image.indexOf("data:image/") + 11, model.Image.indexOf(";base64"));
            }
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
                        .then(() => __awaiter(this, void 0, void 0, function* () {
                        yield this.useFirebase().useDeleteFile(model.Image.replace("https://storage.googleapis.com/camera-management.appspot.com/", ""));
                        return res.status(200).json({ message: "Xóa thành công" });
                    })).catch((err) => {
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
                .then((arr) => __awaiter(this, void 0, void 0, function* () {
                return res.status(200).json(arr);
            })).catch((err) => {
                return res.status(400).json({ message: "Có lỗi xảy ra" });
            });
        });
        this.useFindById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            return yield this.findById({ Id: req.params.id })
                .then((camera) => __awaiter(this, void 0, void 0, function* () {
                return res.status(200).json(camera);
            })).catch((err) => {
                return res.status(400).json({ message: "Có lỗi xảy ra" });
            });
        });
    }
}
exports.CameraController = CameraController;
//# sourceMappingURL=camera.controller.js.map