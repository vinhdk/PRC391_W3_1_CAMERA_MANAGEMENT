import { NextFunction, Request, Response } from "express";
import { Sequelize } from "sequelize-typescript";
import { Camera, OrderDetail } from "src/app/models";
import { BaseController } from "src/app/extras/controllers";
import { CameraService, OrderDetailService } from "src/app/services";
import { CameraCM, CameraUM } from "src/app/view-models";
import { environment } from "src/environments/environment";

export class CameraController extends BaseController<Camera, OrderDetail> {
    constructor(sequelize: Sequelize) {
        super({
            service: new CameraService(sequelize),
            childService: new OrderDetailService(sequelize),
        });
    }
    public useCreate = async (req: Request, res: Response, next: NextFunction) => {
        const model = new CameraCM(req.body);
        await this.useFirebase().useUploadFileBase64("cameras/" + model.Name + "." + model.Image.substring(model.Image.indexOf("data:image/") + 11, model.Image.indexOf(";base64")), model.Image, model.Image.substring(model.Image.indexOf("data:image/") + 5, model.Image.indexOf(";base64")));
        model.Image = environment.firebase.linkDownloadFile + "cameras/" + model.Name + "." + model.Image.substring(model.Image.indexOf("data:image/") + 11, model.Image.indexOf(";base64"));
        return await this.insert(model.getData())
            .then((camera) => {
                return res.status(201).json(camera.get());
            })
            .catch((err) => {
                return res.status(400).json({ message: "Có lỗi xảy ra" });
            });
    }
    public useUpdate = async (req: Request, res: Response, next: NextFunction) => {
        const model = new CameraUM(req.body);
        if (model.Image.includes("data:image/")) {
            await this.useFirebase().useUploadFileBase64("cameras/" + model.Name + "." + model.Image.substring(model.Image.indexOf("data:image/") + 11, model.Image.indexOf(";base64")), model.Image, model.Image.substring(model.Image.indexOf("data:image/") + 5, model.Image.indexOf(";base64")));
            model.Image = environment.firebase.linkDownloadFile + "cameras/" + model.Name + "." + model.Image.substring(model.Image.indexOf("data:image/") + 11, model.Image.indexOf(";base64"));
        }
        return await this.update(model.getData(), { Id: model.Id })
            .then(() => {
                return res.status(201).json(model);
            })
            .catch((err) => {
                return res.status(400).json({ message: "Có lỗi xảy ra" });
            });
    }
    public useRemove = async (req: Request, res: Response, next: NextFunction) => {
        return await this.findById({ Id: req.params.id })
            .then(async (model) => {
                if (model !== null) {
                    return await this.remove({ Id: req.params.id })
                        .then(async () => {
                            await this.useFirebase().useDeleteFile(model.Image.replace("https://storage.googleapis.com/camera-management.appspot.com/", ""));
                            return res.status(200).json({ message: "Xóa thành công" });
                        }).catch((err) => {
                            res.status(400).json({ message: "Có lỗi xảy ra" });
                        });
                } else {
                    return res.status(404).json({ message: "Không tìm thấy " + req.params.id });
                }
            }).catch((err) => {
                return res.status(400).json({ message: "Có lỗi xảy ra" });
            });
    }
    public useFindAll = async (req: Request, res: Response, next: NextFunction) => {
        return await this.findAll()
            .then(async (arr) => {
                return res.status(200).json(arr);
            }).catch((err) => {
                return res.status(400).json({ message: "Có lỗi xảy ra" });
            });
    }
    public useFindById = async (req: Request, res: Response, next: NextFunction) => {
        return await this.findById({ Id: req.params.id })
            .then(async (camera) => {
                return res.status(200).json(camera);
            }).catch((err) => {
                return res.status(400).json({ message: "Có lỗi xảy ra" });
            });
    }
}
