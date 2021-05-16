var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(_brand, _model, _year, _color, _carBody) {
        this._brand = _brand;
        this._model = _model;
        this._year = _year;
        this._color = _color;
        this._carBody = _carBody;
    }
    Object.defineProperty(Car.prototype, "brand", {
        get: function () {
            return this._brand;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "year", {
        get: function () {
            return this._year;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "color", {
        get: function () {
            return this._color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "carBody", {
        get: function () {
            return this._carBody;
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
var Lkw = /** @class */ (function (_super) {
    __extends(Lkw, _super);
    function Lkw(_brand, _model, _year, _color, _carBody, power, cargo) {
        var _this = _super.call(this, _brand, _model, _year, _color, _carBody) || this;
        _this.power = power;
        _this.cargo = cargo;
        return _this;
    }
    Lkw.prototype.showCharacteristic = function () {
        return "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C " + this.brand + " " + this.model + ", " + this.year + " \u0433\u043E\u0434\u0430 \u0432\u044B\u043F\u0443\u0441\u043A\u0430, \n\t\t\u0446\u0432\u0435\u0442 " + this.color + ", \n\t\t\u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0441\u044F \u043A \u0442\u0438\u043F\u0443 \u0430\u0432\u0442\u043E " + this.carBody + ", \n\t\t\u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F " + this.power + " \u043B/\u0441, \n\t\t\u0433\u0440\u0443\u0437\u043E\u043F\u043E\u0434\u044C\u0435\u043C\u043D\u043E\u0441\u0442\u044C " + this.cargo + ".";
    };
    return Lkw;
}(Car));
var Pkw = /** @class */ (function (_super) {
    __extends(Pkw, _super);
    function Pkw(_brand, _model, _year, _color, _carBody, power, seats) {
        var _this = _super.call(this, _brand, _model, _year, _color, _carBody) || this;
        _this.power = power;
        _this.seats = seats;
        return _this;
    }
    Pkw.prototype.showCharacteristic = function () {
        return "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C " + this.brand + " " + this.model + ", " + this.year + " \u0433\u043E\u0434\u0430 \u0432\u044B\u043F\u0443\u0441\u043A\u0430, \n\t\t\u0446\u0432\u0435\u0442 " + this.color + ", \n\t\t\u0442\u0438\u043F \u043A\u0443\u0437\u043E\u0432\u0430 " + this.carBody + ", \n\t\t\u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F " + this.power + " \u043B/\u0441, \n\t\t\u043F\u043E\u0441\u0430\u0434\u043E\u0447\u043D\u044B\u0445 \u043C\u0435\u0441\u0442 " + this.seats + " \u0442.";
    };
    return Pkw;
}(Car));
var lkw = new Lkw('MAN', 'TGA', 2019, 'желтый', 'truck', 540, 35);
var pkw = new Pkw('AUDI', 'A8', 2018, 'черный', 'седан', 600, 4);
console.log(lkw.showCharacteristic());
console.log(pkw.showCharacteristic());
