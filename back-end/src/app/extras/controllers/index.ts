import { Repository, Model } from "sequelize-typescript";
import { BaseService } from "../services";
export class BaseController<T extends Model, C extends Model> {
    protected readonly service: BaseService<T>;
    protected readonly childService: BaseService<C> | any;
    constructor(props: {
        service: BaseService<T>,
        childService: BaseService<C> | any,
    }) {
        this.service = props.service;
        this.childService = props.childService;
    }

    public readonly findAll = (): Promise<T[]> => {
        return this.service.findAll({}, this.childService ? [this.childService.getRepository()] : []);
    }

    public readonly findById = (id: string): Promise<T> => {
        return this.service.findById({ Id: id }, this.childService ? [this.childService.getRepository()] : []);
    }

    public readonly insert = (data: T): Promise<T> => {
        return this.service.insert(data);
    }

    public readonly update = (data: T, id: string): Promise<[number, T[]]> => {
        return this.service.update(data, id);
    }

    public readonly remove = (id: string): Promise<number> => {
        return this.service.remove(id);
    }
}
