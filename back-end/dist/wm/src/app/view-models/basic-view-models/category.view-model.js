"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCM = exports.CategoryUM = exports.CategoryVM = void 0;
class CategoryVM {
    constructor(props) {
        this.Id = props.Id;
        this.Name = props.Name;
    }
}
exports.CategoryVM = CategoryVM;
class CategoryUM {
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
exports.CategoryUM = CategoryUM;
class CategoryCM {
    constructor(props) {
        this.getData = () => {
            const data = Object.assign({}, this);
            delete data.getData;
            return data;
        };
        this.Name = props.Name;
    }
}
exports.CategoryCM = CategoryCM;
//# sourceMappingURL=category.view-model.js.map