// =========================
// BANCO DE DESAFIOS
// =========================
const LEVELS = [
    // 1. Algoritmos Básicos
    {
        tema: "Algoritmos Básicos",
        title: "Exibindo uma mensagem",
        prefix: "algoritmo mensagem\ninicio\n",
        blank: "_____",
        suffix: "fimalgoritmo",
        options: [
            "escreva('Olá Mundo')",
            "imprima('Olá Mundo')",
            "mostre('Olá Mundo')",
            "print('Olá Mundo')",
        ],
        answer: "escreva('Olá Mundo')",
        output: "Olá Mundo",
        hint: "Em Portugol, o comando para exibir algo na tela é 'escreva()'.",
    },
    {
        tema: "Algoritmos Básicos",
        title: "Lendo dois números",
        prefix: "algoritmo soma\nvar a, b: inteiro\ninicio\n",
        blank: "_____",
        suffix: "fimalgoritmo",
        options: ["leia(a, b)", "scan(a, b)", "input(a, b)", "ler(a; b)"],
        answer: "leia(a, b)",
        output: "Leitura de dois valores.",
        hint: "O comando 'leia()' é usado para capturar dados do usuário.",
    },

    // 2. Variáveis e Tipos de Dados
    {
        tema: "Variáveis e Tipos de Dados",
        title: "Declarando uma variável inteira",
        prefix: "#include <stdio.h>\nint main(){\n ",
        blank: "_____",
        suffix: " return 0;\n}",
        options: [
            "int idade = 18;",
            "float idade = 18;",
            "string idade = 18;",
            "char idade = 18;",
        ],
        answer: "int idade = 18;",
        output: "Variável inteira declarada corretamente.",
        hint: "O tipo 'int' armazena números inteiros em C.",
    },
    {
        tema: "Variáveis e Tipos de Dados",
        title: "Armazenando um caractere",
        prefix: "#include <stdio.h>\nint main(){\n ",
        blank: "_____",
        suffix: " return 0;\n}",
        options: [
            "char letra = 'A';",
            "string letra = 'A';",
            "letra = 'A';",
            "char letra = A;",
        ],
        answer: "char letra = 'A';",
        output: "Letra armazenada com sucesso.",
        hint: "Um caractere em C deve estar entre aspas simples (' ').",
    },

    // 3. Estruturas Condicionais
    {
        tema: "Estruturas Condicionais",
        title: "Verificando se um número é positivo",
        prefix: "#include <stdio.h>\nint main(){\n int n = 5;\n if (",
        blank: "_____",
        suffix: ') printf("positivo\\n");\n else printf("negativo\\n");\n return 0;\n}',
        options: ["n > 0", "n < 0", "n = 0", "n != 0"],
        answer: "n > 0",
        output: "positivo",
        hint: "Use o operador '>' para verificar se é maior que zero.",
    },
    {
        tema: "Estruturas Condicionais",
        title: "Usando o if e else corretamente",
        prefix: "int a = 10, b = 20;\nif (",
        blank: "_____",
        suffix: ') printf("maior\\n"); else printf("menor\\n");',
        options: ["a > b", "a < b", "a == b", "a != b"],
        answer: "a > b",
        output: "menor",
        hint: "Compare 'a' e 'b' com operadores relacionais.",
    },

    // 4. Estruturas de Repetição
    {
        tema: "Estruturas de Repetição",
        title: "Loop for simples",
        prefix: "#include <stdio.h>\nint main(){\n for(",
        blank: "_____",
        suffix: ') printf("Oi\\n");\n return 0;\n}',
        options: [
            "int i = 0; i < 3; i++",
            "i = 0; i <= 3",
            "for i < 3",
            "0 < i < 3",
        ],
        answer: "int i = 0; i < 3; i++",
        output: "Oi (3 vezes)",
        hint: "A estrutura do for é: inicialização; condição; incremento.",
    },
    {
        tema: "Estruturas de Repetição",
        title: "Usando while",
        prefix: "int x = 0;\nwhile(",
        blank: "_____",
        suffix: '){\n printf("%d ", x);\n x++;\n}',
        options: ["x < 5", "x <= 5", "x > 5", "x = 5"],
        answer: "x < 5",
        output: "0 1 2 3 4",
        hint: "O laço while repete enquanto a condição for verdadeira.",
    },

    // 5. Vetores e Matrizes
    {
        tema: "Vetores e Matrizes",
        title: "Acessando um vetor",
        prefix: 'int v[3] = {10, 20, 30};\nprintf("%d", ',
        blank: "_____",
        suffix: ");",
        options: ["v[1]", "v{1}", "v(1)", "v<1>"],
        answer: "v[1]",
        output: "20",
        hint: "Em C, o acesso é feito com colchetes e o índice começa em 0.",
    },
    {
        tema: "Vetores e Matrizes",
        title: "Inicializando uma matriz",
        prefix: "int m[2][2] = ",
        blank: "_____",
        suffix: ";",
        options: ["{{1,2},{3,4}}", "[[1,2],[3,4]]", "{1,2,3,4}", "(1,2)(3,4)"],
        answer: "{{1,2},{3,4}}",
        output: "Matriz criada 2x2.",
        hint: "Matrizes em C usam chaves duplas para linhas e colunas.",
    },

    // 6. Structs
    {
        tema: "Structs",
        title: "Definindo uma struct",
        prefix: "struct Aluno {\n ",
        blank: "_____",
        suffix: "};",
        options: [
            "char nome[50]; int idade;",
            "string nome; idade int;",
            "nome: string; idade: int;",
            "int nome; char idade;",
        ],
        answer: "char nome[50]; int idade;",
        output: "Estrutura criada com campos nome e idade.",
        hint: "Use tipos C válidos e ponto e vírgula após cada campo.",
    },
    {
        tema: "Structs",
        title: "Acessando campo de struct",
        prefix: 'struct Aluno a = {"Ana", 20};\nprintf("%d", ',
        blank: "_____",
        suffix: ");",
        options: ["a.idade", "a->idade", "idade.a", "idade(a)"],
        answer: "a.idade",
        output: "20",
        hint: "Para acessar um campo, use ponto (.) entre a struct e o campo.",
    },
];

