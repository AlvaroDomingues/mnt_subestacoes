//Inicio lógica para passar as tabs(abas) tela de cadastro
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
//Fim lógica para passar as tabs(abas) tela de cadastro


/*Validação campos*/

/*Inicio validação Cadastro Cliente*/
//campos
let form_cliente = document.getElementById('formCliente');
let email_cliente = document.getElementById('email_cliente');
let endereco_cliente = document.getElementById('end_cliente');
let cnpj_cliente = document.getElementById('cnpj_cliente');
let password_cliente = document.getElementById('senha_cliente');
let password_cliente_conf = document.getElementById('senha_cliente_conf');
let termo_cliente = document.getElementById('termo_cliente');

//msg_error
let email_error_cliente = document.getElementById('email-error');
let endereco_error_cliente = document.getElementById('end-error');
let cnpj_error_cliente = document.getElementById('cnpj-error');
let pass_error_cliente = document.getElementById('pass-error');
let pass_error_conf_cliente = document.getElementById('pass-error-conf');
let termo_error = document.getElementById('termo-error-cliente')

//msg_sucesso
let msg_sucesso = document.getElementById('msg_sucesso');

let dados = [];

form_cliente.addEventListener('submit',(e)=>
{
  e.preventDefault();
  //Verifica se email é válido
  var email_check_cliente = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  //email
  if(!email_cliente.value.match(email_check_cliente)){
    e.preventDefault();
    email_error_cliente.innerText = "Email é obrigatório";
  }else{
    e.preventDefault();
    email_error_cliente.innerText = "";
  }

  //endereço
  if(endereco_cliente.value === '' || endereco_cliente.value == null){
      e.preventDefault();
      endereco_error_cliente.innerHTML = "Endereço é obrigatório";
   }else{
    endereco_error_cliente.innerHTML = "";
   }

  //cnpj
  if(cnpj_cliente.value == '' || cnpj_cliente.value == null){
    e.preventDefault();
    cnpj_error_cliente.innerHTML = "CNPJ é obrigatório";
  }else if(isNaN(cnpj_cliente.value)){
    e.preventDefault();
    cnpj_error_cliente.innerHTML = "Digite valor númerico para CNPJ";
  }else if(cnpj_cliente.value.length < 14){
    e.preventDefault();
    cnpj_error_cliente.innerHTML = "CNPJ Inválido";
  }else if(cnpj_cliente.value.length > 14){
    e.preventDefault();
    cnpj_error_cliente.innerHTML = "CNPJ Inválido";
  }else{
    e.preventDefault();
    cnpj_error_cliente.innerHTML = "";
  }

  //digitar senha
  if(password_cliente.value.length <= 5){
    e.preventDefault();
    pass_error_cliente.innerHTML = "Senha deve ser maior que 6 caracteres";
  }else{
    e.preventDefault();
    pass_error_cliente.innerHTML = "";
  }

  //Confirmar senha
  if(password_cliente === password_cliente_conf && pass_error_conf_cliente.value === '' && pass_error_conf_cliente.value == null){
    e.preventDefault();
    pass_error_conf_cliente.innerHTML = 'Senha divergente'
  }else{
    e.preventDefault();
    pass_error_conf_cliente.innerHTML = ''
  }

  //Termo
  if(!termo_cliente.checked){
    e.preventDefault();
    termo_error.innerHTML = 'Campo obrigatório'
  }else{
    e.preventDefault();
    termo_error.innerHTML = ''
  }

  dados.push(email_cliente.value)
  dados.push(endereco_cliente.value)
  dados.push(cnpj_cliente.value)
  dados.push(password_cliente.value)
  dados.push(password_cliente_conf.value)

  let newArryDados = dados.filter((a) => a && a==null);
  let otherArrayDados = dados.filter((a) => a)

  console.log(otherArrayDados)
  
  if(otherArrayDados.length == 5){    
    msg_sucesso.classList.add('msg_sucesso')
    msg_sucesso.innerText = 'Cadastro realizado com sucesso'
    form_cliente.reset();
    setTimeout(function() {
      msg_sucesso.style.display = "none";
    }, 2000);
  }
  dados=[]
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
let termo_rt = document.getElementById('termo_rt');

//msg_error
let nome_error_rt = document.getElementById('nome-error');
let sobrenome_error_rt = document.getElementById('sobrenome-error');
let email_error_rt = document.getElementById('email-error-rt');
let crea_error_rt = document.getElementById('crea-error');
let pass_error_rt = document.getElementById('pass-error-rt');
let pass_error_conf_rt = document.getElementById('pass-error-conf-rt');
let termo_error_rt = document.getElementById('termo-error-rt')

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
  }else if(!isNaN(nome_rt.value)){
    e.preventDefault();
    nome_error_rt.innerHTML = "Digite letras";
  }else{
    e.preventDefault();
    nome_error_rt.innerHTML = "";
  }

  //sobrenome
  if(sobrenome_rt.value === '' || sobrenome_rt.value == null){
    e.preventDefault();
    sobrenome_error_rt.innerHTML = "Sobrenome é obrigatório";
  }else if(!isNaN(sobrenome_rt.value)){
    e.preventDefault();
    sobrenome_error_rt.innerHTML = "Digite letras";
  }else{
    e.preventDefault();
    sobrenome_error_rt.innerHTML = "";
  }

  //email
  if(!email_rt.value.match(email_check_rt)){
    e.preventDefault();
    email_error_rt.innerText = "Email é obrigatório";
  }else{
    email_error_rt.innerText = "";
  }

  //crea
  if(crea_rt.value === '' || crea_rt.value == null){
    e.preventDefault();
    crea_error_rt.innerText = "CREA é obrigatório";
  }else if(crea_rt.value.length < 10){
    e.preventDefault();
    crea_error_rt.innerText = "CREA inválido";
  }else{
    e.preventDefault();
    crea_error_rt.innerText = "";
  }

  //digitar senha
  if(password_rt.value.length <= 5){
    e.preventDefault();
    pass_error_rt.innerHTML = "Senha deve ser maior que 6 caracteres";
  }else{
    e.preventDefault();
    pass_error_rt.innerHTML = "";
  }

  //Confirmar senha
  if(password_rt === password_rt_conf && password_rt_conf.value === '' && password_rt_conf.value == null){
    e.preventDefault();
    pass_error_conf_rt.innerHTML = 'Senha divergente'
  }else{
    e.preventDefault();
    pass_error_conf_rt.innerHTML = ''
  }

  //Termo
  if(!termo_rt.checked){
    e.preventDefault();
    termo_error_rt.innerHTML = 'Campo obrigatório'
  }else{
    e.preventDefault();
    termo_error_rt.innerHTML = ''
  }

  e.preventDefault()    

  dados_rt.push(sobrenome_rt.value)
  dados_rt.push(email_rt.value)
  dados_rt.push(crea_rt.value)
  dados_rt.push(password_rt.value)
  dados_rt.push(password_rt_conf.value)

  let newArry = dados_rt.filter((a) => a && a==null);
  let otherArray = dados_rt.filter((a) => a)

  if(otherArray.length == 6){    
    msg_sucesso_rt.classList.add('msg_sucesso')
    msg_sucesso_rt.innerText = 'Cadastro realizado com sucesso'
    form_rt.reset();
    setTimeout(function() {
      msg_sucesso_rt.style.display = "none";
    }, 2000);
  }
    dados_rt=[]
});
/*Fim validação Cadastro Responsável Técnico(RT)*/


