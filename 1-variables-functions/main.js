// Math

function lineal (x) {
    return "Implement!";
}

function sqrt (x) {
    return "Implement!";
}

function avarage (x, y) {
    return "Implement!";
}

function cuadratic (x) {
    return "Implement!";
}

// Text

function exclam (x) {
    return "Implement!";
}

function upperCase (x) {
    return "Implement!";
}

function concat (x, y) {
    return "Implement!";
}

function concatWithSpace (x, y, z) {
    return "Implement!";
}

// Button an input binding
$('#btn-1').click(() =>{
    var x = $('#in-1').val()
    var result = lineal(x)
    $('#out-1').html(result)
})

$('#btn-2').click(() =>{
    var x = $('#in-2').val()
    var result = sqrt(x)
    $('#out-2').html(result)
})

$('#btn-3').click(() =>{
    var x = $('#in-3-x').val()
    var y = $('#in-3-y').val()
    var result = avarage(x, y)
    $('#out-3').html(result)
})

$('#btn-4').click(() =>{
    var x = $('#in-4').val()
    var result = cuadratic(x)
    $('#out-4').html(result)
})

$('#btn-5').click(() =>{
    var x = $('#in-5').val()
    var result = exclam(x)
    $('#out-5').html(result)
})

$('#btn-6').click(() =>{
    var x = $('#in-6').val()
    var result = upperCase(x)
    $('#out-6').html(result)
})

$('#btn-7').click(() =>{
    var x = $('#in-7-x').val()
    var y = $('#in-7-y').val()
    var result = concat(x, y)
    $('#out-7').html(result)
})

$('#btn-8').click(() =>{
    var x = $('#in-8-x').val()
    var y = $('#in-8-y').val()
    var z = $('#in-8-z').val()
    var result = concatWithSpace(x, y, z)
    $('#out-8').html(result)
})
