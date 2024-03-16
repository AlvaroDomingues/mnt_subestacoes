const empresa = document.getElementById('nome_empresa');

const responsavel = document.getElementById('nome_responsavel');

const relatorio = document.getElementById('titulo');

const local = document.getElementById('local');

const dataExecucao = document.getElementById('data_execucao');

const dataEnvio = document.getElementById('data_envio');

const crea = document.getElementById('numero_crea');

const cargo = document.getElementById('cargo');

const art = document.getElementById('art');

const descricao = document.getElementById('descricao');

const descricaoConclusao = document.getElementById('descricao_conclusao');

const button = document.getElementById('botao');

///Função que 
button.addEventListener('click',(e)=>{
  e.preventDefault()
  let parameters = ''
  parameters = parameters + '?empresa=' + empresa.value
  parameters = parameters + '?responsavel=' + responsavel.value
  parameters = parameters + '?relatorio=' + relatorio.value
  parameters = parameters + '?local=' + local.value
  parameters = parameters + '?dataExecucao=' + dataExecucao.value
  parameters = parameters + '?dataEnvio=' + dataEnvio.value
  parameters = parameters + '?crea=' + crea.value
  parameters = parameters + '?cargo=' + cargo.value
  parameters = parameters + '?art=' + art.value
  parameters = parameters + '?descricao=' + descricao.value
  parameters = parameters + '?descricaoConclusao=' + descricaoConclusao.value

  window.location = "/Relatorios/relatorio-visao-contratante-leitura.html" + parameters
  

})
  


