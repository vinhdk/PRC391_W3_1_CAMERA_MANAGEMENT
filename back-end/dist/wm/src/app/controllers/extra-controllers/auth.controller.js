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
exports.AuthController = void 0;
const bcrypt_1 = require("bcrypt");
const controllers_1 = require("src/app/extras/controllers");
const view_models_1 = require("src/app/view-models");
const services_1 = require("src/app/services");
const jsonwebtoken_1 = require("jsonwebtoken");
const environment_1 = require("src/environments/environment");
class AuthController extends controllers_1.BaseController {
    constructor(sequelize) {
        super({
            service: new services_1.AccountService(sequelize),
            childService: new services_1.OrderService(sequelize),
        });
        this.useRegister = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const model = new view_models_1.AuthCM(req.body);
            const hash = bcrypt_1.hashSync(model.Password, 10);
            delete model.Password;
            return yield this.insert(Object.assign(Object.assign({}, model.getData()), { PasswordHash: hash }))
                .then(() => {
                return res.status(201).json(model);
            })
                .catch((err) => {
                return res.status(400).json({ message: "Có lỗi xảy ra" });
            });
        });
        this.useLogin = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const model = new view_models_1.AuthGM(req.body);
            return yield this.findById({ Username: model.Username })
                .then((user) => __awaiter(this, void 0, void 0, function* () {
                if (user !== null) {
                    return bcrypt_1.compareSync(model.Password, user.PasswordHash) ? res.status(200).json({
                        AccessToken: jsonwebtoken_1.sign({ role: user.RoleId }, environment_1.environment.jwt.code, { expiresIn: "24h", audience: model.Username, issuer: environment_1.environment.jwt.issue, subject: environment_1.environment.jwt.subject }),
                        ExpiresIn: "24h",
                    }) : res.status(400).json({ error: "Tài khoản và mật khẩu không trùng khớp" });
                }
                else {
                    return res.status(404).json({ error: "Tài khoản không tồn tại" });
                }
            })).catch((err) => {
                return res.status(400).json({ error: "Có lỗi xảy ra" });
            });
        });
        this.useAuthorzie = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const token = req.headers.authorization;
            if (!token) {
                return res.status(401).json({ error: "Có vẻ bạn chưa đăng nhập. Vui lòng đăng nhập" });
            }
            else {
                try {
                    const decoded = jsonwebtoken_1.verify(token, environment_1.environment.jwt.code, { issuer: environment_1.environment.jwt.issue, subject: environment_1.environment.jwt.subject });
                    const username = Object.assign(decoded.valueOf()).aud;
                    yield this.findById({ Username: username })
                        .then((user) => __awaiter(this, void 0, void 0, function* () {
                        return user !== null ? (req.extras ? res.status(200).json(user.get()) : next()) : res.status(404).json({ error: "Tài khoản không tồn tại" });
                    })).catch((err) => {
                        return res.status(400).json({ error: "Có lỗi xảy ra" });
                    });
                }
                catch (ex) {
                    return res.status(400).json({ error: "Phần mềm không hỗ trợ và xử lý mã này" });
                }
            }
        });
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map