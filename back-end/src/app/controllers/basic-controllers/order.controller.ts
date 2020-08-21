import { NextFunction, Request, Response } from "express";
import { Sequelize } from "sequelize-typescript";
import { Order, OrderDetail } from "src/app/models";
import { BaseController } from "src/app/extras/controllers";
import { OrderService, OrderDetailService } from "src/app/services";
import { OrderCM, OrderUM } from "src/app/view-models";

export class OrderController extends BaseController<Order, OrderDetail> {
    constructor(sequelize: Sequelize) {
        super({
            service: new OrderService(sequelize),
            childService: new OrderDetailService(sequelize),
        });
    }
    public useCreate = async (req: Request, res: Response, next: NextFunction) => {
        const model = new OrderCM(req.body);
        return await this.insert(model.getData())
            .then((order) => {
                return res.status(201).json(order.get());
            })
            .catch((err) => {
                return res.status(400).json({ message: "Có lỗi xảy ra" });
            });
    }
    public useUpdate = async (req: Request, res: Response, next: NextFunction) => {
        const model = new OrderUM(req.body);
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
            .then((arr) => {
                return res.status(200).json(arr);
            }).catch((err) => {
                return res.status(400).json({ message: "Có lỗi xảy ra" });
            });
    }
}