/*Inicio validação Cadastro Executante*/
//campos
let form_exe = document.getElementById('formExecutante');
let nome_exe = document.getElementById('nome_exe');
let sobrenome_exe = document.getElementById('sobrenome_exe');
let email_exe = document.getElementById('email_exe');
let crea_exe = document.getElementById('crea_exe');
let password_exe = document.getElementById('pass_exe');
let password_conf_exe = document.getElementById('pass_conf_exe');
let termo_exe = document.getElementById('termo_exe');

//msg_error
let nome_error_exe = document.getElementById('nome-exe-error');
let sobrenome_error_exe = document.getElementById('sobrenome-exe-error');
let email_error_exe = document.getElementById('email-exe-error');
let crea_error_exe = document.getElementById('crea-exe-error');
let pass_error_exe = document.getElementById('pass-exe-error');
let pass_error_conf_exe = document.getElementById('pass-conf-exe-error');
let termo_error_exe = document.getElementById('termo-error-exe')

//msg_sucesso
let msg_sucesso_exe = document.getElementById('msg_sucesso_rt');

let dados_exe = [];

form_exe.addEventListener('submit',(e)=>
{
  e.preventDefault();
  //Verifica se email é válido
  var email_check_exe = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  //nome
  if(nome_exe.value === '' || nome_exe.value == null){
    e.preventDefault();
    nome_error_exe.innerHTML = "Nome é obrigatório";
  }else if(!isNaN(nome_exe.value)){
    e.preventDefault();
    nome_error_exe.innerHTML = "Digite Letras";
  }else{
    e.preventDefault();
    nome_error_exe.innerHTML = "";
  }

  //sobrenome
  if(sobrenome_exe.value === '' || sobrenome_exe.value == null){
    e.preventDefault();
    sobrenome_error_exe.innerHTML = "Sobrenome é obrigatório";
  }else if(!isNaN(sobrenome_exe.value)){
    e.preventDefault();
    sobrenome_error_exe.innerHTML = "Digite Letras";
  }else{
    e.preventDefault();
    sobrenome_error_exe.innerHTML = "";
  }

  //email
  if(!email_exe.value.match(email_check_exe)){
    e.preventDefault();
    email_error_exe.innerText = "Email é obrigatório";
  }else{
    email_error_exe.innerText = "";
  }

  //crea
  if(crea_exe.value === '' || crea_exe.value == null){
    e.preventDefault();
    crea_error_exe.innerText = "CREA é obrigatório";
  }else if(crea_exe.value < 10){
    e.preventDefault();
    crea_error_exe.innerText = "CREA inválido";
  }else{
    e.preventDefault();
    crea_error_exe.innerText = "";
  }

  //digitar senha
  if(password_exe.value.length <= 5){
    e.preventDefault();
    pass_error_exe.innerHTML = "Senha deve ser maior que 6 caracteres";
  }else{
    e.preventDefault();
    pass_error_exe.innerHTML = "";
  }

  //Confirmar senha
  if(password_exe.value === password_conf_exe.value && password_conf_exe.value === '' && password_conf_exe.value == null){
    e.preventDefault();
    pass_error_conf_exe.innerHTML = 'Senha divergente'
  }else{
    e.preventDefault();
    pass_error_conf_exe.innerHTML = ''
  }

  if(!termo_exe.checked){
    e.preventDefault();
    termo_error.innerText = 'Campo obrigatório'
  }else{
    e.preventDefault();
    termo_error.innerText = ''
  }

  e.preventDefault()    

  dados_exe.push(sobrenome_exe.value)
  dados_exe.push(email_exe.value)
  dados_exe.push(crea_exe.value)
  dados_exe.push(password_exe.value)
  dados_exe.push(password_conf_exe.value)

  let newArryExe = dados_exe.filter((a) => a && a==null);
  let otherArrayExe = dados_exe.filter((a) => a)

  if(otherArrayExe.length == 6){    
    msg_sucesso_exe.classList.add('msg_sucesso')
    msg_sucesso_exe.innerText = 'Cadastro realizado com sucesso'
    form_exe.reset();
    setTimeout(function() {
      msg_sucesso_exe.style.display = "none";
    }, 2000);
  }
  dados_exe=[]
});
/*Fim validação Cadastro Executante*/

