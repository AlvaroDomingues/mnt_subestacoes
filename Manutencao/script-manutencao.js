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
const executanteLogado = "Executante Logado";

// Dados de teste: Equipamento utilizado/marca modelo
const equipamentos = {
    "000001": "000001 - Microhmimetro Digital - MICROHM 100",
    "000002": "000002 - Megometro Digital - DMG 10 Ki",  
};

// Função auxiliar para exibir alertas na tela
function showAlert(message) {
    alert(message);
}

// Função para selecionar o equipamento
function selecionarEquipamento() {
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
        // Fecha o modal de seleção de equipamento
        document.getElementById('modal-equipamento').style.display = "none";

        // Obtém o equipamento selecionado
        const equipamentoSelecionado = document.getElementById('equipamentos-select-modal').value;

        // Redireciona o usuário para a página correspondente ao equipamento selecionado
        if (equipamentoSelecionado === "Chave Seccionadora") {
            window.location.href = '../Equipamentos/chave-seccionadora.html';
        } else if (equipamentoSelecionado === "Disjuntor") {
            window.location.href = 'pagina_disjuntor.html';
        } else if (equipamentoSelecionado === "Transformador") {
            window.location.href = 'pagina_transformador.html';
        } else {
            // Se nenhum equipamento for selecionado, exibe um alerta
            showAlert("Por favor, selecione um equipamento.");
        }
    });
}

// Função para verificar se há mais subestações pendentes
function verificarSubestacoesPendentes() {
    // Verifica se ainda há subestações pendentes para manutenção
    if (indiceSubestacaoAtual < subestacoesPendentes.length) {
        // Exibe o modal de continuação da manutenção
        document.getElementById('modal-continuar-manutencao').style.display = 'block';
    } else {
        // Exibe mensagem informando que todas as manutenções foram concluídas
        showAlert("Todas as manutenções foram concluídas.");
    }
}

// Variável global para armazenar a subestação selecionada
let subestacaoSelecionada = "";

