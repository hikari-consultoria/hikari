<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST['nome']);
    $whatsapp = htmlspecialchars($_POST['whatsapp']);
    $email = htmlspecialchars($_POST['email']);

    // Enviar para e-mail
    $to = "paulapsippy@gmail.com";
    $subject = "Novo Contato do Formulário";
    $message = "Nome: $nome\nWhatsApp: $whatsapp\nEmail: $email";
    $headers = "From: no-reply@hikari-consultoria.github.io";

    if (mail($to, $subject, $message, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar mensagem.";
    }
}
?>
