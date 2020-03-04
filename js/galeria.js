function trocaDog(elemento) {    //ELEMENTO --THIS-- MANDA A IMG INTEIRA
    var dogao = document.querySelectorAll('#dogao')[0];
    var nomeDogao = document.querySelectorAll('#nomeDogao')[0];

    dogao.src = elemento.src;
    nomeDogao.innerHTML   = elemento.alt;

    //primeiro remove a borda selecionada da miniatura atual 
    document.querySelectorAll('.selecionado')[0].classList.remove('selecionado');
    
    //implementacão de remoção para quando o usuario puder selecionar mais de uma imagem
    // for (var i = 0 ; i < elemento.length; i++) {
    //     elemento[i].classList.remove('selecionado')
        
    // }

    //aplica a borda ao selecionado
    elemento.classList.add('selecionado');

    
}


// VERSAO ANTIGA DA FUNÇÃO, PRECISAVA PASSAR TODOS OS ATRIBUTOS
// function trocaDog(mini, raca) {
//     var dogao = document.querySelectorAll('#dogao')[0];
//     var nomeDogao = document.querySelectorAll('#nomeDogao')[0];
//     dogao.src = mini;
   
//     // nomeDogao.textContent = raca;
//     nomeDogao.innerHTML   = raca;
// }