//Preenchimento dos dados de acordo com a OS até a seleção do equipamento
document.addEventListener('DOMContentLoaded', function() {
    // Função para preencher os dados da OS com base no número da OS inserido
    document.getElementById('numero_os').addEventListener('change', function() {
        const numeroOS = this.value; // Obtém o número de OS inserido pelo usuário

        // Verifica se o número de OS inserido está presente nos dados de OS válidas
        if (numeroOS in osValidas) {
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

                // Habilita os campos de empresa, executante e data de execução
                document.getElementById('empresa').disabled = false;
                document.getElementById('executante').disabled = false;
                document.getElementById('data_execucao').disabled = false;

                // Preenche as opções de subestações com base nos dados das subestações da empresa
                const subestacoes = empresa.subestacoes;
                const subestacoesSelect = document.getElementById('subestacoes-select');
                subestacoesSelect.innerHTML = ''; // Limpa o conteúdo anterior

                // Adiciona uma opção vazia
                const optionVazia = document.createElement('option');
                optionVazia.value = '';
                optionVazia.textContent = '';
                subestacoesSelect.appendChild(optionVazia);

                subestacoes.forEach(subestacao => {
                    const option = document.createElement('option');
                    option.value = subestacao;
                    option.textContent = subestacao;
                    subestacoesSelect.appendChild(option);
                });

                // Habilita o campo de seleção de subestação
                subestacoesSelect.disabled = false;

                // Event listener para o campo de seleção de subestação
                document.getElementById('subestacoes-select').addEventListener('change', function() {
                // Atualiza a variável subestacaoSelecionada com o valor selecionado pelo usuário
                    subestacaoSelecionada = this.value;
            });

                // Habilita o botão "Iniciar Manutenção"
                document.getElementById('iniciar_manutencao').disabled = false;
            } else {
                // Se o ID da empresa não for encontrado nos dados das empresas, exibe um alerta
                showAlert("Empresa não encontrada para este número de OS.");
            }
        } else {
            // Se o número de OS não for encontrado nos dados de OS válidas, exibe um alerta
            showAlert("Número da OS inválido.");
        }
    });

    // Event listener para o botão "Iniciar Manutenção"
    document.getElementById('iniciar_manutencao').addEventListener('click', function() {
        // Verifica se uma subestação foi selecionada
        const subestacaoSelecionada = document.getElementById('subestacoes-select').value;
        if (!subestacaoSelecionada) {
            showAlert("Por favor, selecione uma subestação antes de iniciar a manutenção.");
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
        const subestacaoSelecionada = document.getElementById('subestacoes-select').value;
        if (!subestacaoSelecionada) {
            showAlert("Por favor, selecione uma subestação antes de iniciar a manutenção.");
            return;
        }
        // Chama a função para selecionar o equipamento
        selecionarEquipamento();

    });

    // Event listener para o botão "Não" do modal de confirmação
    document.getElementById('btn-nao-realizar-manutencao').addEventListener('click', function() {
        // Fecha o modal de confirmação
        document.getElementById('modal-realizar-manutencao').style.display = "none";
        //Limpa a seleção do seletor subestação
        document.getElementById('subestacoes-select').value = '';
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

// Inicializa o campo de observações no formulário principal
document.addEventListener('DOMContentLoaded', function() {    
    let observacoes = '';

    // Event listener para as seleções na tabela
    const selectsObservacao = document.querySelectorAll('select[name="status"]');
    selectsObservacao.forEach(select => {
        select.addEventListener('change', function() {
            // Verifica se a opção selecionada é "Observação"
            if (this.value === "observacao") {
                // Exibe o modal de observações
                document.getElementById('modal-observacoes').style.display = "block";
            }
        });
    });

    // Event listener para o botão "Salvar" no modal de observações
    document.getElementById('btn-salvar-observacao').addEventListener('click', function() {
        // Obtém o valor da observação inserida no modal
        const observacao = document.getElementById('observacao-textarea').value;
        // Adiciona a observação à variável de observações
        observacoes += observacao + '\n';
        // Atualiza o valor do campo de observações no formulário principal
        document.getElementById('campo-observacoes').value = observacoes;
        // Fecha o modal de observações
        document.getElementById('modal-observacoes').style.display = "none";
        // Reseta o valor do campo de observações no modal
        document.getElementById('observacao-textarea').value = '';
    });
});

// Event listener para a mudança no campo "Equipamento utilizado"
document.querySelectorAll('.codigo-equipamento').forEach(input => {
    input.addEventListener('input', function() {
        const codigoEquipamento = this.value.trim(); // Obtém o código do equipamento inserido
        const descricaoEquipamento = equipamentos[codigoEquipamento];

        if (descricaoEquipamento) {
            // Preenche o campo de código do equipamento com a descrição do equipamento
            this.value = `${descricaoEquipamento}`;
        } else {
            alert("Código de equipamento inválido.");
            // Limpa o campo de código do equipamento
            this.value = ''
        }
    });
});

// Finalizar Manutenção do Equipamento
document.addEventListener('DOMContentLoaded', function() {
    // Event listener para o botão "Finalizar Manutenção do Equipamento"
    document.querySelector('input[type="submit"]').addEventListener('click', function(event) {
        event.preventDefault(); // Impede o envio do formulário
        
        // Exibe o modal de confirmação
        document.getElementById('modal-finalizar-manutencao').style.display = 'block';
    });

    // Event listener para os cliques nos botões dentro do modal de confirmação
    document.getElementById('modal-finalizar-manutencao').addEventListener('click', function(event) {
        if (event.target.id === 'btn-sim') {
            // Fecha o modal de confirmação
            document.getElementById('modal-finalizar-manutencao').style.display = 'none';
            // Chama a função para selecionar o equipamento
            selecionarEquipamento();

        } else if (event.target.id === 'btn-nao') {
            // Fecha o modal de confirmação
            document.getElementById('modal-finalizar-manutencao').style.display = 'none';

            verificarSubestacoesPendentes();
        }
    });
});
