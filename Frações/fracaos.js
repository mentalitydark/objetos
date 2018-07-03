class Fraction {
    constructor(numerator = 0, denominator = 1) {
        this._numerator = numerator;
        this._denominator = denominator;
        this._canReduce = canReduce(numerator, denominator);
    }
    get numerator() {
        return this._numerator;
    }
    get denominator() {
        return this._denominator;
    }
    get canReduce() {
        this._canReduce = canReduce(this.numerator, this.denominator);
        return this._canReduce;
    }
    plus(fracao) {
        if (fracao.denominator === this.denominator) {
            return `${fracao.numerator + this.numerator}/${this.denominator}`;
        } else {
            return mmc(fracao.denominator, this.denominator);
        }
    }
    reduce() {
        if (this.canReduce) {
            if (this._numerator > this._denominator) {
                for (let i = 2; i <= this._numerator; i++) {
                    if ((this._numerator % i === 0) &&
                        (this._denominator % i === 0)) {
                        this._numerator = this._numerator / i;
                        this._denominator = this._denominator / i;
                    }
                }
            }
            if (this._numerator < this._denominator) {
                for (let i = 2; i <= this._denominator; i++) {
                    if ((this._numerator % i === 0) &&
                        (this._denominator % i === 0)) {
                        this._numerator = this._numerator / i;
                        this._denominator = this._denominator / i;
                    }
                }
            }
        }
    }
    divide(fracao) {
        const part2 = `${fracao.numerator*this.denominator}`;
        const part1 = `${fracao.denominator*this.numerator}`;
        return `${part1}/${part2}`;
    }
    multiply(fracao) {
        const part1 = `${fracao.numerator*this.numerator}`;
        const part2 = `${fracao.denominator*this.denominator}`;
        return `${part1}/${part2}`;
    }
    greaterThan(fracao) {
        const part1 = fracao.numerator/fracao.denominator;
        const part2 = this.numerator/this.denominator;
        if (part1 < part2) return true; else return false;
    }
    lessThan(fracao) {
        const part1 = fracao.numerator / fracao.denominator;
        const part2 = this.numerator / this.denominator;
        if (part1 > part2) return true; else return false;
    }
    equals(fracao) {
        const part1 = fracao.numerator / fracao.denominator;
        const part2 = this.numerator / this.denominator;
        if (part1 === part2) return true; else return false;
    }
    toString() {
        return `${this._numerator}/${this._denominator}`;
    }
}
function canReduce(numerador, denominador) {
    const nume1 = numerador;
    const deno2 = denominador;
    if (nume1 > deno2) {
        for (let i = 2; i <= nume1; i++) {
            if ((nume1 % i === 0) && (deno2 % i === 0)) return true;
        }
        return false;
    }
    if (nume1 < deno2) {
        for (let i = 2; i <= deno2; i++) {
            if ((nume1 % i === 0) && (deno2 % i === 0)) return true;
        }
        return false;
    }
}
const mmc = function(numero1, numero2) {
    let deno1 = numero1;
    let deno2 = numero2;
    let resto = 1;
    for (;resto !== 0;) {
        resto = deno1 % deno2;
        deno1 = deno2;
        deno2 = resto;
    }
    return (numero1 * numero2) / deno1;
};
console.log('-------------------------- Frações -----------------------------');
// Fraction(numerator, denominator)
const fr = new Fraction(3, 4); // para representar "três quartos"
console.log(fr.numerator === 3);
console.log(fr.denominator === 4);
console.log(fr.toString()); // imprime, por exemplo: "3/4"
console.log(fr.toString() === '3/4');
// as seguintes linhas não devem funcionar
fr.numerator = 10;
fr.denominator = 10;
// -----------------------
const f1 = new Fraction(4, 15);
console.log(f1.toString() === '4/15');

