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
const equipamentosTeste = {
    "001": "Microhmimetro Digital - MICROHM 100",
    "002": "Megometro Digital - DMG 10 Ki",
    "003": "Miliamperimetro Digital - Fluke 35"
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
    document.getElementById(idElemento).style.display = "none";
}

// Chave seccionadora
document.addEventListener('DOMContentLoaded', function() {       
    let observacoes = '';
    const defaultValues = {}; 

    // Event listener para as seleções na tabela
    const selectsObservacao = document.querySelectorAll('select[name="status"]');
    selectsObservacao.forEach(select => {        
        // Armazena o valor padrão de cada select
        defaultValues[select.dataset.row] = select.value;
        select.addEventListener('change', function() {
            // Verifica se o valor anterior era "Observação" e o valor atual não é
            const rowNumber = this.dataset.row;
            const currentValue = this.value;
            const previousValue = this.dataset.previousValue;

            if (previousValue === "observacao" && currentValue !== "observacao") {
                // Remove a observação do campo de observações principal
                removerObservacao(rowNumber);
            }

            // Atualiza o valor anterior do dataset do select
            this.dataset.previousValue = currentValue;

            if (this.value === "observacao") {
                // Armazena o valor atual antes de abrir o modal
                this.dataset.previousValue = this.value;
                // Exibe o modal de observações
                document.getElementById('modal-observacoes').style.display = "block";
                // Define o atributo data-row do modal com o valor obtido
                document.getElementById('modal-observacoes').setAttribute('data-row', rowNumber);
            }
        });
    });

    // Event listener para o botão "Salvar" no modal de observações
    document.getElementById('btn-salvar-observacao').addEventListener('click', function() {
        // Obtém o valor da observação inserida no modal
        const observacao = document.getElementById('observacao-textarea').value;
        // Obtém o número da linha associada à observação do modal
        const rowNumber = document.getElementById('modal-observacoes').getAttribute('data-row');
        // Adiciona a observação à variável de observações com o número da linha
        observacoes += ` Item ${rowNumber}: ${observacao}\n`;
        // Atualiza o valor do campo de observações no formulário principal
        document.getElementById('campo-observacoes').value = observacoes;
        // Fecha o modal de observações
        document.getElementById('modal-observacoes').style.display = "none";
        // Reseta o valor do campo de observações no modal
        document.getElementById('observacao-textarea').value = '';
    });

    // Event listener para o botão "Cancelar" no modal de observações
    document.getElementById('btn-cancelar-observacao').addEventListener('click', function() {
        // Fecha o modal de observações
        document.getElementById('modal-observacoes').style.display = "none";
        // Reseta o valor do campo de observações no modal
        document.getElementById('observacao-textarea').value = '';
        // Obtém o número da linha associada à observação do modal
        const rowNumber = document.getElementById('modal-observacoes').getAttribute('data-row');
        // Obtém o select correspondente ao data-row
        const select = document.querySelector(`select[data-row="${rowNumber}"]`);
        // Define o valor padrão no select
        select.value = defaultValues[rowNumber];
    });

    // Evento para o caso do usuário alterar o select da tabela CHECK para ok após ter salvo uma observação
    function removerObservacao(rowNumber) {
        const regex = new RegExp(`Item ${rowNumber}:.*\\n`,'g');
        observacoes = observacoes.replace(regex,'');
        document.getElementById('campo-observacoes').value = observacoes;
    }

    // Event listener para fechar o modal se o usuário clicar no botão de fechar (X)
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        const closeBtn = modal.querySelector('.close');
        closeBtn.addEventListener('click', function() {
            modal.style.display = "none";
            // Restaura os valores padrão do select associado ao modal fechado
            const rowNumber = modal.getAttribute('data-row');
            const select = document.querySelector(`select[data-row="${rowNumber}"]`);
            select.value = defaultValues[rowNumber];
            // Reseta o valor do campo de observações no modal
            document.getElementById('observacao-textarea').value = '';
        });
    }); 

});


// Preenchimento dinâmico do campo equipamento de teste

function limparSelect(selectElement) {
    selectElement.innerHTML = '';
    const optionVazia = document.createElement('option');
    optionVazia.value = '';
    optionVazia.textContent = '';
    selectElement.appendChild(optionVazia);
}

document.addEventListener('DOMContentLoaded', function() {
    // Adicionar opção vazia e preencher o primeiro select
    const equipamentosSelect1 = document.getElementById('select-equipamento-1');
    limparSelect(equipamentosSelect1);
    for (const codigoEquipamento in equipamentosTeste) {
        const descricaoEquipamento = equipamentosTeste[codigoEquipamento];
        const option = document.createElement('option');
        option.value = codigoEquipamento;
        option.textContent = `${codigoEquipamento} - ${descricaoEquipamento}`;
        equipamentosSelect1.appendChild(option);
    }
    
    // Adicionar opção vazia e preencher o segundo select
    const equipamentosSelect2 = document.getElementById('select-equipamento-2');
    limparSelect(equipamentosSelect2);
    for (const codigoEquipamento in equipamentosTeste) {
        const descricaoEquipamento = equipamentosTeste[codigoEquipamento];
        const option = document.createElement('option');
        option.value = codigoEquipamento;
        option.textContent = `${codigoEquipamento} - ${descricaoEquipamento}`;
        equipamentosSelect2.appendChild(option);
    }
});


