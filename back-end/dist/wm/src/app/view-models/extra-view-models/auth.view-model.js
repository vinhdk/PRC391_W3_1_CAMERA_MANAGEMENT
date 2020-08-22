"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthCM = exports.AuthGM = void 0;
class AuthGM {
    constructor(props) {
        this.getData = () => {
            const data = Object.assign({}, this);
            delete data.getData;
            return data;
        };
        this.Username = props.Username;
        this.Password = props.Password;
    }
}
exports.AuthGM = AuthGM;
class AuthCM {
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
exports.AuthCM = AuthCM;
//# sourceMappingURL=auth.view-model.js.map