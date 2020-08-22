"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCM = exports.AccountUM = exports.AccountVM = void 0;
class AccountVM {
    constructor(props) {
        this.Username = props.Username;
        this.Fullname = props.Fullname;
        this.Email = props.Email;
        this.Phone = props.Phone;
        this.RoleId = props.RoleId;
    }
}
exports.AccountVM = AccountVM;
class AccountUM {
    constructor(props) {
        this.getData = () => {
            const data = Object.assign({}, this);
            delete data.getData;
            return data;
        };
        this.Username = props.Username;
        this.Fullname = props.Fullname;
        this.Email = props.Email;
        this.Phone = props.Phone;
        this.RoleId = props.RoleId;
    }
}
exports.AccountUM = AccountUM;
class AccountCM {
    constructor(props) {
        this.getData = () => {
            const data = Object.assign({}, this);
            delete data.getData;
            return data;
        };
        this.Username = props.Username;
        this.Fullname = props.Fullname;
        this.Password = props.Password;
        this.Email = props.Email;
        this.Phone = props.Phone;
        this.RoleId = props.RoleId;
    }
}
exports.AccountCM = AccountCM;
//# sourceMappingURL=account.view-model.js.map