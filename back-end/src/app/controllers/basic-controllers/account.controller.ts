import { NextFunction, Request, Response } from "express";
import { Sequelize } from "sequelize-typescript";
import { Account, Order } from "src/app/models";
import { BaseController } from "src/app/extras/controllers";
import { AccountService, OrderService } from "src/app/services";
import { AccountCM, AccountUM } from "src/app/view-models";
import { hashSync } from "bcrypt";

export class AccountController extends BaseController<Account, Order> {
    constructor(sequelize: Sequelize) {
        super({
            service: new AccountService(sequelize),
            childService: new OrderService(sequelize),
        });
    }
    public useCreate = async (req: Request, res: Response, next: NextFunction) => {
        const model = new AccountCM(req.body);
        const hash = hashSync(model.Password, 10);
        delete model.Password;
        return await this.insert({ ...model.getData(), PasswordHash: hash })
            .then((account) => {
                return res.status(201).json(account.get());
            })
            .catch((err) => {
                return res.status(400).json({ message: "Có lỗi xảy ra" });
            });
    }
    public useUpdate = async (req: Request, res: Response, next: NextFunction) => {
        const model = new AccountUM(req.body);
        return await this.update(model.getData(), { Username: model.Username })
            .then(() => {
                return res.status(201).json(model);
            })
            .catch((err) => {
                return res.status(400).json({ message: "Có lỗi xảy ra" });
            });
    }
    public useRemove = async (req: Request, res: Response, next: NextFunction) => {
        return await this.findById({ Username: req.params.id })
            .then(async (model) => {
                if (model !== null) {
                    return await this.remove({ Username: req.params.id })
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
        return await this.findById({ Username: req.params.id })
            .then((arr) => {
                return res.status(200).json(arr);
            }).catch((err) => {
                return res.status(400).json({ message: "Có lỗi xảy ra" });
            });
    }
}
