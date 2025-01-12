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
        }
        header {
            background-color: #4CAF50;
            color: white;
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
        }
        header img {
            width: 50px;
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
        }
        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            color: black;
        }
        .hero p {
            font-size: 1.5rem;
            margin-bottom: 2rem;
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
    </style>
</head>
<body>
    <header>
        <img src="logo.png" alt="Hikari Consultoria Digital">
        <nav>
            <ul>
                <li><a href="#home">Início</a></li>
                <li><a href="#about">Sobre Nós</a></li>
                <li><a href="#services">Serviços</a></li>
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
        <h2>Sobre Nós</h2>
        <p>Com anos de experiência em compras online, ajudamos você a comprar com segurança e economia, superando medos e incertezas.</p>
    </section>

    <section id="services">
        <h2>Serviços</h2>
        <div class="services">
            <div class="service">
                <i class="fas fa-shopping-cart"></i>
                <h3>Consultoria Nacional</h3>
                <p>Orientação sobre lojas confiáveis e promoções exclusivas no Brasil.</p>
            </div>
            <div class="service">
                <i class="fas fa-globe"></i>
                <h3>Consultoria Internacional</h3>
                <p>Auxílio para compras em plataformas globais com segurança.</p>
            </div>
            <div class="service">
                <i class="fas fa-shield-alt"></i>
                <h3>Segurança</h3>
                <p>Garantimos que suas compras sejam protegidas contra fraudes.</p>
            </div>
        </div>
    </section>

    <section id="contact">
        <h2>Contato</h2>
        <p>Entre em contato para mais informações e agende sua consultoria!</p>
        <p>Email: <a href="mailto:paulapsippy@gmail.com">Envie seu e-mail</a></p>
        <p>WhatsApp: <a href="https://wa.me/seunumero">Envie um Whatsapp</a></p>
    </section>

    <footer>
        <p>&copy; 2025 Hikari Consultoria Digital. Todos os direitos reservados.</p>
    </footer>
</body>
</html>