/*Inicio validação Cadastro Ordem de Serviço*/
//campos
let form_os = document.getElementById('formOs');
let num_os = document.getElementById('num_os');
let empresa_os = document.getElementById('empresa');
let substacoes_os = document.getElementById('substacoes');
let termo_os = document.getElementById('termo_os')

//msg_error
let num_error_os = document.getElementById('num-error-os');
let empresa_error_os = document.getElementById('empresa-error-os');
let substacoes_error_os = document.getElementById('substacoes-error-os');
let termo_error_os = document.getElementById('termo-error-os')

//msg_sucesso
let msg_sucesso_os = document.getElementById('msg_sucesso_os');

let dados_os = [];

form_os.addEventListener('submit',(e)=>
{
  e.preventDefault();
  
  //nome
  if(num_os.value === '' || num_os.value == null){
    e.preventDefault();
    num_error_os.innerHTML = "Número é obrigatório";
  }else if(isNaN(num_os.value)){
    e.preventDefault();
    num_error_os.innerHTML = "Digite valor númerico para número OS";
  }else if(num_os.value.length < 6){
    e.preventDefault();
    num_error_os.innerHTML = "Número OS inválido";
  }else{
    e.preventDefault();
    num_error_os.innerHTML = "";
  }

  //empresa
  if(empresa_os.value == '' || empresa_os.value === null){
    e.preventDefault();
    empresa_error_os.innerText = "Empresa é obrigatório";
  }else{
    empresa_error_os.innerText = ""
  }

  //substacoes
  if(substacoes_os.value === '' || substacoes_os.value == null){
    e.preventDefault();
    substacoes_error_os.innerText = "Substação é obrigatório";
  }else{
    substacoes_error_os.innerText = ""
  }

  if(!termo_os.checked){
    e.preventDefault();
    termo_error_os.innerText = 'Campo obrigatório'
  }else{
    e.preventDefault();
    termo_error_os.innerText = ''
  }

  e.preventDefault()    

  dados_os.push(num_os.value)
  dados_os.push(empresa_os.value)
  dados_os.push(substacoes_os.value)
  

  let newArryOs = dados_os.filter((a) => a && a==null);
  let otherArrayOs = dados_os.filter((a) => a)

  if(otherArrayOs.length == 3){    
    msg_sucesso_os.classList.add('msg_sucesso')
    msg_sucesso_os.innerText = 'Cadastro realizado com sucesso'
    form_os.reset();
    setTimeout(function() {
      msg_sucesso_os.style.display = "none";
    }, 2000);
  }
  dados_os = []
});
/*Fim validação Cadastro Ordem de Serviço*/

