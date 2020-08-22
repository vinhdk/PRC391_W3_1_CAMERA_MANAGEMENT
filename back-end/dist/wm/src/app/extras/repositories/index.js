"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    constructor(model, sequelize) {
        this.insert = (data) => {
            return this.repository.create(data);
        };
        this.update = (data, obj) => {
            return this.repository.update(data, { where: obj });
        };
        this.remove = (obj) => {
            return this.repository.destroy({ where: obj });
        };
        this.findById = (expression, models) => {
            return this.repository.findOne({ where: expression, include: models });
        };
        this.findAll = (expression, models) => {
            return this.repository.findAll({ include: models, where: expression });
        };
        this.repository = sequelize.getRepository(model);
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=index.js.map