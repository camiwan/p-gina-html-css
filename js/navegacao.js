//navegacao.js
document.addEventListener('DOMContentLoaded', function(){
	
	
	const linkHome        = document.getElementById('link-home');
	const linkCadastro    = document.getElementById('link-cadastro');
	const linkPaciente    = document.getElementById('link-paciente');
	const linkMedico      = document.getElementById('link-medico');
	const linkAgenda      = document.getElementById('link-agenda');
	const linktblvalores  = document.getElementById('link-tblValores');
	
	const homeContent       = document.getElementById('home-content');
	const cadastroContent   = document.getElementById('cadastro-content');
	const pacienteContent   = document.getElementById('paciente-content');
	const medicoContent     = document.getElementById('medico-content');
	const agendaContent     = document.getElementById('agenda-content');
	const contatoContent    = document.getElementById('contato-content');
	const tblValoresContent = document.getElementById('tbl-valores')
	
	
	function hideAllContents(){
		
		homeContent.style.display       = 'none';
		cadastroContent.style.display   = 'none';
		pacienteContent.style.display   = 'none';
		medicoContent.style.display     = 'none';
		agendaContent.style.display     = 'none';
		tblValoresContent.style.display = 'none';
	    
		
	}
	
	//Mostra o conteúdo inicial
	
	homeContent.style.display     = 'block';
	hideAllContents();
	homeContent.style.display     = 'block';
	
	// Mostra Página home
	linkHome.addEventListener('click', function(event){
		
		event.preventDefault();
		hideAllContents();
		homeContent.style.display      = 'block';
		
	});
	
	// Mostra Página cadastro
	linkCadastro.addEventListener('click', function(event){
		
		event.preventDefault();
		hideAllContents();
		cadastroContent.style.display  = 'block';	
	    
	});
	
	// Mostra Página Paciente
	linkPaciente.addEventListener('click', function(event){
		
		event.preventDefault();
		hideAllContents();
		pacienteContent.style.display  = 'block';
		
	});
	
	// Mostra Página Medico
	linkMedico.addEventListener('click', function(event){
		
		event.preventDefault();
		hideAllContents();
		medicoContent.style.display    = 'block';
	    
	});
	
	// Mostra Página Agenda
	linkAgenda.addEventListener('click', function(event){
		
		event.preventDefault();
		hideAllContents();
		agendaContent.style.display    = 'block';
	    
	});

	// Mostra Página cadastro
	linkCadastro.addEventListener('click', function(event){
		
		event.preventDefault();
		hideAllContents();
		cadastroContent.style.display  = 'block';	
	    
	});// Mostra Página Tabela de Valores
	linktblvalores.addEventListener('click', function(event){
		
		event.preventDefault();
		hideAllContents();
		tblValoresContent.style.display  = 'block';	
	    
	});
	
	
});