/*Inicio validação Cadastro Equipamento de Teste*/
//campos
let form_eq = document.getElementById('formEquipamento');
let patrimonio = document.getElementById('nome_equip');
let marca = document.getElementById('marca');
let modelo = document.getElementById('modelo');
let termo_eq = document.getElementById('termo_eq')

//msg_error
let patrimonio_error_eq = document.getElementById('nome-error-eq');
let marca_error_eq = document.getElementById('marca-error-eq');
let modelo_error_eq = document.getElementById('modelo-error-eq');
let termo_error_eq = document.getElementById('termo-error-eq')

//msg_sucesso
let msg_sucesso_eq = document.getElementById('msg_sucesso_eq');

let dados_eq = [];

form_eq.addEventListener('submit',(e)=>
{
  e.preventDefault();
  
  //nome
  if(patrimonio.value === '' || patrimonio.value == null){
    e.preventDefault();
    patrimonio_error_eq.innerHTML = "Patrimônio é obrigatório";
  }else{
    patrimonio_error_eq.innerHTML = ""
  }

  //empresa
  if(marca.value == '' || marca.value === null){
    e.preventDefault();
    marca_error_eq.innerText = "Marca é obrigatório";
  }else{
    marca_error_eq.innerText = ""
  }

  //substacoes
  if(modelo.value === '' || modelo.value == null){
    e.preventDefault();
    modelo_error_eq.innerText = "Modelo é obrigatório";
  }else{
    modelo_error_eq.innerText = ""
  }

  if(!termo_eq.checked){
    e.preventDefault();
    termo_error_eq.innerText = 'Campo obrigatório'
  }else{
    e.preventDefault();
    termo_error_eq.innerText = ''
  }

  e.preventDefault()    

  dados_eq.push(patrimonio.value)
  dados_eq.push(marca.value)
  dados_eq.push(modelo.value)
  

  let newArryOs = dados_eq.filter((a) => a && a==null);
  let otherArrayEq = dados_eq.filter((a) => a)

  if(otherArrayEq.length == 3){    
    msg_sucesso_eq.classList.add('msg_sucesso')
    msg_sucesso_eq.innerText = 'Cadastro realizado com sucesso'
    form_eq.reset();
    setTimeout(function() {
      msg_sucesso_eq.style.display = "none";
    }, 2000);
  }
  dados_eq = []
});
/*Fim validação Cadastro Equipamento de Teste*/