// Função que exibe as informações do paciente
function format(agendamento) {
    // agendamento é o objeto de dados original para a linha
    return (
        '<div class="detalhes-agendamento">' +
        '<h4>Detalhes do Paciente</h4>' +
        '<dl>' +
        '<dt>Nome completo:</dt>' +
        '<dd>' + agendamento.paciente.nome + '</dd>' +
        '<dt>CPF:</dt>' +
        '<dd>' + agendamento.paciente.cpf + '</dd>' +
        '<dt>Telefone:</dt>' +
        '<dd>' + agendamento.paciente.celular + '</dd>' +
        '<dt>Pagamento:</dt>' +
        '<dd>' + (agendamento.pagamento || 'Nenhum pagamento registrado') + '</dd>' +
        '<dt>Observações:</dt>' +
        '<dd>' + (agendamento.observacoes || 'Nenhuma observação registrada') + '</dd>' +
        '</dl>' +
        '</div>'
    );
}

document.addEventListener('DOMContentLoaded', function(){
    // Inicializa a tabela DataTables
    let table = new DataTable('#tabela-agendamentos', {
        columns: [
            {
                className: 'dt-control',
                orderable: false,
                data: null,
                defaultContent: ''
            },
            { 
                title: 'Paciente',
                data: 'paciente',
                render: function(data) {
                    return data.nome;
                }
            },
            { 
                title: 'Data da Consulta',
                data: 'dataConsulta'
            },
            { 
                title: 'Horário',
                data: 'horarioConsulta'
            },
            { 
                title: 'Especialidade',
                data: 'especialidade'
            },
            { 
                title: 'Médico',
                data: 'nomeMedico' 
            },
            
            {
                title: 'Ações',
                data: 'ações',
                orderable: false,
                defaultContent: '<button class="btn-editar">Editar</button> <button class="btn-deletar">Deletar</button>'
            }
        ],
        language: {
            url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/pt-BR.json'
        },
        order: [[2, 'asc'], [3, 'asc']], // Ordenar por data e depois horário
        responsive: true
    });

    // Carrega os dados com fetch
    fetch('http://localhost:8080/api/agendamentos')
    .then(response => {
        if (!response.ok){
            throw new Error('Erro na requisição: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        // Adiciona dados à tabela
        table.clear().rows.add(data).draw();
    })
    .catch(error => {
        console.error('Erro ao carregar agendamentos:', error);
    });

    // Adiciona event listener para abrir e fechar detalhes
    table.on('click', 'td.dt-control', function(e) {
        let tr = e.target.closest('tr');
        let row = table.row(tr);
 
        if (row.child.isShown()) {
            // Esta linha já está aberta - fechar
            row.child.hide();
            tr.classList.remove('shown');
        }
        else {
            // Abrir esta linha
            row.child(format(row.data())).show();
            tr.classList.add('shown');
        }
    });

    // Adiciona event listeners para os botões de ação
    $('#tabela-agendamentos').on('click', '.btn-editar', function() {
        const data = table.row($(this).closest('tr')).data();
        editarAgendamento(data.id);
    });

    $('#tabela-agendamentos').on('click', '.btn-deletar', function() {
        const data = table.row($(this).closest('tr')).data();
        deletarAgendamento(data.id);
        
    });
});






