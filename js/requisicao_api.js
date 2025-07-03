
document.addEventListener('DOMContentLoaded', function(){
	
	
	const tabelaAgendamentos = document.getElementById('tabela-agendamentos').getElementsByTagName('tbody')[0];
	
	
		 
	
		 fetch('http://localhost:8080/api/agendamentos')
		 .then(response => {
			  if (!response.ok){
				  throw new Error('Erro na requisição: ' + response.status);
			  }
			  return response.json();
		  })
		 .then(data => {
			  data.forEach(agendamento => {
				  const linha = tabela-agendamentos.insertRow();
				  
				  const nomeCelula = linha.insertCell();
				  nomeCelula.textContent = agendamento.paciente.nome;
				  
				  const crmCelula = linha.insertCell();
				  crmCelula.textContent = medico.crm;
				  
				  const especialidadeCelula = linha.insertCell();
				  especialidadeCelula.textContent = medico.especialidade;
				  
				  const acoes  = linha.insertCell();
				  const botaoEditar = document.createElement('button');
				  botaoEditar.textContent = 'Editar';
				  botaoEditar.addEventListener('click', () => editarAgenda(agenda.id));
				  acoes.appendChild(botaoEditar);
				  
				  const botaoDeletar = document.createElement('button');
				  botaoDeletar.textContent = 'Deletar';
				  botaoDeletar.addEventListener('click', ()=> deletarAgenda(agenda.id));
				  acoes.appendChild(botaoDeletar);
				  
			  });
		  });


	

});

function editarPaciente(id){
	console.log(`Editar paciente com id: ${id}`);
	alert('Clicou em editar Paciente ' +id);
	}
function deletarPaciente(id){
	console.log(`Deletar paciente com id: ${id}`);
	alert('Clicou em deletar Paciente ' +id);
	}
function editarMedico(id){
	console.log(`Editar medico com id: ${id}`);
	alert('Clicou em editar Paciente ' +id);
	}
function deletarMedico(id){
	console.log(`Deletar medico com id: ${id}`);
	alert('Clicou em deletar Paciente ' +id);
	}