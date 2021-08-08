
//VARIAVEIS
var horas = new Date
var p = document.querySelector("p#horas")
var img = document.querySelector("img#tempo")
var colorback = document.querySelector("main")

var buttondia = document.querySelector('button#hora')
var buttonimc = document.querySelector('button#imcbutton')
var buttoncar = document.querySelector('button#carro')   

var inputs = document.querySelector("div#inputs")

var resultado


//CALCULAR HORARIO
document.querySelector("button#hora").addEventListener('click', modehours)
function modehours(params) {
    buttondia.remove()
    buttonimc.remove()
    buttoncar.remove()

    img.style.cssText = "visibility:visible; position:relative"
    p.innerHTML = `Agora são ${horas.getHours()} horas`
    document.querySelector('section').style.height = "auto"

    if (horas.getHours() < 12) {
        img.src = "/assets/img/OIP.jpg"
        colorback.style.backgroundColor = "#fcd63c"
    }else if (horas.getHours() < 18) {
        img.src = "/assets/img/tarde.jpg"
        colorback.style.backgroundColor = "#37000a"
    }else {
     img.src = "/assets/img/anoitecendo.jpg"
        colorback.style.backgroundColor = "#000F14"
    }
    }


    //CALCULAR IMC
    buttonimc.addEventListener('click', imc)
    function imc(params) {
        buttondia.remove()
        buttonimc.innerHTML = "Calcular"
        buttoncar.remove()
        colorback.style.backgroundColor = "#A9E5BB"

        if (buttonimc.innerHTML == "Calcular") {
            buttonimc.addEventListener('click', calculeimc)
        }

        p.innerHTML = `Digite sua altura e seu Peso`
        inputs.style.cssText = "visibility:visible; position:relative"
    }

    function calculeimc(params) {
        let altura = Number(document.querySelector('input#input1').value) 
        let peso = Number( document.querySelector('input#input2').value)
        resultado =  peso / (altura * altura)
        document.querySelector('div#result').style.color = "black"
    
        if (peso == 0 || altura == 0) {
            document.querySelector('div#result').innerText = `Ambos valores precisam ser preenchidos`
            document.querySelector('div#result').style.color = "red"
        }else
        if (resultado < 18) {
            document.querySelector('div#result').innerText = `Seu IMC é ${parseInt(resultado)} você está abaixo do peso`
        }else 
        if (resultado >=18 && resultado <= 25) {
            document.querySelector('div#result').innerText = `Seu IMC é ${parseInt(resultado)} você está com o peso ideal`
        }else
        if (resultado > 25) {
            document.querySelector('div#result').innerText = `Seu IMC é ${parseInt(resultado)} você está com o sobrepeso`
        }
    }


    // CALCULAR DISTANCIA
    buttoncar.addEventListener('click', kmh)
    function kmh(params) {
        buttondia.remove()
        buttonimc.remove()
        buttoncar.innerHTML = "Calcular"
        document.querySelector('div#result').style.color = "black"

        colorback.style.backgroundColor = "#524948"
        p.innerHTML = `Digite a Velocidade e a Distância`
        inputs.style.cssText = "visibility:visible; position:relative"
        document.querySelector('input#input1').placeholder = "Velocidade Km/h"
        document.querySelector('input#input2').placeholder = "Distância Km"

        if (buttoncar.innerHTML == "Calcular") {
            buttoncar.addEventListener('click', calculecar)
        }
    }

    function calculecar(params) {
        let velocidade = Number(document.querySelector('input#input1').value)
        let distancia = Number( document.querySelector('input#input2').value)
        resultado = distancia / velocidade

        if (velocidade == 0 || distancia == 0) {
            document.querySelector('div#result').innerText = `Ambos valores precisam ser preenchidos`
            document.querySelector('div#result').style.color = "red"
        } else{
            document.querySelector('div#result').innerText = `Voce levara ${resultado} hora/s para chegar`
        }
    }


    document.querySelector('button#btn-refresh').addEventListener("click", refresh)
    function refresh(params) {
        
        location.reload()
    }
