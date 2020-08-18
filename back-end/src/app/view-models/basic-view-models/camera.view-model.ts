export class CameraVM {
    public Id: string;
    public Name: string;
    public Price: number;
    public Megepixel: number;
    public Image: string;
    public CategoryId: string;
    public BrandId: string;
    public Description: string;
    constructor(props: { Id: string, Name: string, Description: string, Price: number, Megepixel: number, Image: string, CategoryId: string, BrandId: string }) {
        this.Id = props.Id;
        this.Name = props.Name;
        this.Price = props.Price;
        this.Megepixel = props.Megepixel;
        this.Image = props.Image;
        this.CategoryId = props.CategoryId;
        this.BrandId = props.BrandId;
        this.Description = props.Description;
    }
}

export class CameraUM {
    public Id: string;
    public Name: string;
    public Price: number;
    public Megepixel: number;
    public Image: string;
    public CategoryId: string;
    public BrandId: string;
    public Description: string;
    constructor(props: { Id: string, Name: string, Description: string, Price: number, Megepixel: number, Image: string, CategoryId: string, BrandId: string }) {
        this.Id = props.Id;
        this.Name = props.Name;
        this.Price = props.Price;
        this.Megepixel = props.Megepixel;
        this.Image = props.Image;
        this.CategoryId = props.CategoryId;
        this.BrandId = props.BrandId;
        this.Description = props.Description;
    }

    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}

export class CameraCM {
    public Name: string;
    public Price: number;
    public Megepixel: number;
    public Image: string;
    public CategoryId: string;
    public BrandId: string;
    public Description: string;
    constructor(props: { Name: string, Description: string, Price: number, Megepixel: number, Image: string, CategoryId: string, BrandId: string }) {
        this.Name = props.Name;
        this.Price = props.Price;
        this.Megepixel = props.Megepixel;
        this.Image = props.Image;
        this.CategoryId = props.CategoryId;
        this.BrandId = props.BrandId;
        this.Description = props.Description;
    }

    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
