// Dados de teste: números de OS válidos e suas empresas correspondentes
const osValidas = {
    "123456": "empresa1", // Número de OS 123456 associado à empresa1
    "789012": "empresa2"  // Número de OS 789012 associado à empresa2
};

// Dados de teste: informações sobre empresas e suas subestações
const empresas = {
    "empresa1": {
        nome: "Empresa 1",
        subestacoes: ["Subestação A", "Subestação B"]
    },
    "empresa2": {
        nome: "Empresa 2",
        subestacoes: ["Subestação X", "Subestação Y"]
    }
};

// Variável para controlar o índice da subestação atual
let indiceSubestacaoAtual = 0;

// Dados de teste: Nome do executante logado 
const executanteLogado = "Roger Abreu";

// Dados de teste: Equipamento utilizado/marca modelo
const equipamentosTeste = {
    "000001": "Microhmimetro Digital - MICROHM 100",
    "000002": "Megometro Digital - DMG 10 Ki"
};


// Função auxiliar para exibir alertas na tela
function showAlert(message) {
    console.log("showAlert foi chamada.")
    alert(message);
}

// Função para selecionar o equipamento
function selecionarEquipamento() {
    console.log("Selecionar equipamento foi chamada.")
    // Adiciona as opções de equipamentos 
    const equipamentosSelect = document.getElementById('equipamentos-select-modal');
    equipamentosSelect.innerHTML = ''; // Limpa o conteúdo anterior

    // Adiciona uma opção vazia
    const optionVazia = document.createElement('option');
    optionVazia.value = '';
    optionVazia.textContent = '';
    equipamentosSelect.appendChild(optionVazia); 

    const equipamentos = ["Chave Seccionadora", "Disjuntor", "Transformador"]; 
    equipamentos.forEach(equipamento => {
        const option = document.createElement('option');
        option.textContent = equipamento;
        equipamentosSelect.appendChild(option);
    });

    // Exibe o modal de seleção de equipamento
    document.getElementById('modal-equipamento').style.display = "block";

    // Event listener para o botão "Selecionar" do modal de seleção de equipamento
    document.getElementById('selecionar_equipamento').addEventListener('click', function() {
        // Obtém o equipamento selecionado
        const equipamentoSelecionado = document.getElementById('equipamentos-select-modal').value;

        // Verifica se um equipamento foi selecionado
        if (equipamentoSelecionado) {
            // Redireciona o usuário para a página correspondente ao equipamento selecionado
            if (equipamentoSelecionado === "Chave Seccionadora") {
                window.location.href = '../Equipamentos/chave-seccionadora.html';
            } else if (equipamentoSelecionado === "Disjuntor") {
                window.location.href = '';
            } else if (equipamentoSelecionado === "Transformador") {
                window.location.href = '';
            }
        } else {
            // Se nenhum equipamento for selecionado, exibe uma mensagem de erro
            const mensagemErro = document.getElementById('erro-selecao-equipamento');
            mensagemErro.textContent = "Por favor, selecione um equipamento.";
            mensagemErro.style.display = "block";
        }
    });
}

// Função para exibir mensagem de erro
function exibirErro(idElemento, mensagem) {
    console.log("Exibir erro foi chamada.");
    const elementoErro = document.getElementById(idElemento);
    elementoErro.textContent = mensagem;
    elementoErro.style.display = "block";
}

// Função para ocultar mensagem de erro
function ocultarErro(idElemento) {
    console.log("Ocultar erro foi chamada.")
    document.getElementById(idElemento).style.display = "none";
}

// // Função para verificar se há mais subestações pendentes
// function verificarSubestacoesPendentes() {
//     // Verifica se ainda há subestações pendentes para manutenção
//     if (indiceSubestacaoAtual < subestacoesPendentes.length) {
//         // Exibe o modal de continuação da manutenção
//         document.getElementById('modal-continuar-manutencao').style.display = 'block';
//     } else {
//         // Exibe mensagem informando que todas as manutenções foram concluídas
//         showAlert("Todas as manutenções foram concluídas.");
//     }
// }

// Variável global para armazenar a subestação selecionada

