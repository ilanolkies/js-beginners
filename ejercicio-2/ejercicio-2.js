function elMayor(a ,b) {
    return "Implementar!";
}

function elMenor(a ,b) {
    return "Implementar!";
}

function sonIguales(a ,b) {
    return "Implementar!";
}

function elMayorDeLosTres(a ,b, c) {
    return "Implementar!";
}

function medioMasGrande(a ,b) {
    return "Implementar!";
}

function esPar(a ,b) {
    return "Implementar!";
}

function esDivisible(a ,b) {
    return "Implementar!";
}

function elDelMedio(a ,b) {
    return "Implementar!";
}

function sonPositivos(a, b, c) {
    return "Implementar!";
}

function goloso(a) {
    return "Implementar!";
}

$('#btn-1').click(() =>{
    var a = $('#in-1-a').val()
    var b = $('#in-1-b').val()
    var result = elMayor(a, b)
    $('#out-1').html(result)
})

$('#btn-2').click(() =>{
    var a = $('#in-2-a').val()
    var b = $('#in-2-b').val()
    var result = elMenor(a, b)
    $('#out-2').html(result)
})

$('#btn-3').click(() =>{
    var a = $('#in-3-a').val()
    var b = $('#in-3-b').val()
    var result = sonIguales(a, b)
    $('#out-3').html(result)
})

$('#btn-4').click(() =>{
    var a = $('#in-4-a').val()
    var b = $('#in-4-b').val()
    var c = $('#in-4-c').val()
    var result = elMayorDeLosTres(a, b, c)
    $('#out-4').html(result)
})

$('#btn-5').click(() =>{
    var a = $('#in-5-a').val()
    var b = $('#in-5-b').val()
    var result = medioMasGrande(a, b)
    $('#out-5').html(result)
})

$('#btn-6').click(() =>{
    var a = $('#in-6').val()
    var result = esPar(a)
    $('#out-6').html(result)
})

$('#btn-7').click(() =>{
    var a = $('#in-7-a').val()
    var b = $('#in-7-b').val()
    var result = esDivisible(a, b)
    $('#out-7').html(result)
})

$('#btn-8').click(() =>{
    var a = $('#in-8-a').val()
    var b = $('#in-8-b').val()
    var c = $('#in-8-c').val()
    var result = elDelMedio(a, b, c)
    $('#out-8').html(result)
})

$('#btn-9').click(() =>{
    var a = $('#in-9-a').val()
    var b = $('#in-9-b').val()
    var c = $('#in-9-c').val()
    var result = elDelMedio(a, b, c)
    $('#out-9').html(result)
})

$('#btn-10').click(() =>{
    var a = $('#in-10').val()
    var result = goloso(a)
    $('#out-10').html(result)
})

