# 💻 Certificadora de Competência Comum 💻

## 🎯 Objetivo Geral
Desenvolver Recursos Educacionais Abertos (REA) para a disciplina de **Fundamentos da Programação**, proporcionando um aprendizado acessível e lúdico para estudantes interessados em adquirir conhecimentos básicos de programação.

---

## 📚 Conteúdo
O conteúdo será dividido nos seguintes módulos, cobrindo a base fundamental para iniciantes:

* **Módulo 1: Introdução à Lógica e Algoritmos:** Conceitos de algoritmo, pseudocódigo (ou fluxograma), e o que é programação.
* **Módulo 2: Variáveis e Tipos de Dados:** Definição, declaração e tipos básicos (inteiro, float, string, booleano).
* **Módulo 3: Estruturas de Decisão:** `if`, `else`, `elif`/`else if`, e operadores lógicos.
* **Módulo 4: Estruturas de Repetição:** `for`, `while`, e a importância de loops.
* **Módulo 5: Funções e Modularização:** Como criar e chamar funções, e a importância de código reutilizável.
* **Módulo 6: Estruturas de Dados Básicas:** Introdução a vetores e listas.

---

## 🌐 Estrutura do Website
O site será dividido em **duas páginas**:

### 🔹 Página 1 - Conteúdo
- **Apresentação:** Imagem representativa, título e breve resumo destacando os objetivos principais do curso e a **Linguagem de Programação Foco** utilizada (ex: Python).
- **Conteúdo:** Vídeos do curso, **Micro-desafios de Codificação**, exercícios práticos e materiais complementares (documentação oficial, IDEs online recomendadas).
- **Progressão e Certificação:** Sistema de *badges* ou progressão visual para cada módulo completo, reforçando a certificação de competência.
- **Contato:** Informações sobre os criadores, com links para **LinkedIn** e **GitHub**, além de um e-mail/formulário para feedback.

### 🔹 Página 2 - Jogo de Revisão
- Um **jogo interativo** para testar os conhecimentos adquiridos, focado em **Debugging** ou **Correspondência de Conceitos**.
- Atividade prática e divertida que contribui para a fixação do aprendizado.

---

## 👥 Público-Alvo
Estudantes **iniciantes em programação** que desejam adquirir uma base sólida em conceitos fundamentais de algoritmos e programação.

---

## ✍️ Autores
- [Alexis Liasch Tavares](https://github.com/Ahalekin)
- [Gabriel de Peder](https://github.com/GabrieldPeder)
- [Jefhter Rodrigues Cabral](https://github.com/jefhter)
- [João Vitor Antoniel](https://github.com/Batujao)

---
---

# 🛠️ Documentação Técnica do Projeto

## 1. Visão Geral da Arquitetura

O projeto é estruturado como um **Web App Estático** de duas páginas, focado em alta performance e fácil manutenção.

### 1.1. Pilha Tecnológica

| Componente | Tecnologia | Propósito |
| :--- | :--- | :--- |
| **Estrutura** | HTML5 | Define o conteúdo e a estrutura das páginas 1 e 2. |
| **Estilização** | CSS3  | Responsável pelo *layout* responsivo e a estética lúdica do site. |
| **Interatividade** | JavaScript Puro | Gerencia a lógica do Jogo de Revisão e a interação dos Micro-desafios. |
| **Hospedagem** | GitHub Pages | Distribuição gratuita e eficiente (como já está sendo utilizado). |
| **Conteúdo** | Vídeos incorporados | Fonte dos Recursos Educacionais Abertos (REA). |

### 1.2. Estrutura de Diretórios

```estrutura
certificadora-comum/
├── index.html          # Página principal do projeto
├── README.md           
├── /src/               
│   ├── /css/           # Estilização Geral
│   │   └── style.css
│   ├── /js/
│       ├── slides.js   # Lógica para carregar os slides do curso, em uma nova aba            
│   │   └── videos.js   # Lógica para carregar ou gerenciar os vídeos do curso
│   └── /game/          
│       ├── index.html  # Página do Jogo de Revisão
│       ├── jogo.css    # Estilização específica do Jogo
│       └── jogo.js     # Lógica e regras do Jogo 
└── /assets/            
    ├── /img/           # Imagens e ícones
    └── /videos/        # Vídeos do curso 
```
---

## 2. Guia de Configuração e Desenvolvimento

Este guia é para desenvolvedores que desejam clonar, executar localmente e contribuir com o projeto.

### 2.1. Pré-requisitos

* Um editor de código (VS Code, Sublime Text, etc.).
* Git instalado na sua máquina.
* Um navegador web moderno.

### 2.2. Instalação e Execução Local

1.  **Clonar o Repositório:**
    ```bash
    git clone https://github.com/jefhter/certificadora-comum.git
    cd certificadora-comum
    ```
2.  **Executar Localmente:**
    * Como este é um projeto estático, basta abrir o arquivo `index.html` e/ou `game/index.html` diretamente no seu navegador.
---
