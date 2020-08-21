export class OrderVM {
    public Id: string;
    public Username: string;
    constructor(props: { Username: string, Id: string }) {
        this.Id = props.Id;
        this.Username = props.Username;
    }
}

export class OrderUM {
    public Id: string;
    public Username: string;
    constructor(props: { Username: string, Id: string }) {
        this.Id = props.Id;
        this.Username = props.Username;
    }

    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}

export class OrderCM {
    public Username: string;
    constructor(props: { Username: string }) {
        this.Username = props.Username;
    }

    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
