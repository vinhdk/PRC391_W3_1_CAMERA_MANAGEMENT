"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCM = exports.OrderUM = exports.OrderVM = void 0;
class OrderVM {
    constructor(props) {
        this.Id = props.Id;
        this.Username = props.Username;
    }
}
exports.OrderVM = OrderVM;
class OrderUM {
    constructor(props) {
        this.getData = () => {
            const data = Object.assign({}, this);
            delete data.getData;
            return data;
        };
        this.Id = props.Id;
        this.Username = props.Username;
    }
}
exports.OrderUM = OrderUM;
class OrderCM {
    constructor(props) {
        this.getData = () => {
            const data = Object.assign({}, this);
            delete data.getData;
            return data;
        };
        this.Username = props.Username;
    }
}
exports.OrderCM = OrderCM;
//# sourceMappingURL=order.view-model.js.map