document.addEventListener('DOMContentLoaded', function(){
	
	
	const navToggle = document.querySelector('.nav-toggle');
	const nav = document.querySelector('nav');
	
	//verifica a preferência do usuário no localStorage
	
	if(localStorage.getItem('navExpanded') === 'true'){
		nav.classList.add('expanded');
	}
	
	navToggle.addEventListener('click', function(){
		nav.classList.toggle('expanded');
		
		// Salvar preferência do usário
		
		localStorage.setItem('navExpanded', nav.classList.contains('expanded'));
	});
	
	
});