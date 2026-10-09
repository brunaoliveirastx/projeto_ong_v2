// Bruna Oliveira Santana


document.addEventListener('DOMContentLoaded', function () {


    var campoCpf = document.getElementById('cpf');

    if (campoCpf) {
        campoCpf.addEventListener('input', function (evento) {
            aplicarMascaraCpf(evento.target);
        });
    }

    var campoTelefone = document.getElementById('telefone');

    if (campoTelefone) {
        campoTelefone.addEventListener('input', function (evento) {
            aplicarMascaraTelefone(evento.target);
        });
    }


    var campoCep = document.getElementById('cep');

    if (campoCep) {
        campoCep.addEventListener('input', function (evento) {
            aplicarMascaraCep(evento.target);
        });
    }
});


/**
 * Formata o valor digitado no padrão 000.000.000-00.
 * Funcionamento, passo a passo:
 * 1. Remove tudo que não for número do texto digitado;
 * 2. Limita a 11 dígitos (tamanho de um CPF);
 * 3. Reinsere os pontos e o traço nas posições corretas.
 */
function aplicarMascaraCpf(campo) {
    var apenasNumeros = campo.value.replace(/\D/g, '').slice(0, 11);

    if (apenasNumeros.length > 9) {
        campo.value = apenasNumeros.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
    } else if (apenasNumeros.length > 6) {
        campo.value = apenasNumeros.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
    } else if (apenasNumeros.length > 3) {
        campo.value = apenasNumeros.replace(/(\d{3})(\d{1,3})/, '$1.$2');
    } else {
        campo.value = apenasNumeros;
    }
}

/**
 * Formata o valor digitado no padrão (00) 00000-0000.
 * Mesma lógica da função de CPF: remove caracteres não numéricos,
 * limita o tamanho e reinsere parênteses, espaço e traço.
 */
function aplicarMascaraTelefone(campo) {
    var apenasNumeros = campo.value.replace(/\D/g, '').slice(0, 11);

    if (apenasNumeros.length > 6) {
        campo.value = apenasNumeros.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
    } else if (apenasNumeros.length > 2) {
        campo.value = apenasNumeros.replace(/(\d{2})(\d{1,5})/, '($1) $2');
    } else {
        campo.value = apenasNumeros;
    }
}

/**
 * Formata o valor digitado no padrão 00000-000.
 */
function aplicarMascaraCep(campo) {
    var apenasNumeros = campo.value.replace(/\D/g, '').slice(0, 8);

    if (apenasNumeros.length > 5) {
        campo.value = apenasNumeros.replace(/(\d{5})(\d{1,3})/, '$1-$2');
    } else {
        campo.value = apenasNumeros;
    }
}
