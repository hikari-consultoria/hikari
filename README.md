<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hikari Consultoria Digital</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
            color: #333;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        header {
            background-color: #4CAF50;
            color: white;
            padding: 1rem;
            display: flex;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            box-sizing: border-box;
            z-index: 1000;
        }
        header img {
            width: 50px;
            margin-right: 10px;
        }
        header nav {
            flex: 1;
            display: flex;
            justify-content: center;
        }
        nav ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
        }
        nav ul li {
            margin: 0 15px;
        }
        nav ul li a {
            color: white;
            text-decoration: none;
            font-size: 1rem;
        }
        nav ul li a:hover {
            text-decoration: underline;
        }
        .hero {
            background-image: url('https://via.placeholder.com/1500x500');
            background-size: cover;
            background-position: center;
            text-align: center;
            padding: 10rem 1rem;
            color: white;
            margin-top: 70px;
            width: 100%;
            max-width: 1200px;
        }
        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            color: black;
        }
        .hero p {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            color: black;
        }
        .hero a {
            background-color: #FF007F;
            color: white;
            padding: 0.8rem 1.5rem;
            text-decoration: none;
            font-size: 1rem;
            border-radius: 5px;
        }
        .hero a:hover {
            background-color: #E60073;
        }
        section {
            padding: 3rem 1rem;
            text-align: center;
            width: 100%;
            max-width: 1200px;
        }
        section:nth-child(even) {
            background-color: #f0f0f0;
        }
        section h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
            color: #4CAF50;
        }
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1rem 0;
            margin-top: 2rem;
            width: 100%;
            max-width: 1200px;
        }
        .services {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
        }
        .service {
            background: white;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 1rem;
            width: 300px;
            text-align: center;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .service h3 {
            color: #4CAF50;
        }
        .service i {
            font-size: 3rem;
            color: #4CAF50;
            margin-bottom: 1rem;
        }
        .social-links {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 1rem;
        }
        .social-links a {
            color: white;
            font-size: 1.5rem;
            text-decoration: none;
            padding: 0.5rem;
            border-radius: 50%;
            background-color: #FF007F;
        }
        .social-links a:hover {
            background-color: #E60073;
        }
        form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
        }
        form input, form textarea, form button {
            padding: 0.8rem;
            width: 100%;
            max-width: 400px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        form button {
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
        }
        form button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <header>
        <img src="logo.png" alt="Hikari Consultoria Digital">
        <nav>
            <ul>
                <li><a href="#home">Início</a></li>
                <li><a href="#about">Sobre Mim</a></li>
                <li><a href="#services">Serviços</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
        </nav>
    </header>

    <div class="hero">
        <h1>Hikari Consultoria Digital</h1>
        <p>Do Mundo Para a Sua Casa</p>
        <a href="#contact">Agende sua Consultoria</a>
    </div>

    <section id="about">
        <h2>Sobre Mim</h2>
        <p>Paula Vasconcelos é formada em Comércio Exterior, especializada em Importações, e atualmente cursa MBA de Analista em Logística. Com mais de 7 anos de experiência em compras online, ela possui amplo conhecimento em reputação das lojas, acompanhamento de pedidos e orientação para compras seguras.</p>
    </section>

    <section id="services">
        <h2>Serviços</h2>
        <div class="services">
            <div class="service">
                <i class="fas fa-shopping-cart"></i>
                <h3>Consultoria de Compras Nacionais</h3>
                <p>Orientação para identificar lojas confiáveis no Brasil, aproveitar promoções exclusivas e realizar compras seguras.</p>
            </div>
            <div class="service">
                <i class="fas fa-globe"></i>
                <h3>Consultoria Internacional</h3>
                <p>Auxílio para compras em plataformas globais com segurança, incluindo análise de taxas alfandegárias e orientações para evitar fraudes.</p>
            </div>
            <div class="service">
                <i class="fas fa-shield-alt"></i>
                <h3>Segurança</h3>
                <p>Garantimos que suas compras sejam protegidas contra fraudes com avaliações detalhadas e confiáveis.</p>
            </div>
        </div>
    </section>

    <section id="contact">
        <h2>Contato</h2>
        
        <p>Entre em contato pelo formulário ou pelos canais abaixo:</p>
        <form action="process.php" method="POST">
    <input type="text" name="nome" placeholder="Seu nome" required>
    <input type="tel" name="whatsapp" placeholder="Seu WhatsApp" required>
    <input type="email" name="email" placeholder="Seu email" required>
    <button type="submit">Enviar</button>
</form>
        
        <p>Email: <a href="mailto:paulapsippy@gmail.com">paulapsippy@gmail.com</a></p>
        <p>WhatsApp: <a href="https://wa.me/+5521990715348">(21) 99071-5348</a></p>

        <div class="social-links">
            <a href="https://instagram.com/suaperfil" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://facebook.com/suaperfil" target="_blank"><i class="fab fa-facebook"></i></a>
        </div>
    </section>

    <footer>
        <p>&copy; 2025 Hikari Consultoria Digital. Todos os direitos reservados.</p>
    </footer>
</body>
</html>

