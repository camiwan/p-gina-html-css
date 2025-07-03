import { criarBotoes } from '../js/botoes.js';

document.addEventListener('DOMContentLoaded', function(){
	
	
		
	const tabelaMedicos = document.getElementById('tabela-medicos').getElementsByTagName('tbody')[0];
	const containerNovoMedico = document.querySelector('.container-novoMedico');

	if(containerNovoMedico){
		criarBotoes(containerNovoMedico, {
			novo:{
				texto: 'Novo Médico',
				callback: novoMedico
			}
		});
	}
		 
	fetch('http://localhost:8080/api/medicos')
        .then(response => {
			 if (!response.ok){
				 throw new Error('Erro na requisição: ' + response.status);
			 }
			 return response.json();
		 })
		.then(data => {
			 data.forEach(medico => {
				 const linha = tabelaMedicos.insertRow();
				 
				 const nomeCelula = linha.insertCell();
				 nomeCelula.textContent = medico.nome;
				 
				 const crmCelula = linha.insertCell();
				 crmCelula.textContent = medico.crm;
				 
				 const especialidadeCelula = linha.insertCell();
				 especialidadeCelula.textContent = medico.especialidade;

				 const valorConsulta = linha.insertCell();
				 valorConsulta.textContent = " R$ " +medico.valorConsulta;
				 

				 // Ações/Botões		 


				  const acoesCelula  = linha.insertCell();
				  acoesCelula.style.textAlign= 'center';

				  criarBotoes(acoesCelula, {
					 
					editar:{
						texto:'Editar',
						callback: editarMedico,
						id: medico.id
					},
					deletar:{
						texto:'Deletar',
						callback: deletarMedico ,
						id: medico.id
					}
				  });				
				 
			 });
		 }).catch(error => {
			console.error('Erro ao carregar os médicos: ', error);
		 });
		 
});

function novoMedico(){	
	alert('Clicou em novo médico');
}

function editarMedico(id){
	console.log(`Editar médico com id: ${id}`);
	alert('Clicou em editar médico ' +id);
}
function deletarMedico(id){
	console.log(`Deletar medico com id: ${id}`);
	alert('Clicou em deleta médico ' +id);
}