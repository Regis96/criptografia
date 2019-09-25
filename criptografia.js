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

function inverterChavePermutacao(p, id){
    var arr = p.split(' ').map(function(item){
        return parseInt(item);
    });
    var result = arr.slice();
    for(var i = 0; i < arr.length; i++){
        result[i] = arr.indexOf(i + 1) + 1
    }

    $('#' + id).text(result.join(' '));
}

function permutacao(texto, id, p){
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

    $('#' + id).text(textoFinal);
}

function transposicaoIndo(texto, id, chave){
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
    $('#' + id).text(textoFinal);
}

function transposicaoVindo(texto, id, chave){
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