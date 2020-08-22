export class AccountVM {
  public Username: string;
  public Fullname: string;
  public Email: string;
  public Phone: string;
  public RoleId: string;
  constructor(props: { Fullname: string, Username: string, Email: string, Phone: string, RoleId: string }) {
    this.Username = props.Username;
    this.Fullname = props.Fullname;
    this.Email = props.Email;
    this.Phone = props.Phone;
    this.RoleId = props.RoleId;
  }
}

export class AccountUM {
  public Username: string;
  public Fullname: string;
  public Email: string;
  public Phone: string;
  public RoleId: string;
  constructor(props: { Fullname: string, Username: string, Email: string, Phone: string, RoleId: string }) {
    this.Username = props.Username;
    this.Fullname = props.Fullname;
    this.Email = props.Email;
    this.Phone = props.Phone;
    this.RoleId = props.RoleId;
  }
}

export class AccountCM {
  public Username: string;
  public Fullname: string;
  public Password: string;
  public Email: string;
  public Phone: string;
  public RoleId: string;
  constructor(props: { Fullname: string, Username: string, Password: string, Email: string, Phone: string, RoleId: string }) {
    this.Username = props.Username;
    this.Fullname = props.Fullname;
    this.Password = props.Password;
    this.Email = props.Email;
    this.Phone = props.Phone;
    this.RoleId = props.RoleId;
  }
}
