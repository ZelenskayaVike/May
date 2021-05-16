abstract class MyCar {
    protected constructor(
        private readonly _MyBrand: string,
        private readonly _MyModel: string,
        private readonly _MyYear: number,
        private readonly _MyColor: string,
        private readonly _carBody: string
    ) {}

    get brand(): string {
        return this._MyBrand
    }

    get model(): string {
        return this._MyModel
    }

    get year(): number {
        return this._MyYear
    }

    get color(): string {
        return this._MyColor
    }

    get carBody(): string {
        return this._carBody
    }
}
class Lkw extends MyCar {
    power: number
    cargo: number

    constructor(
        _MyBrand: string,
        _MyModel: string,
        _MyYear: number,
        _MyColor: string,
        _carBody: string,
        power: number,
        cargo: number
    ) {
        super(_MyBrand, _MyModel, _MyYear, _MyColor, _carBody)
        this.power = power
        this.cargo = cargo
    }
    showCharacteristic(): string {
        return `Автомобиль ${this.brand} ${this.model}, ${this.year} года выпуска, 
		цвет ${this.color}, 
		относится к типу авто ${this.carBody}, 
		мощность двигателя ${this.power} л/с, 
		грузоподьемность ${this.cargo}.`
    }
}

class Pkw extends MyCar {
    power: number
    seats: number

    constructor(
        _MyBrand: string,
        _MyModel: string,
        _MyYear: number,
        _MyColor: string,
        _carBody: string,
        power: number,
        seats: number
    ) {
        super(_MyBrand, _MyModel, _MyYear, _MyColor, _carBody)
        this.power = power
        this.seats = seats
    }


    showCharacteristic(): string {
        return `Автомобиль ${this.brand} ${this.model}, ${this.year} года выпуска, 
		цвет ${this.color}, 
		тип кузова ${this.carBody}, 
		мощность двигателя ${this.power} л/с, 
		посадочных мест ${this.seats} т.`
    }
}
const MyFirstCar = new Lkw(
    'MAN',
    'TGA',
    2019,
    'желтый',
    'truck',
    540,
    35
)

const MySecondCar = new Pkw(
    'AUDI',
    'A8',
    2018,
    'черный',
    'седан',
    600,
    4
)

console.log(MyFirstCar.showCharacteristic())
console.log(MySecondCar.showCharacteristic())
