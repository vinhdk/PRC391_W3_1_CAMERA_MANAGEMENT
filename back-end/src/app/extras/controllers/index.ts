import { Repository, Model } from "sequelize-typescript";
import { BaseService } from "../services";
import { FireBaseService } from "src/app/services";
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

    public readonly findById = (obj: { [key: string]: string }): Promise<T> => {
        return this.service.findById(obj, this.childService ? [this.childService.getRepository()] : []);
    }

    public readonly insert = (data: T): Promise<T> => {
        return this.service.insert(data);
    }

    public readonly update = (data: T, obj: { [key: string]: string }): Promise<[number, T[]]> => {
        return this.service.update(data, obj);
    }

    public readonly remove = (obj: { [key: string]: string }): Promise<number> => {
        return this.service.remove(obj);
    }

    public readonly useFirebase = () => {
        return new FireBaseService();
    }
}
