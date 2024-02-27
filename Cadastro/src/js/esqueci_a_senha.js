/*Inicio validacação esqueci minha senha*/
//ems - esqueci minha senha
//campos
let form_ems = document.getElementById('formEms');
let email_ems = document.getElementById('email_ems');

//msg_error
let ems_error = document.getElementById('ems-error');


//msg_sucesso
//ems - esqueci minha senha
let msg_sucesso_ems = document.getElementById('msg_sucesso_ems');

let dados_ems = [];

form_ems.addEventListener('submit',(e)=>
{
  e.preventDefault();
  
  //Verifica se email é válido
  var email_check_ems = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  //email
  if(!email_ems.value.match(email_check_ems)){
    e.preventDefault();
    ems_error.innerText = "Email é obrigatório";
  }else if(email_ems.value === '' || email_ems.value == null){
    e.preventDefault();
    ems_error.innerText = "Email é obrigatório";
  }else{
    e.preventDefault();
    ems_error.innerText = "";
  }

  e.preventDefault()    

  dados_ems.push(email_ems.value)
  console.log(dados_ems)

  dados_ems.filter((a) => a && a==null);
  let otherArrayEq = dados_ems.filter((a) => a)
  console.log(otherArrayEq)

  if(otherArrayEq.length != 0){    
    msg_sucesso_ems.classList.add('msg_sucesso')
    msg_sucesso_ems.innerText = 'Cadastro realizado com sucesso'
    form_ems.reset();    
    setTimeout(function() {
        msg_sucesso_ems.style.display = "none";
    }, 2000);    
  }
//   dados_ems = []
});
/*Fim validacação esqueci minha senha*/