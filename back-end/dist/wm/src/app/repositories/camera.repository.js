"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CameraRepository = void 0;
const repositories_1 = require("src/app/extras/repositories");
const models_1 = require("src/app/models");
class CameraRepository extends repositories_1.BaseRepository {
    constructor(sequelize) {
        super(models_1.Camera, sequelize);
    }
}
exports.CameraRepository = CameraRepository;
//# sourceMappingURL=camera.repository.js.map