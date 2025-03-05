// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");
let confirmaSenhaInput = document.getElementById("confirma-senha");
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function mostrarPopup(input, label, helper) {
    input.addEventListener('focus', function() {
        label.classList.add('required-popup');
    });
    input.addEventListener('blur', function() {
        label.classList.remove('required-popup');
    });
}
mostrarPopup(emailInput, emailLabel, emailHelper);
mostrarPopup(usernameInput, usernameLabel, usernameHelper);
mostrarPopup(senhaInput, senhaLabel, senhaHelper);
mostrarPopup(confirmaSenhaInput, confirmaSenhaLabel, confirmaSenhaHelper);

usernameInput.addEventListener('change', function(evento){
    let valor = evento.target.value 
    console.log(valor)

    if(valor.length < 3) {
//estilo dinamicos caso o valor NÂO seja valido
        usernameInput.classList.remove('correct');
        usernameInput.classList.add('error');
        usernameHelper.innerText = 'Seu username deve ter três ou mais caracteres'
        usernameHelper.classList.add('visible')
        inputCorrect.username = false
    } else {
        //Caso o valor seja valido
        usernameInput.classList.remove('error')
        usernameHelper.classList.remove('visible')
        usernameInput.classList.add('correct')
        inputCorrect.username = true
    }
})
emailInput.addEventListener('change', function(evento){
    let valor = evento.target.value; 
    console.log(valor);

    if(!emailRegex.test(valor)) {
//estilo dinamicos caso o valor NÂO seja valido
        emailInput.classList.remove('correct');
        emailInput.classList.add('error');
        emailHelper.innerText = 'Insira um endereço de email valido'
        emailHelper.classList.add('visible')
        inputCorrect.email = false
    } else {
        //Caso o valor seja valido
        emailInput.classList.remove('error')
        emailHelper.classList.remove('visible')
        emailInput.classList.add('correct')
        inputCorrect.email = true
    }
})

senhaInput.addEventListener('blur', (e) =>{
    let valor = e.target.value
    if(valor == ""){
        senhaInput.classList.remove('correct');
        senhaInput.classList.add('error');
        senhaHelper.innerText = 'Sua senha está incorreta'
        senhaHelper.classList.add('visible')
        inputCorrect.senha = false
    }else{
        senhaInput.classList.remove('error')
        senhaHelper.classList.remove('visible')
        senhaInput.classList.add('correct')   
        inputCorrect.senha = true
    }
})

confirmaSenhaInput.addEventListener('blur', function(evento) {
    let senha = senhaInput.value;
    let confirmacaoSenha = evento.target.value;

    if (senha !== confirmacaoSenha) {
        confirmaSenhaInput.classList.remove('correct');
        confirmaSenhaInput.classList.add('error');
        confirmaSenhaHelper.innerText = 'As senhas não coincidem';
        confirmaSenhaHelper.classList.add('visible');
        inputCorrect.confirmaSenha = false
    } else {
        confirmaSenhaInput.classList.remove('error');
        confirmaSenhaHelper.classList.remove('visible');
        confirmaSenhaInput.classList.add('correct');
        inputCorrect.confirmaSenha = true
    }
});

// Evitar envio do formulário

let btnSubmit = document.querySelector('button[type="Submit"]')
let inputCorrect = {
    username: false,
    email: false,
    senha: false,
    confirmaSenha: false
} 

btnSubmit.addEventListener('click', (e)=>{
    if(inputCorrect.username == false || 
        inputCorrect.email == false || 
        inputCorrect.senha == false ||
        inputCorrect.confirmaSenha == false){
        e.preventDefault()
        alert('Os locais obrigatórios precisam ser preenchidos corretamente')
    }else{
        alert('Formulário enviado com sucesso')
    }
})