// Mostra o botão quando o usuário rola para baixo
window.onscroll = function() {
    const btnTop = document.getElementById("btnTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btnTop.classList.add("show"); // Mostra o botão
    } else {
        btnTop.classList.remove("show"); // Esconde o botão
    }
};

// Função para rolar até o topo
function scrollToTop() {
    window.scrollTo({
        top: 0, // Vai para o topo da página
        behavior: "smooth" // Faz o movimento suave
    });
}
