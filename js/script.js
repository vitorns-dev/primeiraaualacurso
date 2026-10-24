// --- MENSAGEM DE TESTE NO CONSOLE ---
console.log("Olá! O JavaScript está funcionando");

// --- OBTÉM A HORA E FORMATAÇÃO ---
const agora = new Date();
let hora = agora.getHours(); // Variável numérica usada para a saudação

// Exibe a hora formatada no formato HH:MM no console
const horaFormatada = agora.toLocaleTimeString('pt-BR', { 
    hour: '2-digit', 
    minute: '2-digit' 
});
console.log("Hora atual:", horaFormatada);

// --- DEFINE A SAUDAÇÃO COM BASE NA HORA ---
let saudacao;
if (hora < 12) {
    saudacao = "Bom dia!";
} else if (hora < 18) {
    saudacao = "Boa tarde!";
} else {
    saudacao = "Boa noite!";
}

// --- ATUALIZA O TÍTULO APENAS NA PÁGINA INICIAL (INDEX.HTML) ---
if (window.location.pathname.includes("index.html") || window.location.pathname.endsWith("/")) {
    const titulo = document.querySelector("h1");
    if (titulo) {
        titulo.textContent = saudacao + " Seja bem-vindo ao meu portfólio";
    }
}

// --- LÓGICA DO BOTÃO DE TEMA COM LOCALSTORAGE (APLICADO NO HTML) ---
const botao = document.querySelector("#tema");

// Atualiza o ícone e o texto descritivo do botão de tema
function atualizarBotao(eClaro) {
    if (!botao) return;
    
    if (eClaro) {
        botao.innerHTML = `<span class="icone">🌙</span> <span class="texto-btn">Modo Escuro</span>`;
    } else {
        botao.innerHTML = `<span class="icone">☀️</span> <span class="texto-btn">Modo Claro</span>`;
    }
}

// --- CARREGA O TEMA SALVO NO NAVEGADOR AO ABRIR A PÁGINA ---
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "claro") {
    document.documentElement.classList.add("claro"); // Aplica o tema claro na raiz
    atualizarBotao(true);
} else {
    document.documentElement.classList.remove("claro"); // Mantém o escuro por padrão
    atualizarBotao(false);
}

// --- EVENTO DE CLIQUE PARA ALTERNAR E GUARDAR A PREFERÊNCIA ---
if (botao) {
    botao.addEventListener("click", function () {
        document.documentElement.classList.toggle("claro"); // Alterna a classe no HTML
        
        const eClaro = document.documentElement.classList.contains("claro");
        
        // Guarda a escolha no armazenamento local do navegador
        if (eClaro) {
            localStorage.setItem("tema", "claro");
        } else {
            localStorage.setItem("tema", "escuro");
        }
        
        atualizarBotao(eClaro);
    });
}