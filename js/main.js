const bracosValue = document.querySelector("#bracosValue");
const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica]")

controle.forEach((elemento) =>{
    elemento.addEventListener("click", (evento) =>{
        atualizaEstatistica(evento.target.dataset.peca, evento.target.dataset.controle,evento.target.parentNode)
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    })
})
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

var saldoDePontos = 5
var maxPontos = 5


function manipulaDados(operacao,controle) {
    const peca = controle.querySelector("[data-contador]")
    if (operacao == "+" && saldoDePontos >= 1) {
        saldoDePontos --
        peca.value ++
    } else if(operacao == "-" ){
        if (peca.value > 0) {
            peca.value --
            saldoDePontos ++
        }
    }
}
function atualizaEstatistica(peca, operacao,controle){
    const peca1 = controle.querySelector("[data-contador]")
    console.log(pecas[peca])
    estatistica.forEach((elemento) => {
        if(operacao == "+" && saldoDePontos > 0){
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]}
        console.log(operacao, saldoDePontos)
        if(operacao == "-" && saldoDePontos < maxPontos && peca1.value > 0) {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        }


    })
}


