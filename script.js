function ConverterK(){
    let kelvin = document.getElementById('kelvin-ipt').value
    let res = document.getElementById('resK')
    var result  = kelvin -273
    
    if(kelvin){
        res.innerHTML = `${result} C°`
    }
}

function ConverterF(){
    let farenheit = document.getElementById('farenheit-ipt').value
    let res = document.getElementById('resF')

    if(farenheit){
        var result = (farenheit - 32) / 1.8
        res.innerHTML = `${result} C°`
    }
}

function ConverterCpK(){
    let c = parseInt(document.getElementById('cpk-ipt').value)
    let res = document.getElementById('resk')

    if(c){
        var result = c + 273
        res.innerHTML = `${result} K`
    }
}

function ConverterCpF(){
    let c = parseInt(document.getElementById('cpf-ipt').value)
    let res = document.getElementById('resf')

    if(c){
        var result = (1.8*c) + 32
        res.innerHTML = `${result.toFixed(1)} F` 
    }
}