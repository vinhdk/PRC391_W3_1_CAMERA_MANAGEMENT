export class RoleVM {
    public Id: string;
    public Name: string;
    constructor(props: { Name: string, Id: string }) {
        this.Id = props.Id;
        this.Name = props.Name;
    }
}

export class RoleUM {
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

export class RoleCM {
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
