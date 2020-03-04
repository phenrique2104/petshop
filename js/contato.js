function validaForm() {
    var nome = document.querySelectorAll('#nome')[0];
    var erro = document.querySelectorAll('#erro')[0];
    var email = document.querySelectorAll('#email')[0];
    var msg = document.querySelectorAll('#msg')[0];
        
    if (nome.value == '') {
        erro.innerHTML = 'Preencha o nome';
        nome.focus();  //PONTEIRO VOLTA PRO CAMPO
        return false; //IMPEDE O ENVIO DO FORMULARIO

    }
    
    if (email.value == '') {
        erro.innerHTML = 'Preencha o e-mail';
        email.focus();
        return false;
    }
    //Validação do endereço de email
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,9})+$/;
    if ( regexEmail.test(email.value) == false ) {
        erro.innerHTML = 'E-mail Inválido'
        email.focus();
        return false;
    }

    if (msg.value == '') {
        erro.innerHTML = 'Preencha a Mensagem';
        msg.focus();
        return false;
    }

    return true;
    
}