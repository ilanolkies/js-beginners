// Matematica

function funcion1(x) {
    return "Implementar!";
}

function funcion2(x) {
    return "Implementar!";
}

function funcion3(x, y) {
    return "Implementar!";
}

function funcion4(x) {
    return "Implementar!";
}

// Text

function funcion5(x) {
    return "Implementar!";
}

function funcion6(x) {
    return "Implementar!";
}

function funcion7(x, y) {
    return "Implementar!";
}

function funcion8(x, y, z) {
    return "Implementar!";
}


$('#btn-1').click(() =>{
    var x = $('#in-1').val()
    var result = funcion1(x)
    $('#out-1').html(result)
})

$('#btn-2').click(() =>{
    var x = $('#in-2').val()
    var result = funcion2(x)
    $('#out-2').html(result)
})

$('#btn-3').click(() =>{
    var x = $('#in-3-x').val()
    var y = $('#in-3-y').val()
    var result = funcion3(x, y)
    $('#out-3').html(result)
})

$('#btn-4').click(() =>{
    var x = $('#in-4').val()
    var result = funcion4(x)
    $('#out-4').html(result)
})

$('#btn-5').click(() =>{
    var x = $('#in-5').val()
    var result = funcion5(x)
    $('#out-5').html(result)
})

$('#btn-6').click(() =>{
    var x = $('#in-6').val()
    var result = funcion6(x)
    $('#out-6').html(result)
})

$('#btn-7').click(() =>{
    var x = $('#in-7-x').val()
    var y = $('#in-7-y').val()
    var result = funcion7(x, y)
    $('#out-7').html(result)
})

$('#btn-8').click(() =>{
    var x = $('#in-8-x').val()
    var y = $('#in-8-y').val()
    var z = $('#in-8-z').val()
    var result = funcion7(x, y, z)
    $('#out-8').html(result)
})
