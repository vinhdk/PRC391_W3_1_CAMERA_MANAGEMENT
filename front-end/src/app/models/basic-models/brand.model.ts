export class BrandVM {
  public Id: string;
  public Name: string;
  constructor(Name: string, Id: string) {
    this.Id = Id;
    this.Name = Name;
  }
}

export class BrandUM {
  public Id: string;
  public Name: string;
  constructor(Name: string, Id: string) {
    this.Id = Id;
    this.Name = Name;
  }
}

export class BrandCM {
  public Name: string;
  constructor(Name: string) {
    this.Name = Name;
  }
}
