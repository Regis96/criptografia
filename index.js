function print(conteudo) {
    console.log(conteudo);
}

function dpcIndo(texto, id) {
    var textoAscii = getTextoAsUnicode(texto);
    var result = [];

    for (var i = 0; i < textoAscii.length; i++) {
        result.push(textoAscii[i] + 3);
    }

    textoFinal = getTextoFromUnicodeArray(result);

    $('#' + id).text(textoFinal);
}

function dpcVoltando(texto, id) {
    var textoAscii = getTextoAsUnicode(texto);
    var result = [];

    for (var i = 0; i < textoAscii.length; i++) {
        result.push(textoAscii[i] - 3);
    }

    textoFinal = getTextoFromUnicodeArray(result);

    $('#' + id).text(textoFinal);
}


function getTextoAsUnicode(texto) {
    result = [];
    var text = texto.replace(/ /g, '').toUpperCase();

    for (var i = 0; i < text.length; i++) {
        result.push(text.charCodeAt(i) - 64)
    }

    return result;
}

function getTextoFromUnicodeArray(unicodeArray) {
    var textoFinal = '';

    for (num of unicodeArray) {
        textoFinal += String.fromCharCode(num + 64);
    }

    return textoFinal.toUpperCase();
}