//Finalizar Manutenção do Equipamento

document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input[type="text"]');
    const selects = document.querySelectorAll('select');
    const botaoFinalizar = document.getElementById('finalizar-manutencao-seccionadora');
    const botaoCancelar = document.getElementById('cancela-manutencao-seccionadora');      
   
    // Event listener para o botão "Cancelar"
    botaoCancelar.addEventListener('click', function() {
        // Mostra o modal ao clicar no botão cancelar
        // document.getElementById('modal-cancelar-ensaio').style.display = 'block';
        showAlert('Todos os dados serão perdidos.');
        window.location.reload();
    });

    // Limpar a borda vermelha quando o usuário começar a digitar
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            this.style.border = ''; // Limpa a estilização da borda
        });
    });

    // Event listener para o botão "Finalizar Manutenção da Chave Seccionadora"
    botaoFinalizar.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do botão
        
        // Realizar a validação dos campos e dos selects
        const camposValidos = validarCampos(inputs);
        const selectsValidos = validarSelects(Array.from(selects)); // Convertendo para um array para utilizar forEach

        if (camposValidos && selectsValidos) {
            // Se todos os campos e selects estiverem preenchidos, abrir o modal de confirmação
            document.getElementById('modal-finalizar-manutencao-seccionadora').style.display = 'block';
        } else {
            // Se algum campo ou select estiver vazio, exibir um alerta
            showAlert('Preencha todos os campos antes de prosseguir.');
        }
    });

    // Event listener para os cliques nos botões dentro do modal finalizar manutenção
    document.getElementById('modal-finalizar-manutencao-seccionadora').addEventListener('click', function(event) {
        if (event.target.id === 'btn-sim-novo-equipo') {
            // Fecha o modal de confirmação
            document.getElementById('modal-finalizar-manutencao-seccionadora').style.display = 'none';
            // Chama a função para selecionar o equipamento
            selecionarEquipamento();

        } else if (event.target.id === 'btn-nao-finaliza-equipo') {
            // Fecha o modal de confirmação
            document.getElementById('modal-finalizar-manutencao-seccionadora').style.display = 'none';
            
            // Modal para questionar se deseja inserir outra subestaçãoe continuar a manutenção
            document.getElementById('modal-continuar-manutencao').addEventListener('click', function(event){


                if(event.target.id === 'btn-sim-continuar'){
                    document.getElementById('modal-continuar-manutencao').style.display = 'none';
                    // Volta para a tela manutenção no ponto que estava quando iniciou o processo
                    // window.location.href('./Manutencao/tela-manutencao.html')
                    window.history.go(-1);

                }else if(event.target === 'btn-nao-continuar'){
                    document.getElementById('modal-enviar-dados-rt').addEventListener('click',function(event){
                        // preencher dados do Select Dinamicamente
                    })
                    
                }
            })
        }
    });
});

        

// Função para validar os campos
function validarCampos(inputs) {
    let todosPreenchidos = true;
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.style.border = '1px solid red'; // Estiliza a borda do campo para vermelho
            todosPreenchidos = false;
        }
    });
    return todosPreenchidos;
}

function validarSelects() {
    let todosSelecionados = true;

    // Validar o primeiro select
    const select1 = document.getElementById('select-equipamento-1');
    const erroSpan1 = document.getElementById('erro-patrimonio-1');

    // Adiciona um event lister para mudanças no no primeiro select
    select1.addEventListener('change', function() {
    if (this.value !== '') {
        ocultarErro('erro-patrimonio-1');
        this.style.border = ''; // Limpa a borda se o valor for selecionado
    }
});
    
    if (select1.value === '') {
        exibirErro('erro-patrimonio-1', 'Por favor, selecione um equipamento de teste');
        select1.style.border = '1px solid red';
        todosSelecionados = false;
    } else {
        // erroSpan1.textContent = '';
        select1.style.border = '';
        ocultarErro('erro-patrimonio-1')
        todosSelecionados = true;
    }

    // Validar o segundo select
    const select2 = document.getElementById('select-equipamento-2');
    const erroSpan2 = document.getElementById('erro-patrimonio-2');

    // Adiciona um event lister para mudanças no segundo select
    select2.addEventListener('change', function() {
    if (this.value !== '') {
        ocultarErro('erro-patrimonio-2');
        this.style.border = ''; // Limpa a borda se o valor for selecionado
    }
});

    if (select2.value === '') {
        exibirErro('erro-patrimonio-2', 'Por favor, selecione um equipamento de teste');
        select2.style.border = '1px solid red';
        todosSelecionados = false;
    } else {
        // erroSpan2.textContent = '';
        select2.style.border = '';
        ocultarErro('erro-patrimonio-2')
        todosSelecionados = true;
    }
 
    return todosSelecionados;
}

