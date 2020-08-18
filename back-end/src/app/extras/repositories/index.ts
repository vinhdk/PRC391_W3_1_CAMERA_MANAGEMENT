import { Model, Repository, Sequelize } from "sequelize-typescript";
import { WhereOptions } from "sequelize/types";

export class BaseRepository<T extends Model> {

    private repository: Repository<T>;
    constructor(model: new () => T, sequelize: Sequelize) {
        this.repository = sequelize.getRepository(model);
    }
    public insert = (data: T): Promise<T> => {
        return this.repository.create(data);
    }
    public update = (data: T, id: string): Promise<[number, T[]]> => {
        return this.repository.update(data, { where: { Id: id } });
    }
    public remove = (id: string): Promise<number> => {
        return this.repository.destroy({ where: { Id: id } });
    }
    public findById = (expression: WhereOptions, models: Array<Repository<Model>>): Promise<T> => {
        return this.repository.findOne({ where: expression, include: models });
    }
    public findAll = (expression: WhereOptions, models: Array<Repository<Model>>): Promise<T[]> => {
        return this.repository.findAll({ include: models, where: expression });
    }
}