function dpcIndo(texto, idResultado) {
    var textoAscii = getTextoAsUnicode(texto);
    var result = [];

    for (var i = 0; i < textoAscii.length; i++) {
        result.push(textoAscii[i] + 3);
    }

    textoFinal = getTextoFromUnicodeArray(result);

    $('#' + idResultado).text(textoFinal);
}

function dpcVoltando(texto, idResultado) {
    var textoAscii = getTextoAsUnicode(texto);
    var result = [];

    for (var i = 0; i < textoAscii.length; i++) {
        result.push(textoAscii[i] - 3);
    }

    textoFinal = getTextoFromUnicodeArray(result);

    $('#' + idResultado).text(textoFinal);
}

function inverterChavePermutacao(p, idResultado){
    var arr = p.split(' ').map(function(item){
        return parseInt(item);
    });
    var result = arr.slice();
    for(var i = 0; i < arr.length; i++){
        result[i] = arr.indexOf(i + 1) + 1
    }

    $('#' + idResultado).text(result.join(' '));
}

function permutacao(texto, idResultado, p){
    var pArr = p.split(' ').map(function(item){
        return parseInt(item);
    });

    var textoAscii = getTextoAsUnicode(texto);
    var result = [];
    var tamPermutacao = pArr.length;

    for(i = 0; i < textoAscii.length; i += tamPermutacao){
        var temp = pArr.slice();
        var pedaco = textoAscii.slice(i, i + tamPermutacao);

        for(var i2 = 0; i2 < tamPermutacao; i2++){
            temp[i2] = pedaco[pArr[i2] - 1]
        }

        result = result.concat(temp);
    }

    textoFinal = getTextoFromUnicodeArray(result);

    $('#' + idResultado).text(textoFinal);
}

function transposicaoIndo(texto, idResultado, chave){
    var textoAscii = getTextoAsUnicode(texto);
    var chaveInt = parseInt(chave);
    var quociente = textoAscii.length / chaveInt;

    var result = [];

    var arraysParciais = [];
    for(var i = 0; i < quociente; i ++){
        arraysParciais.push([]);
    }

    for(var i = 0; i < textoAscii.length; i += quociente){
        for(var i2 = 0; i2 < arraysParciais.length; i2++){
            arraysParciais[i2].push(textoAscii[i + i2]);
        }
    }

    result = [].concat.apply([],arraysParciais);
    var textoFinal = getTextoFromUnicodeArray(result);
    $('#' + idResultado).text(textoFinal);
}

function transposicaoVindo(texto, idResultado, chave){
    var textoAscii = getTextoAsUnicode(texto);
    var chaveInt = parseInt(chave);
    var quociente = textoAscii.length / chaveInt;

    var result = [];
    for(var i = 0; i < chaveInt; i++){
        for(var i2 = 0; i2 < quociente; i2++){
            result.push(textoAscii[i + (chaveInt * i2)])            
        }
    }

    var textoFinal = getTextoFromUnicodeArray(result);
    $('#' + idResultado).text(textoFinal);
}

function getHash(texto, idDecimal, idBinario, idOctal, idHexadecimal){
    var textoAscii = getTextoAsUnicode(texto);
    var result = textoAscii[0];

    for(var i = 1; i < textoAscii.length; i++){
        result = result ^ textoAscii[i];
    }

     $('#' + idDecimal).text('Decimal: ' + result);
     $('#' + idBinario).text('Binário: ' + result.toString(2));
     $('#' + idOctal).text('Octal: ' + result.toString(8));
     $('#' + idHexadecimal).text('Hexadecimal: ' + result.toString(16));
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
        var result = num + 64;
        if(result < 65){
            result += 26;
        }
        if(result > 90){
            result -= 26
        }
        textoFinal += String.fromCharCode(result);
    }

    return textoFinal.toUpperCase();
}