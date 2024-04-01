var corpo = window.document.body
var bem_vind = window.document.querySelector('.bem-vindo')
// TELA DE LOGIN
var nome = window.document.querySelector('#inome')
var erro = window.document.querySelector('.erro')
var tela_login = window.document.querySelector('.tela-login')
tela_login.style.display = 'flex'

function limpa(){
    erro.innerText = ''
}
function pag2() {
    if(nome.value == ''){
        erro.innerText = 'Digite um nome'
    } else if(nome.value.length < 2) {
        erro.innerText = 'Digite um nome válido'
    } else if(nome.value == Number(nome.value)){
        erro.innerText = 'Somente números não é permitido'
    } else {
        tela_avatar.style.display = 'flex'
        tela_login.style.display = 'none'
        bem_vindo.innerText = `Bem Vindo ${nome.value}`.toUpperCase()
    }
}


// TELA AVATAR
var tela_avatar = window.document.querySelector('.tela-avatar')
tela_avatar.style.display = 'none'
var opc = window.document.querySelector('#opc')
var opc2 = window.document.querySelector('#opc2')
var opc3 = window.document.querySelector('#opc3')
opc.style.display = 'none'


var escolha_avatar
function menino(escolha_avatar){
    escolha_avatar = ''
    var menino = window.document.querySelector('#menino').value
    escolha_avatar += menino
    opc.style.display = 'flex'
    var menino_principal = window.document.querySelector('#menino-principal')
    var menina_principal = window.document.querySelector('#menina-principal')
    menino_principal.style.display = 'flex'
    menina_principal.style.display = 'none'
    var texto_bem_vindo = window.document.querySelector('#texto-bem-vindo')
    texto_bem_vindo.innerText = `Bem-Vindo ${nome.value}`.toUpperCase()
    corpo.style.background = 'lightblue'
    bem_vind.style.background = 'darkblue'
}
function menina(){
    escolha_avatar = ''
    var menina = window.document.querySelector('#menina').value
    escolha_avatar += menina
    opc.style.display = 'flex'
    var menino_principal = window.document.querySelector('#menino-principal')
    var menina_principal = window.document.querySelector('#menina-principal')
    menino_principal.style.display = 'none'
    menina_principal.style.display = 'flex'
    var texto_bem_vindo = window.document.querySelector('#texto-bem-vindo')
    texto_bem_vindo.innerText = `Bem-Vindo ${nome.value}`.toUpperCase()
    corpo.style.background = 'pink'
    bem_vind.style.background = 'palevioletred'
}
function pag3(){
    tela_avatar.style.display = 'none'
    tela_login.style.display = 'none'
    tela_principal.style.display = 'flex'
}

 





// TELA PRINCIPAL
var tela_principal = window.document.querySelector('.tela-principal')
tela_principal.style.display = 'none'

var acertou = window.document.querySelector('#acertou')
var quiz1 = window.document.querySelector('#primeiro')
var confirmar = window.document.querySelector('.confirmar')
var confirma2 = window.document.querySelector('.confirmar2')
var prox1 = window.document.querySelector('.prox1')
var prox2 = window.document.querySelector('.prox2')
acertou.style.display = 'none'
prox1.style.display = 'none'
prox2.style.display = 'none'
confirmar.style.display = 'block'
confirma2.style.display = 'none'

function escolheu1(){
    acertou.innerText = 'Você Errou!'
    acertou.style.display = 'none' 
    confirmar.style.display = 'block'
    confirma2.style.display = 'none'  
}
function escolheu2(){
    acertou.innerText = 'Você Acertou!'
    acertou.style.display = 'none' 
    confirmar.style.display = 'none'
    confirma2.style.display = 'block'
    prox1.style.display = 'none'  
}


function confirmar2(){
    acertou.style.display = 'block' 
    prox1.style.display = 'block'  
}
function confirmar1(){
    prox1.style.display = 'none' 
    acertou.style.display = 'block'  
}










