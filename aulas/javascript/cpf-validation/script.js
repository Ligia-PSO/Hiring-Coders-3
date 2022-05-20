// console.log("Javascript carregado");

function validaCPF(cpf) {
    console.log("CPF Length " + cpf.length)

    if (cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9)

        console.log('Números ' + numeros)
        console.log('Dígitos ' + digitos)

        //validação do meu primeiro digito
        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }
        console.log('Soma primeiro digito ' + soma);

        //validação do primeiro digito
        //operador ternário teste ? verdadeiro : falso
        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        if (resultado != digitos.charAt(0)) {
            return false;
        }
        soma = 0;
        numeros = cpf.substring(0, 10);
        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }

        console.log('Soma segundo digito ' + soma)

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)

        if (resultado != digitos.charAt(1)) {
            return false
        }
        console.log(digitos.toString().charAt(1) + ' é a segunda posição da var digitos')

        return true
    }
}
function validacao() {
    console.log("Iniciando Validação do CPF")

    document.getElementById("success").style.display = 'none'
    document.getElementById("error").style.display = 'none'
    //sempre que executar a função validacao()
    //será ocultada as mensagens de alerta
    //para evitar monstrar as mensagens erroneamente

    var cpf = document.getElementById("cpf_digitado").value;
    //Ensinar o .js a capturar elementos de dentro do .html
    //cpf recebe o valor do cpf digitado
    if (cpf !='') //garante que a area do cpf nao esta vazia
    {
        var resultadoValidacao = validaCPF(cpf);
        if (resultadoValidacao) 
        {
            document.getElementById('success').style.display = 'block';
        } else 
        {
            document.getElementById('error').style.display = 'block';
        }
    }
}
