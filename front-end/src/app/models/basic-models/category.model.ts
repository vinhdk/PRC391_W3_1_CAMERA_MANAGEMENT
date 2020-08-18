export class CategoryVM {
  public Id: string;
  public Name: string;
  constructor(Name: string, Id: string) {
    this.Id = Id;
    this.Name = Name;
  }
}

export class CategoryUM {
  public Id: string;
  public Name: string;
  constructor(Name: string, Id: string) {
    this.Id = Id;
    this.Name = Name;
  }
}

export class CategoryCM {
  public Name: string;
  constructor(Name: string) {
    this.Name = Name;
  }
}
