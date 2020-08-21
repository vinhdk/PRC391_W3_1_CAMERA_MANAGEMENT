export class OrderDetailVM {
    public Id: string;
    public Quantity: number;
    public OrderId: string;
    public CameraId: string;
    constructor(props: { Id: string, Quantity: number, OrderId: string, CameraId: string }) {
        this.Id = props.Id;
        this.Quantity = props.Quantity;
        this.OrderId = props.OrderId;
        this.CameraId = props.CameraId;
    }
}

export class OrderDetailUM {
    public Id: string;
    public Quantity: number;
    public OrderId: string;
    public CameraId: string;
    constructor(props: { Id: string, Quantity: number, OrderId: string, CameraId: string }) {
        this.Id = props.Id;
        this.Quantity = props.Quantity;
        this.OrderId = props.OrderId;
        this.CameraId = props.CameraId;
    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}

export class OrderDetailCM {
    public Quantity: number;
    public OrderId: string;
    public CameraId: string;
    constructor(props: { Quantity: number, OrderId: string, CameraId: string }) {
        this.Quantity = props.Quantity;
        this.OrderId = props.OrderId;
        this.CameraId = props.CameraId;
    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