// Preenchimento dos dados da OS com validação
document.addEventListener('DOMContentLoaded', function() {
    console.log("O evento DOMContentLoaded Tela manutenção foi acionado."); // Adicionando log para verificar se o evento é acionado corretamente
    const numeroOSInput = document.getElementById('numero_os');
    const subestacoesSelect = document.getElementById('subestacoes-select');
    const iniciarManutencaoBtn = document.getElementById('iniciar_manutencao');
    const cancelarBtn = document.getElementById('cancela-inicio-manutencao');

   
        // Event listener para o botão "Cancelar"
    cancelarBtn.addEventListener('click', function() {            
        window.location.reload();
    });

    // Event listener para a mudança no campo de OS
    numeroOSInput.addEventListener('change', function() {
        console.log("Numero de OS inserido.");
        const numeroOS = this.value.trim(); // Obtém o número de OS inserido pelo usuário
        if (!numeroOS) {
            // Exibe mensagem solicitando que o usuário insira um número de OS
            exibirErro('erro-os', "Digite o número da ordem de serviço.");
            return;
        }

        // Verifica se o número de OS inserido está presente nos dados de OS válidas
        if (numeroOS in osValidas) {
            console.log("Validando numero da OS."); 

            // Bloqueia o campo de OS após uma OS válida ser inserida
            this.disabled = true;

            const idEmpresa = osValidas[numeroOS]; // Obtém o ID da empresa associada à OS

            // Verifica se o ID da empresa está presente nos dados das empresas
            if (idEmpresa in empresas) {
                const empresa = empresas[idEmpresa]; // Obtém os dados da empresa

                // Preenche o campo de empresa com o nome da empresa associada à OS
                document.getElementById('empresa').value = empresa.nome;

                // Preenche o campo de executante com o nome do executante logado
                document.getElementById('executante').value = executanteLogado;

                // Preenche a data de execução com a data atual
                const dataAtual = new Date().toISOString().split('T')[0];
                document.getElementById('data_execucao').value = dataAtual;

                // Preenche as opções de subestações com base nos dados das subestações da empresa
                subestacoesSelect.innerHTML = ''; // Limpa o conteúdo anterior

                // Adiciona uma opção vazia
                const optionVazia = document.createElement('option');
                optionVazia.value = '';
                optionVazia.textContent = '';
                subestacoesSelect.appendChild(optionVazia);

                empresa.subestacoes.forEach(subestacao => {
                    const option = document.createElement('option');
                    option.value = subestacao;
                    option.textContent = subestacao;
                    subestacoesSelect.appendChild(option);
                });

                // Habilita o campo de seleção de subestação
                subestacoesSelect.disabled = false;

                // Habilita o botão "Iniciar Manutenção"
                iniciarManutencaoBtn.disabled = false;

                // Oculta a mensagem de erro, se estiver sendo exibida
                ocultarErro('erro-os');
            } else {
                // Exibe mensagem de erro
                exibirErro('erro-os', "Empresa não encontrada para este número de OS.");
            }
        } else {
            // Exibe mensagem de erro
            exibirErro('erro-os', "Número da OS inválido.");
        }
    });
    
    // Event listener para a mudança no campo de seleção de subestação
    subestacoesSelect.addEventListener('change', function() {
        // Verifica se uma subestação foi selecionada
        if (this.value.trim() !== '') {
            // Oculta a mensagem de erro, se estiver sendo exibida
            ocultarErro('erro-subestacao');
        }
    });

    // Event listener para o botão "Iniciar Manutenção"
    iniciarManutencaoBtn.addEventListener('click', function() {
        // Verifica se uma subestação foi selecionada
        const subestacaoSelecionada = subestacoesSelect.value;
        if (!subestacaoSelecionada) {
            exibirErro('erro-subestacao', "Por favor, selecione uma subestação antes de iniciar a manutenção.");
            return;
        }

        // Exibe o modal de confirmação de realização de manutenção
        document.getElementById('modal-realizar-manutencao').style.display = "block";
    });

    // Event listener para o botão "Sim" do modal de confirmação
    document.getElementById('btn-sim-realizar-manutencao').addEventListener('click', function() {
        // Fecha o modal de confirmação
        document.getElementById('modal-realizar-manutencao').style.display = "none";

        // Verifica se uma subestação foi selecionada
        const subestacaoSelecionada = subestacoesSelect.value;
        if (!subestacaoSelecionada) {
            exibirErro('erro-subestacao', "Por favor, selecione uma subestação antes de iniciar a manutenção.");
            return;
        }

        // Chama a função para selecionar o equipamento
        selecionarEquipamento();
    });

    // Event listener para o botão "Não" do modal de confirmação
    document.getElementById('btn-nao-realizar-manutencao').addEventListener('click', function() {
        // Fecha o modal de confirmação
        document.getElementById('modal-realizar-manutencao').style.display = "none";
        // Limpa a seleção do seletor subestação
        subestacoesSelect.value = '';
    });

    // Event listener para fechar o modal se o usuário clicar no botão de fechar (X)
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        const modal = modals[i];
        const closeBtn = modal.getElementsByClassName('close')[0];
        closeBtn.addEventListener('click', function() {
            modal.style.display = "none";
            // Limpa a seleção do seletor da subestação
            document.getElementById('subestacoes-select').value = '';
        });
    }
});


