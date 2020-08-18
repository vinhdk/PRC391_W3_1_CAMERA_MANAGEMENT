import { Brand } from "src/app/models";

export class BrandVM {
    public Id: string;
    public Name: string;
    constructor(props: { Name: string, Id: string }) {
        this.Id = props.Id;
        this.Name = props.Name;
    }
}

export class BrandUM {
    public Id: string;
    public Name: string;
    constructor(props: { Name: string, Id: string }) {
        this.Id = props.Id;
        this.Name = props.Name;
    }

    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}

export class BrandCM {
    public Name: string;
    constructor(props: { Name: string }) {
        this.Name = props.Name;
    }

    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
