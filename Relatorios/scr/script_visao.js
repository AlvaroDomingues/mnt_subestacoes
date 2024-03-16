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


window.onload = ()=>{
  const parameters = window.location.href.split("?")

  empresa.value = parameters[1].split("=")[1]
  responsavel.value = parameters[2].split("=")[1]
  relatorio.value = parameters[3].split("=")[1]
  local.value = parameters[4].split("=")[1]
  dataEnvio.value = parameters[5].split("=")[1]
  dataExecucao.value = parameters[6].split("=")[1]
  crea.value = parameters[7].split("=")[1]
  cargo.value = parameters[8].split("=")[1]
  art.value = parameters[9].split("=")[1]
  descricao.value = parameters[10].split("=")[1]
  descricaoConclusao.value = parameters[11].split("=")[1]
}