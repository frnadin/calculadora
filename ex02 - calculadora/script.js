
document.getElementById("result").addEventListener("click", getValue)

function getValue(){

console.log("passou");
jQuery('#selecao').css('opacity', '1')

var nums = []

nums[0] = Number(document.getElementById("x").value)
nums[1] = Number(document.getElementById("y").value)

jQuery('#nota').css('opacity', '1')


return nums
}

let result

document.getElementById("soma").addEventListener("click", soma)
document.getElementById("sub").addEventListener("click", sub)
document.getElementById("multi").addEventListener("click", multi)
document.getElementById("divi").addEventListener("click", divi)

function soma (){
    let numeros = getValue()
    result=numeros[0]+numeros[1]
    document.getElementById("saida").innerHTML = "result: <br>"+ result
}

function sub (){
    let numeros = getValue()
    result=numeros[0]-numeros[1]
    document.getElementById("saida").innerHTML = "result: <br>"+ result
    }

function multi (){
    let numeros = getValue()
    result=numeros[0]*numeros[1]
    document.getElementById("saida").innerHTML = "result: <br>"+ result
}

function divi (){
    let numeros = getValue()
    result=numeros[0]/numeros[1]
    document.getElementById("saida").innerHTML = "result: <br>"+ result
}

 