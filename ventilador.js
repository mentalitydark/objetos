class Ventilator {
    constructor(watts, brand, minRPM, maxRPM) {
        this.watts = watts;
        this.brand = brand;
        this.minRPM = minRPM;
        this.maxRPM = maxRPM;
        this._on = false;
        this._off = true;
        this._rpm = 0;
        this._velocity = 0;
    }
    get on() {
        return this._on;
    }
    get off() {
        return this._off;
    }
    get velocity() {
        return this._velocity;
    }
    get rpm() {
        return this._rpm;
    }
    turnOff() {
        this._off = true;
        this._on = false;
        this._velocity = 0;
        this._rpm = 0;
    }
    turnOn() {
        this._off = false;
        this._on = true;
    }
    speedUp() {
        if (this.velocity === 0) {
            this._on = true;
            this._off = false;
        }
        if (this._on) {
            if (this._velocity === 2) {
                this._velocity++;
                this._rpm = this.maxRPM;
            }
            if (this._velocity === 1) {
                this._velocity++;
                this._rpm = (this.maxRPM+this.minRPM)/2;
            }
            if (this._velocity === 0) {
                this._velocity++;
                this._rpm = this.minRPM;
            }
        }
    }
    slowDown() {
        if (this._on) {
            if (this._velocity === 1) {
                this._velocity--;
                this._rpm = 0;
                this._off = true;
                this._on = false;
            }
            if (this._velocity === 2) {
                this._velocity--;
                this._rpm = this.minRPM;
            }
            if (this._velocity === 3) {
                this._velocity--;
                this._rpm = (this.maxRPM + this.minRPM) / 2;
            }
        }
    }
    toString() {
        return `${this.watts}/${this.brand}/${this.minRPM}/${this.maxRPM}`;
    }
}
console.log('------------------------------ ventilado------------------------');

const vent = new Ventilator(200, 'Arno', 100, 300);
console.log(vent.watts === 200);
console.log(vent.brand === 'Arno');
console.log(vent.minRPM === 100);
console.log(vent.maxRPM === 300);

console.log(vent.on); // false
console.log(vent.on === false);
console.log(vent.off); // true
console.log(vent.off === true);
console.log(vent.velocity); // 0
console.log(vent.velocity === 0);
console.log(vent.rpm); // 0
console.log(vent.rpm === 0);

vent.speedUp();
console.log(vent.on === true);
console.log(vent.off === false);
console.log(vent.velocity === 1);
console.log(vent.rpm === 100);

vent.slowDown();
console.log(vent.on === false);
console.log(vent.off === true);
console.log(vent.velocity === 0);
console.log(vent.rpm === 0);

vent.on = true; // should not be possible
console.log(vent.on === false);
console.log(vent.off === true);
console.log(vent.velocity === 0);
console.log(vent.rpm === 0);

vent.velocity = 1; // should not be possible
console.log(vent.on === false);
console.log(vent.off === true);
console.log(vent.velocity === 0);
console.log(vent.rpm === 0);

vent.speedUp();
console.log(vent.on === true);
console.log(vent.off === false);
console.log(vent.velocity === 1);
console.log(vent.rpm === 100);
vent.speedUp();
console.log(vent.on === true);
console.log(vent.off === false);
console.log(vent.velocity === 2);
console.log(vent.rpm === 200); // mean between min and max
vent.speedUp();
console.log(vent.on === true);
console.log(vent.off === false);
console.log(vent.velocity === 3);
console.log(vent.rpm === 300);
vent.speedUp(); // should not have effect
console.log(vent.on === true);
console.log(vent.off === false);
console.log(vent.velocity === 3);
console.log(vent.rpm === 300);

vent.slowDown();
console.log(vent.on === true);
console.log(vent.off === false);
console.log(vent.velocity === 2);
console.log(vent.rpm === 200);
vent.slowDown();
console.log(vent.on === true);
console.log(vent.off === false);
console.log(vent.velocity === 1);
console.log(vent.rpm === 100);
vent.slowDown();
console.log(vent.on === false);
console.log(vent.off === true);
console.log(vent.velocity === 0);
console.log(vent.rpm === 0);
vent.slowDown(); // should not have effect
console.log(vent.on === false);
console.log(vent.off === true);
console.log(vent.velocity === 0);
console.log(vent.rpm === 0);

const vent2 = new Ventilator(250, 'GE', 80, 400);
console.log(vent2.watts === 250);
console.log(vent2.brand === 'GE');
console.log(vent2.minRPM === 80);
console.log(vent2.maxRPM === 400);
console.log(vent2.on === false);
console.log(vent2.off === true);
console.log(vent2.velocity === 0);
console.log(vent2.rpm === 0);

vent2.speedUp();
console.log(vent2.velocity === 1);
console.log(vent2.rpm === 80);
vent2.speedUp();
console.log(vent2.velocity === 2);
console.log(vent2.rpm === 240); // mean between min and max
vent2.speedUp();
console.log(vent2.velocity === 3);
console.log(vent2.rpm === 400);

vent2.turnOff();
console.log(vent2.on === false);
console.log(vent2.off === true);
console.log(vent2.velocity === 0);
console.log(vent2.rpm === 0);
