export class AuthGM {
    public Username: string;
    public Password: string;
    constructor(props: { Username: string, Password: string }) {
        this.Username = props.Username;
        this.Password = props.Password;
    }
    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}

export class AuthCM {
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

    public getData = (): any => {
        const data = { ...this };
        delete data.getData;
        return data;
    }
}
