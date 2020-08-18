export class CameraVM {
  public Id: string;
  public Name: string;
  public Price: number;
  public Megepixel: number;
  public CategoryId: string;
  public BrandId: string;
  constructor(Id: string, Name: string, Price: number, Megepixel: number, CategoryId: string, BrandId: string) {
    this.Id = Id;
    this.Name = Name;
    this.Price = Price;
    this.Megepixel = Megepixel;
    this.CategoryId = CategoryId;
    this.BrandId = BrandId;
  }
}

export class CameraUM {
  public Id: string;
  public Name: string;
  public Price: number;
  public Megepixel: number;
  public CategoryId: string;
  public BrandId: string;
  constructor(Id: string, Name: string, Price: number, Megepixel: number, CategoryId: string, BrandId: string) {
    this.Id = Id;
    this.Name = Name;
    this.Price = Price;
    this.Megepixel = Megepixel;
    this.CategoryId = CategoryId;
    this.BrandId = BrandId;
  }
}

export class CameraCM {
  public Name: string;
  public Price: number;
  public Megepixel: number;
  public CategoryId: string;
  public BrandId: string;
  constructor(Name: string, Price: number, Megepixel: number, CategoryId: string, BrandId: string) {
    this.Name = Name;
    this.Price = Price;
    this.Megepixel = Megepixel;
    this.CategoryId = CategoryId;
    this.BrandId = BrandId;
  }
}
