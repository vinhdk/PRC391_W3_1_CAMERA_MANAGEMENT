import { Model, Repository, Sequelize } from "sequelize-typescript";
import { WhereOptions } from "sequelize/types";
import { BaseRepository } from "../repositories";

export abstract class BaseService<T extends Model> {

    private readonly sequelize: Sequelize;
    private readonly model: new () => T;
    constructor(model: new () => T, sequelize: Sequelize) {
        this.sequelize = sequelize;
        this.model = model;
    }

    public readonly findAll = (expression: WhereOptions, models: Array<Repository<Model>>): Promise<T[]> => {
        return this.initRepository().findAll(expression, models);
    }

    public readonly findById = (expression: WhereOptions, models: Array<Repository<Model>>): Promise<T> => {
        return this.initRepository().findById(expression, models);
    }

    public readonly insert = (data: T): Promise<T> => {
        return this.initRepository().insert(data);
    }

    public readonly update = (data: T, obj: { [key: string]: string }): Promise<[number, T[]]> => {
        return this.initRepository().update(data, obj);
    }

    public readonly remove = (obj: { [key: string]: string }): Promise<number> => {
        return this.initRepository().remove(obj);
    }

    public readonly getRepository = (): Repository<T> => {
        return this.sequelize.getRepository(this.model);
    }

    public readonly getSequelize = (): Sequelize => {
        return this.sequelize;
    }

    public abstract initRepository(): BaseRepository<T>;
}
