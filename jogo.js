var altura = 0
var largura = 0
var vidas = 3
var tempo = 10

var criaMosquitoTempo = 1500

var nivel = window.location.search

nivel = nivel.replace('?', '')
if(nivel === 'Normal'){
    criaMosquitoTempo = 1500
} else if(nivel === 'Dificil'){
    criaMosquitoTempo = 1000
} else if(nivel ==='chuckNorris'){
    criaMosquitoTempo = 750
}

function ajustaTamanhoPalco(){

    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajustaTamanhoPalco()
window.onresize = ajustaTamanhoPalco

var cronometro = setInterval(function(){
    tempo -= 1
    document.getElementById('cronometro').innerHTML = tempo

    if(tempo < 0 || vidas < 0){
        window.location.href = 'fim_de_jogo.html'
    }if(tempo < 0 && vidas > 0){
        window.location.href = 'Vitoria.html'
    }

}, 1000)

function posicaoRandomica() {

    //Remover o o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')){    
        document.getElementById('mosquito').remove()

        if (vidas == 0){
            window.location.href = 'fim_de_jogo.html'
        } else{
            document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
            vidas--
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) -90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    // Criar o elemento html

    var mosquito = document.createElement('img')
    mosquito.src = 'Imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        document.getElementById('somTapa').play();
     this.remove();//Operador this: é um operador que ajusta o contexto dado a um altributo ou método / faz referencia ao elemento html ao que o contexto do código se refere
    }

    document.body.appendChild(mosquito)
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)


    switch(classe) {
        case 0: 
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'

    }
}

function ladoAleatorio() {

    var classe = Math.floor(Math.random() * 2)


    switch(classe) {
        case 0: 
            return 'ladoA'
        case 1:
            return 'ladoB'


    }

}