// =========================
// ESTADO DO JOGO
// =========================
let state = { idx: 0, score: 0, lives: 3, selected: null, solved: 0 };

// =========================
// ELEMENTOS
// =========================
const el = {
    level: document.getElementById("level"),
    totalLevels: document.getElementById("totalLevels"),
    score: document.getElementById("score"),
    hearts: document.getElementById("hearts"),
    title: document.getElementById("title"),
    tema: document.getElementById("tema"),
    code: document.getElementById("codeSnippet"),
    options: document.getElementById("options"),
    console: document.getElementById("consoleOut"),
    hint: document.getElementById("hint"),
    btnHint: document.getElementById("btnHint"),
    btnRun: document.getElementById("btnRun"),
    btnSkip: document.getElementById("btnSkip"),
    progress: document.getElementById("progress"),
    summary: document.getElementById("summary"),
    bestScore: document.getElementById("bestScore"),
    bestLevels: document.getElementById("bestLevels"),
    overlay: document.getElementById("overlay"),
    ovTitle: document.getElementById("ovTitle"),
    ovDesc: document.getElementById("ovDesc"),
    btnPlayAgain: document.getElementById("btnPlayAgain"),
    btnShare: document.getElementById("btnShare"),
    glitch: document.getElementById("glitch"),
};

el.totalLevels.textContent = LEVELS.length;

// =========================
// FUNÇÕES
// =========================
function renderHearts() {
    el.hearts.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        const h = document.createElement("div");
        h.className = "heart" + (i < state.lives ? "" : " off");
        el.hearts.appendChild(h);
    }
}

function updateProgress() {
    el.progress.style.width =
        Math.round((state.idx / LEVELS.length) * 100) + "%";
}

function setConsole(msg) {
    el.console.textContent = msg;
}

function glitch() {
    el.glitch.classList.add("on");
    setTimeout(() => el.glitch.classList.remove("on"), 350);
}

function addSummaryRow(ok, title) {
    const row = document.createElement("div");
    row.className = "row";
    row.innerHTML = `<span>${ok ? "✅" : "❌"} ${title}</span><b>${
        ok ? "+200" : "-1 vida"
    }</b>`;
    el.summary.prepend(row);
}

function saveBest() {
    const best = JSON.parse(localStorage.getItem("rea-best") || "{}");
    if (!best.score || state.score > best.score) best.score = state.score;
    if (!best.levels || state.solved > best.levels) best.levels = state.solved;
    localStorage.setItem("rea-best", JSON.stringify(best));
    el.bestScore.textContent = best.score || 0;
    el.bestLevels.textContent = best.levels || 0;
}

