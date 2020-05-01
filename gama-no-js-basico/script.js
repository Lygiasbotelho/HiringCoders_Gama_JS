console.log('Javascript carregado');

function validaCPF(cpf) {
    console.log("Tamanho do CPF: " + cpf.length);

    if (cpf.length != 11) {
        return false;
    }
    else {

        var numeros = cpf.substring(0, 9); //Do primeiro dígito até o 9
        var digitos = cpf.substring(9); //Do 9º digito até o final

        //Testando primeiro dígito verificador
        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i; //777.777.777-77

        }
        console.log("Soma: " + soma);

        var calc = soma % 11;

        var resultado = calc < 2 ? 0 : 11 - calc;
        console.log("Resultado: " + resultado);

        //Validação do primeiro dígito
        if (resultado != digitos.charAt(0)) {
            return false;
        }

        //Testando segundo dígito verificador
        soma = 0;
        numeros = cpf.substring(0, 10);

        
        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        //Validação do segundo dígito
        if(resultado != digitos.charAt(1)){
            return false;
        }

        console.log("Soma2: " + soma);

        /* console.log(
             digitos.toString().charAt(0) + " é a primeira posicao da variavel soma"
         );*/

        //console.log("numeros do cpf: " + numeros);
        //console.log("digito do cpf: " + digitos);

        return true;
    }

}

function validacao() {
    console.log('Iniciando validacao CPF');
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    var cpf = document.getElementById('cpf_digitado').value;

    var resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    }
    else {
        document.getElementById('error').style.display = 'block';
    }
}

