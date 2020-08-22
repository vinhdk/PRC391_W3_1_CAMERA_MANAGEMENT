"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CameraCM = exports.CameraUM = exports.CameraVM = void 0;
class CameraVM {
    constructor(props) {
        this.Id = props.Id;
        this.Name = props.Name;
        this.Price = props.Price;
        this.Quantity = props.Quantity;
        this.Megapixel = props.Megapixel;
        this.Image = props.Image;
        this.CategoryId = props.CategoryId;
        this.BrandId = props.BrandId;
        this.Description = props.Description;
    }
}
exports.CameraVM = CameraVM;
class CameraUM {
    constructor(props) {
        this.getData = () => {
            const data = Object.assign({}, this);
            delete data.getData;
            return data;
        };
        this.Id = props.Id;
        this.Name = props.Name;
        this.Price = props.Price;
        this.Quantity = props.Quantity;
        this.Megapixel = props.Megapixel;
        this.Image = props.Image;
        this.CategoryId = props.CategoryId;
        this.BrandId = props.BrandId;
        this.Description = props.Description;
    }
}
exports.CameraUM = CameraUM;
class CameraCM {
    constructor(props) {
        this.getData = () => {
            const data = Object.assign({}, this);
            delete data.getData;
            return data;
        };
        this.Name = props.Name;
        this.Price = props.Price;
        this.Quantity = props.Quantity;
        this.Megapixel = props.Megapixel;
        this.Image = props.Image;
        this.CategoryId = props.CategoryId;
        this.BrandId = props.BrandId;
        this.Description = props.Description;
    }
}
exports.CameraCM = CameraCM;
//# sourceMappingURL=camera.view-model.js.map