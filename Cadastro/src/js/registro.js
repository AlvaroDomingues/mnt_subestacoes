// const tabs = document.querySelectorAll('.tab-btn');

// tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab, index)));

// const tabClicked = (tab, index) => {
//     tabs.forEach(tab => tab.classList.remove('active'));
//     tab.classList.add('active');

//     const contents = document.querySelectorAll('.content');
//     contents.forEach(content => content.classList.remove('show'));

//     const contentId = tab.getAttribute('content-id');
//     const content = document.getElementById(contentId);

//     content.classList.add('show');
// }

// const currentActiveTab = document.querySelector('.tab-btn.active');
// tabClicked(currentActiveTab);

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

/*Inicio validação Cadastro Cliente*/
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
let msg_sucesso = document.getElementById('msg_sucesso');

let dados = [];

form_cliente.addEventListener('submit',(e)=>
{
  
  //Verifica se email é válido
  var email_check_cliente = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  //email
  if(!email_cliente.value.match(email_check_cliente)){
    e.preventDefault();
    email_error_cliente.innerText = "Email é obrigatório";
  }

  //endereço
  if(endereco_cliente.value === '' || endereco_cliente.value == null){
      e.preventDefault();
      endereco_error_cliente.innerHTML = "Endereço é obrigatório";
   }

  //cnpj
  if(cnpj_cliente.value == '' || cnpj_cliente.value == null){
    e.preventDefault();
    cnpj_error_cliente.innerHTML = "CNPJ é obrigatório";
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

  if(email_cliente.value != '' || email_cliente.value != null){
    dados_rt.push(email_cliente.value)
  }

  dados.push(email_cliente.value)
  dados.push(endereco_cliente.value)
  dados.push(cnpj_cliente.value)
  dados.push(password_cliente.value)
  dados.push(password_cliente_conf.value)

  var filtered = dados.filter(function (el) {
    return el == null;
  }); 
  
  if(filtered > 0){    
    msg_sucesso.classList.add('msg_sucesso')
    msg_sucesso.innerText = 'Cadastro realizado com sucesso'
    form_cliente.reset();
  }
});
/*Fim validação Cadastro Cliente*/

/*Inicio validação Cadastro Responsável Técnico(RT)*/
//campos
let form_rt = document.getElementById('formRt');
let nome_rt = document.getElementById('nome_rt');
let sobrenome_rt = document.getElementById('sobrenome_rt');
let email_rt = document.getElementById('email_rt');
let crea_rt = document.getElementById('crea_rt');
let password_rt = document.getElementById('senha_rt');
let password_rt_conf = document.getElementById('senha_rt_conf');

//msg_error
let nome_error_rt = document.getElementById('nome-error');
let sobrenome_error_rt = document.getElementById('sobrenome-error');
let email_error_rt = document.getElementById('email-error-rt');
let crea_error_rt = document.getElementById('crea-error');
let pass_error_rt = document.getElementById('pass-error-rt');
let pass_error_conf_rt = document.getElementById('pass-error-conf-rt');

//msg_sucesso
let msg_sucesso_rt = document.getElementById('msg_sucesso_rt');

let dados_rt = [];

form_rt.addEventListener('submit',(e)=>
{
  e.preventDefault();
  //Verifica se email é válido
  var email_check_rt = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  //nome
  if(nome_rt.value === '' || nome_rt.value == null){
    e.preventDefault();
    nome_error_rt.innerHTML = "Nome é obrigatório";
  }else{
    nome_error_rt.innerHTML = ""
  }

  //sobrenome
  if(sobrenome_rt.value === '' || sobrenome_rt.value == null){
    e.preventDefault();
    sobrenome_error_rt.innerHTML = "Sobrenome é obrigatório";
  }else{
    sobrenome_error_rt.innerHTML = ""
  }

  //email
  if(!email_rt.value.match(email_check_rt)){
    e.preventDefault();
    email_error_rt.innerText = "Email é obrigatório";
  }else{
    email_error_rt.innerText = "";
  }

  //crea
  if(crea_rt === '' || crea_rt.value == null){
    e.preventDefault();
    crea_error_rt.innerText = "CREA é obrigatório";
  }else{
    crea_error_rt.innerText = ""
  }

  //digitar senha
  if(password_rt.value.length <= 5){
    e.preventDefault();
    pass_error_rt.innerHTML = "Senha deve ser maior que 6 caracteres";
  }

  //Confirmar senha
  if(password_rt === password_rt_conf && password_rt_conf.value === '' && password_rt_conf.value == null){
    e.preventDefault();
    pass_error_conf_rt.innerHTML = 'Senha divergente'
  }

  if(nome_rt.value != '' || nome_rt.value != null){
    dados_rt.push(nome_rt.value)
  }

  e.preventDefault()    

  dados_rt.push(sobrenome_rt.value)
  dados_rt.push(email_rt.value)
  dados_rt.push(crea_rt.value)
  dados_rt.push(password_rt.value)
  dados_rt.push(password_rt_conf.value)
  console.log(dados_rt)  

  let newArry = dados_rt.filter((a) => a && a==null);
  console.log(newArry)

  let otherArray = dados_rt.filter((a) => a)
  console.log(otherArray)  

  if(otherArray.length > 0){    
    msg_sucesso_rt.classList.add('msg_sucesso')
    msg_sucesso_rt.innerText = 'Cadastro realizado com sucesso'
    form_rt.reset();
    dados_rt=[]
    setTimeout(function() {
      msg_sucesso_rt.style.display = "none";
    }, 2000);
  }
});
/*Fim validação Cadastro Responsável Técnico(RT)*/