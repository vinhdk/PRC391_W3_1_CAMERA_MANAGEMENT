"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const services_1 = require("src/app/services");
class BaseController {
    constructor(props) {
        this.findAll = () => {
            return this.service.findAll({}, this.childService ? [this.childService.getRepository()] : []);
        };
        this.findById = (obj) => {
            return this.service.findById(obj, this.childService ? [this.childService.getRepository()] : []);
        };
        this.insert = (data) => {
            return this.service.insert(data);
        };
        this.update = (data, obj) => {
            return this.service.update(data, obj);
        };
        this.remove = (obj) => {
            return this.service.remove(obj);
        };
        this.useFirebase = () => {
            return new services_1.FireBaseService();
        };
        this.service = props.service;
        this.childService = props.childService;
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=index.js.map