const tabs = document.querySelectorAll('.tab-btn');

tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

const tabClicked = (tab) => {
    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('show'));

    const contentId = tab.getAttribute('content-id');
    const content = document.getElementById(contentId);

    content.classList.add('show');
}

const currentActiveTab = document.querySelector('.tab-btn.active');
tabClicked(currentActiveTab);


/*Validação campos*/
//campos
const email_cliente = document.getElementById('email_cliente');
const endereco_cliente = document.getElementById('end_cliente');
const cnpj_cliente = document.getElementById('cnpj_cliente');
const password_cliente = document.getElementById('senha_cliente');
const password_cliente_conf = document.getElementById('senha_cliente_conf');
const form_cliente = document.getElementById('formCliente');

//msg_error
const email_error_cliente = document.getElementById('email-error');
const endereco_error_cliente = document.getElementById('end-error');
const cnpj_error_cliente = document.getElementById('cnpj-error');
const pass_error_cliente = document.getElementById('pass-error');
const pass_error_conf_cliente = document.getElementById('pass-error-conf');

//msg_sucesso
// let msg_sucesso = document.getElementById('msg_sucesso');

form_cliente.addEventListener('submit',(e)=>
{
  //Verifica se email é válido
  var email_check_cliente = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  //email
  if(!email_cliente.value.match(email_check_cliente)){
    e.preventDefault();
    email_error_cliente.innerText = "Email é obrigatório";
  }else{
    email_error_cliente.innerText = "";
  }

  //endereço
  if(endereco_cliente.value === '' || endereco_cliente.value == null){
      e.preventDefault();
      endereco_error_cliente.innerHTML = "Endereço é obrigatório";
   }else{
    endereco_error_cliente.innerHTML = ""
   }

  //cnpj
  if(cnpj_cliente.value == '' || cnpj_cliente.value == null){
    e.preventDefault();
    cnpj_error_cliente.innerHTML = "CNPJ é obrigatório";
  }else{
    cnpj_error_cliente.innerHTML = ""
  }

  //digitar senha
  if(password_cliente.value.length <= 5){
    e.preventDefault();
    pass_error_cliente.innerHTML = "Senha deve ser maior que 6 caracteres";
  }

  //Confirmar senha
  if(password_cliente === password_cliente_conf && pass_error_conf_cliente.value === '' && pass_error_conf_cliente.value == null){
    e.preventDefault();
    pass_error_conf_cliente.innerHTML = 'Senha divergente'
  }
})