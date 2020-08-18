import { Sequelize } from "sequelize-typescript";
import { environment } from "src/environments/environment";
import { MODELS } from "src/app/models";

export class Context {
    public readonly sequelize: Sequelize;
    constructor() {
        const config: any = environment.database.config.production;
        this.sequelize = new Sequelize({
            models: [...MODELS], ...config,
            dialect: config.dialect,
            host: config.host,
            name: config.database,
            password: config.password,
            pool: {
                // connectionLimit: 1000,
                // acquire: 300000000,
                // idle: 100000000,
                max: 1000,
                min: 0,
            },
            repositoryMode: true,
            username: config.username,
            validateOnly: false,
        });
    }
    public async connection() {
        await this.sequelize.sync();
    }
}
