import { hashSync, compareSync } from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { Repository, Sequelize } from "sequelize-typescript";
import { BaseController } from "src/app/extras/controllers";
import { Order, Account } from "src/app/models";
import { AuthCM, AuthGM } from "src/app/view-models";
import { OrderService, AccountService } from "src/app/services";
import { verify, sign } from "jsonwebtoken";
import { environment } from "src/environments/environment";

export class AuthController extends BaseController<Account, Order> {

    constructor(sequelize: Sequelize) {
        super({
            service: new AccountService(sequelize),
            childService: new OrderService(sequelize),
        });
    }

    public useRegister = async (req: Request, res: Response, next: NextFunction) => {
        const model = new AuthCM(req.body);
        const hash = hashSync(model.Password, 10);
        delete model.Password;
        return await this.insert({ ...model.getData(), PasswordHash: hash })
            .then(() => {
                return res.status(201).json(model);
            })
            .catch((err) => {
                return res.status(400).json({ message: "Có lỗi xảy ra" });
            });
    }

    public useLogin = async (req: Request, res: Response, next: NextFunction) => {
        const model = new AuthGM(req.body);
        return await this.findById({ Username: model.Username })
            .then(async (user) => {
                if (user !== null) {
                    return compareSync(model.Password, user.PasswordHash) ? res.status(200).json({
                        AccessToken: sign({ role: user.RoleId }, environment.jwt.code, { expiresIn: "24h", audience: model.Username, issuer: environment.jwt.issue, subject: environment.jwt.subject }),
                        ExpiresIn: "24h",
                    }) : res.status(400).json({ error: "Tài khoản và mật khẩu không trùng khớp" });
                } else {
                    return res.status(404).json({ error: "Tài khoản không tồn tại" });
                }
            }).catch((err) => {
                return res.status(400).json({ error: "Có lỗi xảy ra" });
            });
    }

    public useAuthorzie = async (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ error: "Có vẻ bạn chưa đăng nhập. Vui lòng đăng nhập" });
        } else {
            try {
                const decoded = verify(token, environment.jwt.code, { issuer: environment.jwt.issue, subject: environment.jwt.subject });
                const username = Object.assign(decoded.valueOf()).aud;
                await this.findById({ Username: username })
                    .then(async (user) => {
                        return user !== null ? ((req as any).extras ? res.status(200).json(user.get()) : next()) : res.status(404).json({ error: "Tài khoản không tồn tại" });
                    }).catch((err) => {
                        return res.status(400).json({ error: "Có lỗi xảy ra" });
                    });
            } catch (ex) {
                return res.status(400).json({ error: "Phần mềm không hỗ trợ và xử lý mã này" });
            }
        }
    }
}
