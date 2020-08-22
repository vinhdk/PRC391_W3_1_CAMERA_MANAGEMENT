"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CameraService = void 0;
const services_1 = require("src/app/extras/services");
const models_1 = require("src/app/models");
const repositories_1 = require("src/app/repositories");
class CameraService extends services_1.BaseService {
    constructor(sequelize) {
        super(models_1.Camera, sequelize);
        this.initRepository = () => {
            return new repositories_1.CameraRepository(this.getSequelize());
        };
    }
}
exports.CameraService = CameraService;
//# sourceMappingURL=camera.service.js.map