const f2 = new Fraction(5, 15);
console.log(f2.toString() === '5/15');
const f3 = f1.plus(f2); // representaria uma situação de: f1 + f2
console.log(f3.toString()); // imprime "9/15"
console.log(f3.toString() === '9/15');
// TODO: mais 3 casos de teste com plus;
const Test1 = new Fraction(3, 7);
const Test2 = new Fraction(1, 2);
const CasodeTest1 = f2.plus(Test1);
const CasodeTest2 = f2.plus(Test2);
const CasodeTest3 = Test1.plus(Test2);
console.log(CasodeTest1);
console.log(CasodeTest2);
console.log(CasodeTest3);
// ------------------------------------------------
const f4 = new Fraction(1, 3);
console.log(f4.canReduce); // imprime false
console.log(f4.canReduce === false);

const f5 = new Fraction(9, 15);
console.log(f5.canReduce); // imprime true
console.log(f5.canReduce === true);
f5.reduce();
console.log(f5.toString() === '3/5');
console.log(f5.canReduce === false);
// TODO: escreva mais 3 casos de teste com reduce
f1.reduce();
console.log(f1.toString() === '4/15');
console.log(f2.canReduce === false);
f2.reduce();
console.log(f2.toString() === '1/3');
console.log(f2.canReduce === false);
f4.reduce();
console.log(f2.toString() === '1/3');
console.log(f2.canReduce === false);
// --------------------------------------------------
const f6 = new Fraction(25, 4);
const f7 = new Fraction(2, 5);
const f8 = f6.divide(f7);
console.log(f8); // imprime "125/8"
// TODO: escreva mais 3 casos de teste com divide
const test1 = f1.divide(f2);
const test2 = f2.divide(f4);
const test3 = f5.divide(f4);
console.log(test1);
console.log(test2);
console.log(test3);
// -----------------------------------------------------
const f9 = new Fraction(3, 7);
const f10 = new Fraction(2, 3);

const f11 = f9.multiply(f10);
console.log(f11.toString()); // imprime "6/21"
console.log(f11.toString() === '6/21'); // imprime "6/21"
// TODO: escreva mais 3 casos de teste com multiply
const test4 = f1.multiply(f2);
const test5 = f2.multiply(f4);
const test6 = f5.multiply(f4);
console.log(test4);
console.log(test5);
console.log(test6);
// ----------------------------------------------------------
const f12 = new Fraction(7, 8);
const f13 = new Fraction(2, 5);

console.log(f12.greaterThan(f13)); // imprime "true"
console.log(f12.greaterThan(f13) === true);
console.log(f12.lessThan(f13)); // imprime "false"
console.log(f12.lessThan(f13) === false);
console.log(f12.equals(f13)); // false
console.log(f12.equals(f13) === false);

const f14 = new Fraction(2, 3);
const f15 = new Fraction(12, 36);
const f16 = new Fraction(1, 3);
// TODO: escreva mais 9 casos de teste com greaterThan, lessThan e equals
console.log(f14.greaterThan(f15)); // imprime "true"
console.log(f15.greaterThan(f16) === false);
console.log(f16.greaterThan(f14)); // imprime "false"
console.log(f14.lessThan(f15) === false);
console.log(f15.lessThan(f16) === false);
console.log(f16.lessThan(f14)); // imprime "true"
console.log(f14.equals(f15)); // imprime "false"
console.log(f15.equals(f16)); // imprime "true"
console.log(f16.equals(f14) === false);
// ---------------------------------------------------------
const f17 = new Fraction(4);
// TODO: escreva casos de teste para o valor que se espera de f17
console.log(f17.toString() === '4/1');
console.log(f17.greaterThan(f14)); // true
console.log(f17.lessThan(f14)); // false
console.log(f17.equals(f14)); // false
const f18 = new Fraction();
// TODO: escreva casos de teste para o valor que se espera de f18
console.log(f18.toString() === '0/1');
console.log(f18.greaterThan(f14)); // false
console.log(f18.lessThan(f14)); // true
console.log(f18.equals(f14)); // false