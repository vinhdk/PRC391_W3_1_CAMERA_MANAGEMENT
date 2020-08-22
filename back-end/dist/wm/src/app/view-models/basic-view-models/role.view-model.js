"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCM = exports.RoleUM = exports.RoleVM = void 0;
class RoleVM {
    constructor(props) {
        this.Id = props.Id;
        this.Name = props.Name;
    }
}
exports.RoleVM = RoleVM;
class RoleUM {
    constructor(props) {
        this.getData = () => {
            const data = Object.assign({}, this);
            delete data.getData;
            return data;
        };
        this.Id = props.Id;
        this.Name = props.Name;
    }
}
exports.RoleUM = RoleUM;
class RoleCM {
    constructor(props) {
        this.getData = () => {
            const data = Object.assign({}, this);
            delete data.getData;
            return data;
        };
        this.Name = props.Name;
    }
}
exports.RoleCM = RoleCM;
//# sourceMappingURL=role.view-model.js.map