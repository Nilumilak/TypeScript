"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cart = /** @class */ (function () {
    function Cart() {
        this._items = [];
    }
    Cart.prototype.add = function (item) {
        this._items.push(item);
    };
    Object.defineProperty(Cart.prototype, "items", {
        get: function () {
            return __spreadArray([], this._items, true);
        },
        enumerable: false,
        configurable: true
    });
    Cart.prototype.fullCost = function () {
        return this.items.reduce(function (acc, item) {
            return acc + item.price;
        }, 0);
    };
    Cart.prototype.costWithDiscount = function (discount) {
        return this.fullCost() * ((100 - discount) * 0.01);
    };
    Cart.prototype.remove = function (id) {
        for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id === id) {
                this._items.splice(this._items.indexOf(item), 1);
                return;
            }
        }
    };
    return Cart;
}());
exports.default = Cart;
//# sourceMappingURL=Cart.js.map