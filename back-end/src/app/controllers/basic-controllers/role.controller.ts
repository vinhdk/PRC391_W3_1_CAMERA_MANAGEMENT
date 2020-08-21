import { NextFunction, Request, Response } from "express";
import { Sequelize } from "sequelize-typescript";
import { Role, Account } from "src/app/models";
import { BaseController } from "src/app/extras/controllers";
import { RoleService, AccountService } from "src/app/services";
import { RoleCM, RoleUM } from "src/app/view-models";

export class RoleController extends BaseController<Role, Account> {
    constructor(sequelize: Sequelize) {
        super({
            service: new RoleService(sequelize),
            childService: new AccountService(sequelize),
        });
    }
    public useCreate = async (req: Request, res: Response, next: NextFunction) => {
        const model = new RoleCM(req.body);
        return await this.insert(model.getData())
            .then((role) => {
                return res.status(201).json(role.get());
            })
            .catch((err) => {
                return res.status(400).json({ message: "Có lỗi xảy ra" });
            });
    }
    public useUpdate = async (req: Request, res: Response, next: NextFunction) => {
        const model = new RoleUM(req.body);
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
        return await this.findById({ Id: req.params.id })
            .then((model) => {
                return res.status(200).json(model.get());
            }).catch((err) => {
                return res.status(400).json({ message: "Có lỗi xảy ra" });
            });
    }
}
