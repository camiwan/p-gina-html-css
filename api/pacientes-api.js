import { criarBotoes } from '../js/botoes.js';
document.addEventListener('DOMContentLoaded', function(){	
	
	
	const tabelaPacientes = document.getElementById('tabela-pacientes').getElementsByTagName('tbody')[0];

	const containerNovoPaciente = document.querySelector('.container-novoPaciente');
	
		if(containerNovoPaciente){
			criarBotoes(containerNovoPaciente, {
				novo:{
					texto: 'Novo Paciente',
					callback: novoPaciente
				}
			});
		}
	
	fetch('http://localhost:8080/api/pacientes')
	     .then(response => {
			 if (!response.ok){
				 throw new Error('Erro na requisição: ' + response.status);
			 }
			 return response.json();
		 })
		 .then(data => {
			 data.forEach(paciente => {
				 const linha = tabelaPacientes.insertRow();
				 
				 const nomeCelula = linha.insertCell();
				 nomeCelula.textContent = paciente.nome;
				 
				 const celularCelula = linha.insertCell();
				 celularCelula.textContent = paciente.celular;
				 
				 const cpfCelula = linha.insertCell();
				 cpfCelula.textContent = paciente.cpf;
				 
				 const acoesCelula  = linha.insertCell();
				 acoesCelula.style.textAlign= 'center';

				 criarBotoes(acoesCelula, {
					 
					editar:{
						texto:'Editar',
						
						callback: editarPaciente,
						id: paciente.id
					},
					deletar:{
						texto:'Deletar',
						callback: deletarPaciente ,
						id: paciente.id
					}
				  });				

				 
				 
			 });
		 });

});


function novoPaciente(){
	
	alert('Clicou em criar novo paciente ');
}

function editarPaciente(id){
	console.log(`Editar paciente com id: ${id}`);
	alert('Clicou em editar Paciente ' +id);
}

function deletarPaciente(id){
	console.log(`Deletar paciente com id: ${id}`);
	alert('Clicou em deletar Paciente ' +id);
}
