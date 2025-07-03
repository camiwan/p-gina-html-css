function deletarAgendamento(id) {
    
    if (confirm('Tem certeza que deseja excluir este agendamento?')) {
        fetch(`http://localhost:8080/api/agendamentos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao deletar: ' + response.status);
            }
            return response.text();
        })
        .then(() => {
            // Encontrar e remover a linha da tabela DataTables
            table.row($(this).parents('tr')).remove().draw();
            // Exibir mensagem de sucesso
            alert('Agendamento deletado com sucesso!');
        })
        .catch(error => {
            console.error('Erro ao deletar agendamento:', error);
            alert('Erro ao deletar agendamento: ' + error.message);
        });
    }

}