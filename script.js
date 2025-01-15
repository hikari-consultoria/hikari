// Exibe o botão "Top" ao rolar para baixo
window.onscroll = function() {
    const btnTop = document.getElementById("btnTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btnTop.classList.add("show"); // Adiciona a classe para mostrar
    } else {
        btnTop.classList.remove("show"); // Remove a classe para esconder
    }
};

// Função para voltar ao topo da página
function scrollToTop() {
    window.scrollTo({
        top: 0, // Vai para o topo
        behavior: "smooth" // Rola suavemente
    });
}