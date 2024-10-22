

const form = document.querySelector('#nome');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const msg   = document.querySelector('#msg');

console.log(form, nome, email, msg);


function btnenviar() {
    event.preventDefault();    
}

if(nome == null ){
    console.log("Nome nao esta Preenchido");
}

if(email == null){
    console.log("Email nao esta Preenchido");
}

if(msg == null){
    console.log("Mensagem nao esta Preenchida");
}


function verificanome(nome){
    alert("Campo Nome esta vazio" +nome);
}
verificanome("Dados Nome Ok")

function verificaemail(email){
    alert("Campo Email esta vazio" +email);
}
verificaemail("Dados Email Ok")

function verificamsg(msg){
    alert("Campo Mensagem esta vazio" +msg);
}
verificamsg("Dados Mensagem Ok")



