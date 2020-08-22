"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
class BaseService {
    constructor(model, sequelize) {
        this.findAll = (expression, models) => {
            return this.initRepository().findAll(expression, models);
        };
        this.findById = (expression, models) => {
            return this.initRepository().findById(expression, models);
        };
        this.insert = (data) => {
            return this.initRepository().insert(data);
        };
        this.update = (data, obj) => {
            return this.initRepository().update(data, obj);
        };
        this.remove = (obj) => {
            return this.initRepository().remove(obj);
        };
        this.getRepository = () => {
            return this.sequelize.getRepository(this.model);
        };
        this.getSequelize = () => {
            return this.sequelize;
        };
        this.sequelize = sequelize;
        this.model = model;
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=index.js.map