import { Sequelize } from "sequelize-typescript";
import { BaseRepository } from "src/app/extras/repositories";
import { Camera } from "src/app/models";

export class CameraRepository extends BaseRepository<Camera> {
    constructor(sequelize: Sequelize) {
        super(Camera, sequelize);
    }
}
