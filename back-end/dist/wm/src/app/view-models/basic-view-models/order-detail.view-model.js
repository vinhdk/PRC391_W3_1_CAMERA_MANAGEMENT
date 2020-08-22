"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailCM = exports.OrderDetailUM = exports.OrderDetailVM = void 0;
class OrderDetailVM {
    constructor(props) {
        this.Id = props.Id;
        this.Quantity = props.Quantity;
        this.OrderId = props.OrderId;
        this.CameraId = props.CameraId;
    }
}
exports.OrderDetailVM = OrderDetailVM;
class OrderDetailUM {
    constructor(props) {
        this.getData = () => {
            const data = Object.assign({}, this);
            delete data.getData;
            return data;
        };
        this.Id = props.Id;
        this.Quantity = props.Quantity;
        this.OrderId = props.OrderId;
        this.CameraId = props.CameraId;
    }
}
exports.OrderDetailUM = OrderDetailUM;
class OrderDetailCM {
    constructor(props) {
        this.getData = () => {
            const data = Object.assign({}, this);
            delete data.getData;
            return data;
        };
        this.Quantity = props.Quantity;
        this.OrderId = props.OrderId;
        this.CameraId = props.CameraId;
    }
}
exports.OrderDetailCM = OrderDetailCM;
//# sourceMappingURL=order-detail.view-model.js.map