class Matematica {

    soma(valorA, valorB) {
        return valorA + valorB;
    }
    subtracao(valorA, valorB) {
        return valorA - valorB;
    }
    multiplicacao(valorA, valorB) {
        return valorA * valorB;
    }
    divisao(valorA, valorB) {
        return valorA / valorB;
    }
}

var instanciaMatematica = new Matematica();

var resultadoSoma = instanciaMatematica.soma(4, 7);
var resultadoSubtracao = instanciaMatematica.subtracao(4, 7);

console.log(resultadoSoma);
console.log(resultadoSubtracao);