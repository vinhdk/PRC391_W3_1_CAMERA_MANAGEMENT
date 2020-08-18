import { Sequelize } from "sequelize-typescript";
import { BaseService } from "src/app/extras/services";
import { Camera } from "src/app/models";
import { CameraRepository } from "src/app/repositories";
export class CameraService extends BaseService<Camera> {
    constructor(sequelize: Sequelize) {
        super(Camera, sequelize);
    }
    public initRepository = () => {
        return new CameraRepository(this.getSequelize());
    }
}
