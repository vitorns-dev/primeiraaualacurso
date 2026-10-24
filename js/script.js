console.log("Olá! O JavaScript está funcionando");

let hora = new Date().getHours();
console.log("Hora atual:", hora);

let saudacao;
if (hora < 12) {
    saudacao = "Bom dia!";
} else if (hora < 18) {
    saudacao = "Boa tarde!";
} else {
    saudacao = "Boa noite!";
}

// Executa a troca de texto APENAS na página inicial (index.html)
if (window.location.pathname.includes("index.html") || window.location.pathname.endsWith("/")) {
    const titulo = document.querySelector("h1");
    if (titulo) {
        titulo.textContent = saudacao + " Bem-vindo ao meu portfólio";
    }
}

// --- LÓGICA DO BOTÃO DE TEMA COM LOCALSTORAGE ---
const botao = document.querySelector("#tema");

function atualizarBotao(eClaro) {
    if (!botao) return;
    
    if (eClaro) {
        // Se está no modo claro, o botão oferece mudar para o escuro
        botao.innerHTML = `<span class="icone">🌙</span> <span class="texto-btn">Modo Escuro</span>`;
    } else {
        // Se está no modo escuro, o botão oferece mudar para o claro
        botao.innerHTML = `<span class="icone">☀️</span> <span class="texto-btn">Modo Claro</span>`;
    }
}

// 1. Ao carregar a página, verifica o tema salvo no navegador (Padrão: Escuro)
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "claro") {
    document.body.classList.add("claro");
    atualizarBotao(true);
} else {
    // Se for o primeiro acesso (null) ou estiver gravado como "escuro", inicia no escuro
    document.body.classList.remove("claro");
    atualizarBotao(false);
}

// 2. Evento de clique no botão
if (botao) {
    botao.addEventListener("click", function () {
        document.body.classList.toggle("claro");
        
        const eClaro = document.body.classList.contains("claro");
        
        if (eClaro) {
            localStorage.setItem("tema", "claro");
        } else {
            localStorage.setItem("tema", "escuro");
        }
        
        atualizarBotao(eClaro);
    });
}