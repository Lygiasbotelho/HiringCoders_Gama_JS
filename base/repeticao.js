/* var numeroSorteado = 10;

// Sorteio

for (var i = 0; i < 100; i++) {
    console.log(i);
    if (i == numeroSorteado) {
        console.log('Seu numero foi encontrado');
        break; //Não é recomendado utilizar (ter quebras súbitas do código)
    }
}

//Tabuada com for

var tabuada = 7;
var resultado;

for (var i = 0; i <= 10; i++) {
    console.log(tabuada + " x " + i + " = " + tabuada * i );
} */

//Tabuada com while
/* var tabuada = 8;
var repeticoes = 0;

while (repeticoes <= 10) {
    var resultado = tabuada * repeticoes;
    console.log(tabuada + " x " + repeticoes + " = " + resultado);

    repeticoes++;
} */

// Sorteio com while
var achou = false;

var numeroSorteado = 10;
var possivelValor = 0;

while (!achou) {
    possivelValor +=1;

    if (numeroSorteado === possivelValor) {
        achou = true;
        console.log('Seu numero foi encontrado');
    }else{
        console.log('Possivel valor não corresponde ao numero sorteado: ' + possivelValor);
    }
}

