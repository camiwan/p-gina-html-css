// Controle de navegação
document.addEventListener('DOMContentLoaded', function() {
    // Seletores
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');
    const links = document.querySelectorAll('nav ul li a');
    const contents = document.querySelectorAll('article > div');
    
    // Função para mostrar conteúdo específico
    function showContent(id) {
        // Oculta todos os conteúdos
        contents.forEach(content => {
            content.style.display = 'none';
        });
        
        // Mostra o conteúdo selecionado
        const selectedContent = document.getElementById(`${id}-content`);
        if (selectedContent) {
            selectedContent.style.display = 'block';
        }
    }
    
    // Configurar navegação
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const id = this.getAttribute('href');
            
            // Em dispositivos móveis, fechar o menu após clicar
            if (window.innerWidth <= 600) {
                nav.classList.remove('expanded');
            }
            
            showContent(id);
        });
    });
    
    // Adicionar toggle para o menu de navegação
    navToggle.addEventListener('click', function() {
        nav.classList.toggle('expanded');
    });
    
    // Inicializar com o conteúdo da home
    showContent('home');
    
    // Ajustar navegação em redimensionamento
    window.addEventListener('resize', function() {
        if (window.innerWidth > 600) {
            nav.classList.remove('expanded');
        }
    });
});