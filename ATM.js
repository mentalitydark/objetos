class ATM {
    constructor(numeroSerie, valor = 0) {
        this._numeroSerie = numeroSerie;
        this._valor = valor;
        this._cedulas = [[0, 5], [0, 10], [0, 20], [0, 50], [0, 100]];
    }
    get valor() {
        this._valor = this.calcularValor();
        return this._valor;
    }
    get numeroSerie() {
        return this._numeroSerie;
    }
    cedulas(cedula) {
        switch (cedula) {
        case 5: {
            return this._cedulas[0][0];
        }
        case 10: {
            return this._cedulas[1][0];
        }
        case 20: {
            return this._cedulas[2][0];
        }
        case 50: {
            return this._cedulas[3][0];
        }
        case 100: {
            return this._cedulas[4][0];
        }
        default: {
            return 0;
        }
        }
    }
    calcularValor() {
        this._valor = 0;
        this._valor += this._cedulas[0][0]*5;
        this._valor += this._cedulas[1][0]*10;
        this._valor += this._cedulas[2][0]*20;
        this._valor += this._cedulas[3][0]*50;
        this._valor += this._cedulas[4][0]*100;
        return this._valor;
    }
    abastecer(quantidade, nota) {
        switch (nota) {
        case 5: {
            if (this._cedulas[0][0] <= 100) {
                if (this._cedulas[0][0] + quantidade <= 100) {
                    this._cedulas[0][0] += quantidade;
                } else {
                    return console.log('Quantidade de cédulas passa o limite.');
                }
            }
            break;
        }
        case 10: {
            if (this._cedulas[1][0] <= 100) {
                if (this._cedulas[1][0] + quantidade <= 100) {
                    this._cedulas[1][0] += quantidade;
                } else {
                    return console.log('Quantidade de cédulas passa o limite.');
                }
            }
            break;
        }
        case 20: {
            if (this._cedulas[2][0] <= 100) {
                if (this._cedulas[2][0] + quantidade <= 100) {
                    this._cedulas[2][0] += quantidade;
                } else {
                    return console.log('Quantidade de cédulas passa o limite.');
                }
            }
            break;
        }
        case 50: {
            if (this._cedulas[3][0] <= 100) {
                if (this._cedulas[3][0] + quantidade <= 100) {
                    this._cedulas[3][0] += quantidade;
                } else {
                    return console.log('Quantidade de cédulas passa o limite.');
                }
            }
            break;
        }
        case 100: {
            if (this._cedulas[4][0] <= 100) {
                if (this._cedulas[4][0] + quantidade <= 100) {
                    this._cedulas[4][0] += quantidade;
                } else {
                    return console.log('Quantidade de cédulas passa o limite.');
                }
            }
            break;
        }
        }
        this.calcularValor();
    }
    retirar(valor) {
        if (valor <= this._valor) {
            const numeros = [];
            const tirarcedulas = [];
            let retirarDinheiro = 0;
            const verificao = [];
            if (valor >= 100 && (parseInt(valor/100) <= this._cedulas[4][0])) {
                retirarDinheiro = parseInt(valor/100);
                valor -= retirarDinheiro*100;
                verificao.push([100, retirarDinheiro]);
                numeros.push(100);
                tirarcedulas.push(4);
            }
            if (valor >= 50 && (parseInt(valor/50) <= this._cedulas[3][0])) {
                retirarDinheiro = parseInt(valor/50);
                valor -= retirarDinheiro*50;
                verificao.push([50, retirarDinheiro]);
                numeros.push(50);
                tirarcedulas.push(3);
            }
            if (valor >= 20 && (parseInt(valor/20) <= this._cedulas[2][0])) {
                retirarDinheiro = parseInt(valor/20);
                valor -= retirarDinheiro*20;
                verificao.push([20, retirarDinheiro]);
                numeros.push(20);
                tirarcedulas.push(2);
            }
            if (valor >= 10 && (parseInt(valor/10) <= this._cedulas[1][0])) {
                retirarDinheiro = parseInt(valor/10);
                valor -= retirarDinheiro*10;
                verificao.push([10, retirarDinheiro]);
                numeros.push(10);
                tirarcedulas.push(1);
            }
            if (valor >= 5 && (parseInt(valor/5) <= this._cedulas[0][0])) {
                retirarDinheiro = parseInt(valor/5);
                valor -= retirarDinheiro*5;
                verificao.push([5, retirarDinheiro]);
                numeros.push(5);
                tirarcedulas.push(0);
            }
            if (valor === 0) {
                for (let i = 0; i < verificao.length; i++) {
                    if (verificao[i].indexOf[numeros[i]] !== -1) {
                        this._valor -= verificao[i][1] * numeros[i];
                        this._cedulas[(tirarcedulas[i])][0] -= verificao[i][1];
                    }
                }
            }
        }
    }
    toString() {
        return `Série: ${this.numeroSerie} \n Valor: ${this.valor}`;
    }
}
console.log('-------------------------- ATM ---------------------');
const atm = new ATM(2344499);
console.log(atm.numeroSerie === 2344499);
// a linha a seguir não deve fazer efeito
atm.numeroSerie = 34883444;
console.log(atm.numeroSerie === 2344499);
// o ATM não tem dinheiro no início
console.log(atm.valor); // 0
console.log(atm.valor === 0);
// abastecendo com 33 notas de 100
atm.abastecer(33, 100);
// verificando a quantidade de cédulas de 100
console.log(atm.cedulas(100)); // 33
// espera-se 33 cédulas
console.log(atm.cedulas(100) === 33);
// e 33 * R$ 100 totalizando R$ 3300
console.log(atm.valor === 3300);
// espera-se nenhuma cédula de qualquer outro valor
console.log(atm.cedulas(5)); // 0
console.log(atm.cedulas(5) === 0);
console.log(atm.cedulas(50)); // 0
console.log(atm.cedulas(50) === 0);
// mesmo os que não existem podem ser consultados, mas retornam 0
console.log(atm.cedulas(3)); // 0
console.log(atm.cedulas(3) === 0);
// abastecimento de cédulas não existentes são rejeitados
atm.abastecer(8, 3); // 8 cédulas de R$ 3,00
console.log(atm.cedulas(3) === 0);
// consultando o valor
console.log(atm.valor); // 33 * 100 = 3300 reais
console.log(atm.valor === 3300);
// retirada rejeitada
atm.retirar(350); // não há cédulas de R$ 50,00
console.log(atm.cedulas(100) === 33);
console.log(atm.valor === 3300);
// retirada válida
atm.retirar(300); // 3 cédulas de 100
console.log(atm.cedulas(100) === 30);
console.log(atm.valor === 3000);
// retirada rejeitada
atm.retirar(3100); // não há cédulas suficientes
console.log(atm.cedulas(100) === 30);
console.log(atm.valor === 3000);
// retirada válida
atm.retirar(3000); // vai esvaziar o ATM
console.log(atm.cedulas(100) === 0);
console.log(atm.valor === 0);
// abastecimento de R$ 50,00 e R$ 10,00
atm.abastecer(10, 10); // 10 cédulas de R$ 10,00
atm.abastecer(10, 50); // 10 cédulas de R$ 50,00
console.log(atm.cedulas(10) === 10);
console.log(atm.cedulas(50) === 10);
console.log(atm.valor === 600); // 10 * 10 + 10 * 50
// retirada prioriza cédulas de maior valor
atm.retirar(100); // retira 2 cédulas de R$ 50,00
console.log(atm.cedulas(10) === 10);
console.log(atm.cedulas(50) === 8);
console.log(atm.valor === 500); // 10 * 10 + 8 * 50
// retirada combinada
atm.retirar(90); // 1 cédula de R$ 50,00 e 4 cédulas de R$ 10,00
console.log(atm.cedulas(10) === 6);
console.log(atm.cedulas(50) === 7);
console.log(atm.valor === 410); // 6 * 10 + 7 * 50
// até aqui 0.5 pts
// incluir casos de teste pessoais com retiradas
// quem combinam 3, 4 e 5 cédulas (+0.5 pts)
// ---------------------------------------------------
