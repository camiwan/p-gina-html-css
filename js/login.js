document.addEventListener('DOMContentLoaded', function(){
	
	const form = document.getElementById('login-form');
	const errorMessage = document.getElementById('error-message');
	
	form.addEventListener('submit', function(event){
		
		event.preventDefault(); // essa função impede o envio padrão do formulário. 
		
		const user = form.username.value;
		const pw = form.password.value;
		
		if(user === 'admin' && pw === 'admin'){
			localStorage.setItem('isLoggedIn','true');
			window.location.href = 'index.html';
		}else{
			errorMessage.textContent = 'Usuário ou senha incorretos';
		}
	});
	
});