console.log("Olá! O JavaScript está funcionando");

const nome = "Vitor Nascimento"; 
let hora = new Date().getHours();
console.log(hora);

let saudacao;
if (hora < 12)
{
    saudacao = "Bom dia";
} else if (hora < 18)
{
    saudacao = "Boa Tarde";
} else 
{
    saudacao = "Boa noite";
}
console.log(saudacao);

// Atualiza o título apenas se ele existir na página (evita erros nas páginas que não têm h1)
const titulo = document.querySelector("h1");
if (titulo) {
    titulo.textContent = saudacao + ", olá, eu sou o " + nome;
}

// --- LÓGICA DO TEMA COM LOCALSTORAGE ---
const botao = document.querySelector("#tema");

// 1. Ao carregar a página, verifica se o usuário já havia escolhido o tema claro antes
if (localStorage.getItem("tema") === "claro") {
    document.body.classList.add("escuro");
    if (botao) {
        botao.textContent = "Modo Escuro";
    }
} else {
    if (botao) {
        botao.textContent = "Modo Claro";
    }
}

// 2. Quando o botão for clicado, alterna o tema e salva a preferência no navegador
if (botao) {
    botao.addEventListener("click", function () {
        document.body.classList.toggle("escuro");
        
        if (document.body.classList.contains("escuro")) {
            localStorage.setItem("tema", "claro");
            botao.textContent = "Modo Escuro";
        } else {
            localStorage.setItem("tema", "escuro");
            botao.textContent = "Modo Claro";
        }
    });
}