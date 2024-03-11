const userNameInput = document.getElementById('user_email');
const userPassword = document.getElementById('user_password');
const form_cliente = document.getElementById('form_cliente');

//msg_error
const email_error_cliente = document.getElementById('email_error');
const pass_error_cliente = document.getElementById('pass_error');

const user_executante = {
  email: 'user@email.com',
  senha: '123456'
}



form_cliente.addEventListener('submit', (e)=>{
    //Verifica se email é válido
    var email_check_cliente = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    //email

  if(!userNameInput.value.match(email_check_cliente)){
    e.preventDefault();
    email_error_cliente.innerText = "Email é obrigatório";
  };
  
    //senha
    
    if(userPassword.value.length <= 5){
      e.preventDefault();
      pass_error_cliente.innerHTML = "Credenciais inválidas";
    }

  

    if((userNameInput.value == user_executante.email) && (userPassword.value == user_executante.senha)) {
      e.preventDefault();
      window.location.href = "/Manutencao/tela-manutencao.html"
      
    }
    })

















