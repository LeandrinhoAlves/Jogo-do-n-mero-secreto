let listaDeNumerosSorteados = [];
let limiteDeTentativa = 3;


function exibirNaTela(tag, texto){
    let campoTexto = document.querySelector(tag);
    campoTexto.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
 }
 
 
 
 let numeroSecreto = numeroAleatorio();
 let tentativa = 1;
 
 function mensagemTextoInicial(){
    exibirNaTela('h1','Jogo do número secreto')
    exibirNaTela('p', 'Digite um número de 1 a 10')
 }
 mensagemTextoInicial();
 
 
 function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
 
       let tentativas = tentativa > 1 ? 'tentativas' : 'tentativa';
       let msgTentativas = `Você acertou com ${tentativa} ${tentativas}`;
 
       exibirNaTela('h1', 'Acertou!');
       exibirNaTela('p', msgTentativas);
 
       document.getElementById('reiniciar').removeAttribute('disabled');
       
    } else if (chute > numeroSecreto){
       exibirNaTela('p', 'O número secreto é menor');
    } else {
       exibirNaTela('p', 'O número secreto é maior');
    }tentativa++;
    limparCampo(); // Limpa o campo do chute
 }

 //Função que gera o número aleatório.
 function numeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * limiteDeTentativa + 1);
    let quantidadeElementos = listaDeNumerosSorteados.length;

    if(quantidadeElementos == limiteDeTentativa){
      listaDeNumerosSorteados = [];
    }  
      
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
    } else {
      listaDeNumerosSorteados.push(numeroEscolhido)
      console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
 }
 
 function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
 }
 
 function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativa = 1;
    mensagemTextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
 }