import { NextFunction, Request, Response } from "express";
import { Sequelize } from "sequelize-typescript";
import { Camera } from "src/app/models";
import { BaseController } from "src/app/extras/controllers";
import { CameraService } from "src/app/services";
import { CameraCM, CameraUM } from "src/app/view-models";

export class CameraController extends BaseController<Camera, Camera> {
    constructor(sequelize: Sequelize) {
        super({
            service: new CameraService(sequelize),
            childService: null,
        });
    }
    public useCreate = async (req: Request, res: Response, next: NextFunction) => {
        const model = new CameraCM(req.body);
        return await this.insert(model.getData())
            .then(() => {
                return res.status(201).json(model);
            })
            .catch((err) => {
                return res.status(400).json({ message: "Có lỗi xảy ra" });
            });
    }
    public useUpdate = async (req: Request, res: Response, next: NextFunction) => {
        const model = new CameraUM(req.body);
        return await this.update(model.getData(), model.Id)
            .then(() => {
                return res.status(201).json(model);
            })
            .catch((err) => {
                return res.status(400).json({ message: "Có lỗi xảy ra" });
            });
    }
    public useRemove = async (req: Request, res: Response, next: NextFunction) => {
        return await this.findById(req.params.id)
            .then(async (model) => {
                if (model !== null) {
                    return await this.remove(req.params.id)
                        .then(() => {
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
            .then((arr) => {
                return res.status(200).json(arr);
            }).catch((err) => {
                return res.status(400).json({ message: "Có lỗi xảy ra" });
            });
    }
    public useFindById = async (req: Request, res: Response, next: NextFunction) => {
        return await this.findById(req.params.id)
            .then((arr) => {
                return res.status(200).json(arr);
            }).catch((err) => {
                return res.status(400).json({ message: "Có lỗi xảy ra" });
            });
    }
}
