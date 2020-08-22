"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandCM = exports.BrandUM = exports.BrandVM = void 0;
class BrandVM {
    constructor(props) {
        this.Id = props.Id;
        this.Name = props.Name;
    }
}
exports.BrandVM = BrandVM;
class BrandUM {
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
exports.BrandUM = BrandUM;
class BrandCM {
    constructor(props) {
        this.getData = () => {
            const data = Object.assign({}, this);
            delete data.getData;
            return data;
        };
        this.Name = props.Name;
    }
}
exports.BrandCM = BrandCM;
//# sourceMappingURL=brand.view-model.js.map