interface IUser {
    name: string,
    age: number
}
let customer: IUser = {
    name: 'Hung',
    age: 18
};
console.log(customer);
//
class Shape {
    public x: number;
    public y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    toString(): string {
        return `(x: ${this.x}, y: ${this.y})`;
    }
}

interface IArea {
    area(): number;
}

class Rect extends Shape implements IArea {
    constructor(x: number, y: number, public width: number, public height: number) {
        super(x, y);
    }
    area(): number {
        return this.width * this.height;
    }
}

const rect = new Rect(5, 5, 10, 20);
console.log(rect.toString());
console.log(rect.area());
//
class NhanVatGame {
    tenNhanVat: string;
    solugan: string;
    mau: number;

    constructor (tenNhanVat: string, solugan: string, mau: number) {
        this.tenNhanVat = tenNhanVat;
        this.solugan = solugan;
        this.mau = mau;
    }

    show() {
        console.log(this.mau);
    }
}

var nhanVat1 = new NhanVatGame('irelia', 'Y chi cua luoi kiem', 697.2);
nhanVat1.show();
// console.log(NhanVatGame)