function loadBest() {
    const best = JSON.parse(localStorage.getItem("rea-best") || "{}");
    el.bestScore.textContent = best.score || 0;
    el.bestLevels.textContent = best.levels || 0;
}

function renderLevel() {
    const L = LEVELS[state.idx];
    el.level.textContent = state.idx + 1;
    el.title.textContent = L.title;
    el.tema.textContent = L.tema;
    el.hint.hidden = true;
    el.hint.textContent = L.hint;
    state.selected = null;
    el.btnRun.disabled = false; // Habilita o botão

    const code = `${L.prefix}${"${BLANK}"}${L.suffix}`;
    el.code.innerHTML = code
        .replace(/</g, "&lt;") // Garante que < seja renderizado corretamente
        .replace(
            "${BLANK}",
            `<span class="blank" id="blank">${L.blank}</span>`
        );

    el.options.innerHTML = "";
    L.options.forEach((opt) => {
        const b = document.createElement("button");
        b.className = "btn";
        b.innerHTML = opt;
        b.addEventListener("click", () => {
            document
                .querySelectorAll(".options .btn")
                .forEach((x) => x.classList.remove("primary"));
            b.classList.add("primary");
            state.selected = opt;
            document.getElementById("blank").textContent = opt;
            setConsole("Pronto para executar.");
        });
        el.options.appendChild(b);
    });

    updateProgress();
    setConsole("Aguardando sua resposta…");
    updateHUD();
}

function rightAnswer() {
    const L = LEVELS[state.idx];
    state.score += 200;
    state.solved += 1;
    addSummaryRow(true, L.title);
    setConsole(`✔ Sucesso! Saída: ${L.output}`);
    el.btnRun.disabled = true;
    saveBest();
    setTimeout(nextLevel, 700);
}

function wrongAnswer() {
    const L = LEVELS[state.idx];
    state.lives -= 1;
    renderHearts();
    glitch();
    addSummaryRow(false, L.title);
    setConsole("❌ BUG! Erro no código! Tente novamente.");
    updateHUD();
    if (state.lives <= 0) gameOver();
}

function nextLevel() {
    state.idx += 1;
    if (state.idx >= LEVELS.length) win();
    else renderLevel();
}

function useHint() {
    if (state.score >= 100) {
        state.score -= 100;
        el.hint.hidden = false;
        updateHUD();
    } else setConsole("⚠ Pontos insuficientes para dica (precisa de 100).");
}

function skip() {
    state.lives -= 1;
    renderHearts();
    addSummaryRow(false, "Pulado: " + LEVELS[state.idx].title);
    updateHUD();
    if (state.lives <= 0) gameOver();
    else nextLevel();
}

function updateHUD() {
    el.score.textContent = state.score;
    renderHearts();
}

function runCode() {
    if (!state.selected) {
        setConsole("Selecione uma opção antes de executar.");
        return;
    }

    if (state.selected === LEVELS[state.idx].answer) {
        rightAnswer();
    } else {
        wrongAnswer();
    }
}

function gameOver() {
    saveBest();
    el.ovTitle.textContent = "Fim de Jogo!";
    el.ovDesc.innerHTML = `Você resolveu **${state.solved}** desafios e fez **${state.score}** pontos. Tente novamente!`;
    el.overlay.style.display = "flex";
}

function win() {
    saveBest();
    el.ovTitle.textContent = "🏆 Parabéns!";
    el.ovDesc.innerHTML = `Você concluiu **todos** os ${LEVELS.length} níveis com uma pontuação final de **${state.score}**!`;
    el.overlay.style.display = "flex";
}

function startGame() {
    state = { idx: 0, score: 0, lives: 3, selected: null, solved: 0 };
    el.summary.innerHTML = "";
    el.overlay.style.display = "none";
    loadBest();
    renderLevel();
    updateHUD();
}

// =========================
// MANIPULADORES DE EVENTOS
// =========================
document.addEventListener("DOMContentLoaded", () => {
    // Inicializa o jogo ao carregar a página
    startGame();
});

el.btnRun.addEventListener("click", runCode);
el.btnHint.addEventListener("click", useHint);
el.btnSkip.addEventListener("click", skip);
el.btnPlayAgain.addEventListener("click", startGame);

el.btnShare.addEventListener("click", () => {
    const url = window.location.href;
    navigator.clipboard
        .writeText(url)
        .then(() => {
            alert("Link do REA copiado para a área de transferência!");
        })
        .catch((err) => {
            console.error("Erro ao copiar link:", err);
        });
});