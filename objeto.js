class Impressora {
    constructor(marca, tamanho, modelo, cor) {
        this._marca = marca;
        this._tamanho = tamanho;
        this._modelo = modelo;
        this._cor = cor;
        this._on = false;
        this._energia = false;
        this._papel = 0;
        this._PapelScan = false;
        this._EscaneamentoPronto = false;
    }
    get marca() {
        return this._marca;
    }
    get tamanho() {
        return this._tamanho;
    }
    get modelo() {
        return this._modelo;
    }
    get cor() {
        return this._cor;
    }
    get on() {
        return this._on;
    }
    get energia() {
        return this._energia;
    }
    get papel() {
        return this._papel;
    }
    get PapelScan() {
        return this._PapelScan;
    }
    get EscaneamentoPronto() {
        return this._EscaneamentoPronto;
    }
    ligarDesligarEnergia() {
        this._energia = !this._energia;
        if (this._energia === false) this._on = false;
    }
    ligarDesligar() {
        if (this._energia) this._on = !this._on;
    }
    abastecer(quantidade) {
        this._papel += quantidade;
    }
    imprimir(quantidade) {
        if (this._on) {
            if (quantidade <= this._papel) this._papel -= quantidade;
            else console.log('Papel insuficiente');
        }
    }
    imprimirScan(quantidade) {
        if (this._on) {
            if (quantidade <= this._papel && this._EscaneamentoPronto) {
                this._papel -= quantidade;
                this._EscaneamentoPronto = false;
            } else console.log('Papel insuficiente ou escaneaste nada');
        }
    }
    papelScan() {
        this._PapelScan = !this._PapelScan;
    }
    scan() {
        if (this._on) {
            if (this._PapelScan) {
                this._EscaneamentoPronto = true;
                console.log('Escaneamente completo.');
            }
        }
    }
    toString() {
        const part1 = `Marca: ${this.marca}\n Tamanho: ${this.tamanho}`;
        const part2 = `\n Modelo: ${this.modelo}\n Cor: ${this.cor}`;
        return `${part1}${part2}`;
    }
}
console.log('------------------------------ Objeto ---------------------');
const hp = new Impressora('Hp', 'Média', 3636, 'Branca');
hp.abastecer(20); // abastece 20 papéis
hp.ligarDesligarEnergia(); // liga na tomada
hp.ligarDesligar(); // liga no botão
hp.papelScan(); // coloca papel para escanear
hp.scan(); // scannei papel
hp.imprimirScan(5); // imprime uma quantidade do scan
hp.imprimir(20); // Papel insuficiente.
console.log((hp.modelo) === 3636);
console.log((hp.tamanho) === 'Média');
console.log((hp.papel === 15));
hp.ligarDesligarEnergia(); // desligou da tomada
hp.on = true; // acontece nada
console.log((hp.on) === false);
hp.EscaneamentoPronto = true;
console.log((hp.EscaneamentoPronto) === false);
hp.ligarDesligar();
console.log(hp.on); // false (está desligada da tomada)
hp.imprimir(50); // false (desligada)
