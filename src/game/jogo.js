// =========================
// BANCO DE DESAFIOS
// =========================
const quizVariaveisCompostas = [
  // 1. Listas (Criação)
  {
    tema: "Variáveis Compostas (Listas)",
    title: "Criando uma lista",
    prefix: "# Criar uma lista de compras\ncompras = ",
    blank: "_____",
    suffix: "\nprint(type(compras))",
    options: [
      "[\"Pão\", \"Leite\", \"Ovos\"]",
      "(\"Pão\", \"Leite\", \"Ovos\")",
      "{\"Pão\", \"Leite\", \"Ovos\"}",
      "\"Pão\", \"Leite\", \"Ovos\""
    ],
    answer: "[\"Pão\", \"Leite\", \"Ovos\"]",
    output: "<class 'list'>",
    hint: "Listas em Python são definidas usando colchetes [ ] e seus itens são separados por vírgulas."
  },

  // 2. Listas (Acesso por Índice)
  {
    tema: "Variáveis Compostas (Listas)",
    title: "Acessando o primeiro item",
    prefix: "frutas = [\"Maçã\", \"Uva\", \"Pera\"]\n# Acessar o primeiro item ('Maçã')\nprimeira = frutas",
    blank: "_____",
    suffix: "\nprint(primeira)",
    options: [
      "[0]",
      "[1]",
      ".primeiro()",
      "(-1)"
    ],
    answer: "[0]",
    output: "Maçã",
    hint: "A indexação de listas em Python começa no índice 0. O primeiro item está sempre em [0]."
  },

  // 3. Listas (Adicionando Itens)
  {
    tema: "Variáveis Compostas (Listas)",
    title: "Adicionando um item ao final",
    prefix: "cores = [\"Vermelho\", \"Verde\"]\n# Adicionar \"Azul\" ao final\ncores.",
    blank: "_____",
    suffix: "(\"Azul\")\nprint(cores)",
    options: [
      "append",
      "add",
      "insert",
      "push"
    ],
    answer: "append",
    output: "['Vermelho', 'Verde', 'Azul']",
    hint: "O método '.append()' é usado para adicionar um novo item ao final de uma lista."
  },

  // 4. Tuplas (Criação)
  {
    tema: "Variáveis Compostas (Tuplas)",
    title: "Criando uma tupla",
    prefix: "# Tuplas são imutáveis\ncoordenadas = ",
    blank: "_____",
    suffix: "\nprint(type(coordenadas))",
    options: [
      "(10, 20)",
      "[10, 20]",
      "{10, 20}",
      "<10, 20>"
    ],
    answer: "(10, 20)",
    output: "<class 'tuple'>",
    hint: "Tuplas (tuples) são definidas usando parênteses ( ) e são estruturas que não podem ser alteradas."
  },

  // 5. Tuplas (Imutabilidade)
  {
    tema: "Variáveis Compostas (Tuplas)",
    title: "Imutabilidade da Tupla",
    prefix: "rgb = (255, 0, 0)\n# Tentar alterar o primeiro valor gera um erro\nrgb",
    blank: "_____",
    suffix: " = 128",
    options: [
      "[0]",
      "(0)",
      ".set(0)",
      ".change(0)"
    ],
    answer: "[0]",
    output: "TypeError: 'tuple' object does not support item assignment",
    hint: "Tuplas são imutáveis. Tentar atribuir um novo valor a um índice existente resultará em um TypeError."
  },

  // 6. Dicionários (Criação)
  {
    tema: "Variáveis Compostas (Dicionários)",
    title: "Criando um dicionário",
    prefix: "# Dicionários usam pares chave:valor\naluno = ",
    blank: "_____",
    suffix: "\nprint(aluno['nome'])",
    options: [
      "{\"nome\": \"Bia\", \"idade\": 21}",
      "[\"nome\": \"Bia\", \"idade\": 21]",
      "(\"nome\": \"Bia\", \"idade\": 21)",
      "{\"Bia\", 21}"
    ],
    answer: "{\"nome\": \"Bia\", \"idade\": 21}",
    output: "Bia",
    hint: "Dicionários (dict) usam chaves {} e pares separados por dois-pontos (chave:valor)."
  },

  // 7. Dicionários (Acesso por Chave)
  {
    tema: "Variáveis Compostas (Dicionários)",
    title: "Acessando valores pela chave",
    prefix: "carro = {\"marca\": \"Ford\", \"modelo\": \"Ka\"}\n# Obter o modelo do carro\nmodelo_carro = carro",
    blank: "_____",
    suffix: "\nprint(modelo_carro)",
    options: [
      "['modelo']",
      "[1]",
      "('modelo')",
      ".modelo"
    ],
    answer: "['modelo']",
    output: "Ka",
    hint: "Em dicionários, acessamos valores usando colchetes [] com o nome da *chave* (string), não um índice numérico."
  },

  // 8. Classes (Definição)
  {
    tema: "Classes (OOP)",
    title: "Definindo uma classe",
    prefix: "# Define um 'molde' para criar objetos 'Carro'\n",
    blank: "_____",
    suffix: " Carro:\n  pass # 'pass' significa 'nada ainda'",
    options: [
      "class",
      "def",
      "object",
      "struct"
    ],
    answer: "class",
    output: null,
    hint: "Usamos a palavra-chave 'class' para definir uma nova classe (um tipo de objeto)."
  },

  // 9. Classes (Construtor __init__)
  {
    tema: "Classes (OOP)",
    title: "O método construtor (__init__)",
    prefix: "class Pessoa:\n  # Método executado ao criar o objeto\n  def ",
    blank: "_____",
    suffix: "(self, nome):\n    self.nome = nome\n\np = Pessoa(\"Leo\")\nprint(p.nome)",
    options: [
      "__init__",
      "__start__",
      "__new__",
      "__constructor__"
    ],
    answer: "__init__",
    output: "Leo",
    hint: "O método construtor em Python é chamado '__init__'. O 'self' se refere à própria instância do objeto."
  },

  // 10. Classes (Atributos 'self')
  {
    tema: "Classes (OOP)",
    title: "Armazenando atributos com 'self'",
    prefix: "class Cachorro:\n  def __init__(self, nome):\n    # Armazena 'nome' no objeto\n    ",
    blank: "_____",
    suffix: ".nome = nome\n\n  def latir(self):\n    print(f\"{self.nome} diz: Au au!\")\n\nrex = Cachorro(\"Rex\")\nrex.latir()",
    options: [
      "self",
      "Cachorro",
      "this",
      "objeto"
    ],
    answer: "self",
    output: "Rex diz: Au au!",
    hint: "Dentro de um método de classe, 'self' é usado para acessar ou definir atributos (variáveis) do próprio objeto."
  }
];
const quizFuncoes = [
  // 1. Definição de Função
  {
    tema: "Definição de Funções",
    title: "Sintaxe para definir uma função",
    prefix: "# Define uma função chamada 'saudacao'\n",
    blank: "_____",
    suffix: " saudacao():\n  print(\"Olá, mundo!\")",
    options: [
      "def",
      "function",
      "fun",
      "define"
    ],
    answer: "def",
    output: null, // A definição sozinha não gera saída
    hint: "Em Python, usamos a palavra-chave 'def' para 'definir' uma nova função."
  },

  // 2. Chamada de Função
  {
    tema: "Chamada de Funções",
    title: "Executando (chamando) uma função",
    prefix: "def saudacao():\n  print(\"Olá, mundo!\")\n\n# Agora, chame a função\n",
    blank: "_____",
    suffix: "", // O sufixo é vazio
    options: [
      "saudacao()",
      "chamar saudacao()",
      "exec saudacao",
      "saudacao"
    ],
    answer: "saudacao()",
    output: "Olá, mundo!",
    hint: "Para executar uma função, escrevemos seu nome seguido de parênteses '()'."
  },

  // 3. Parâmetros
  {
    tema: "Parâmetros",
    title: "Passando dados para uma função",
    prefix: "# Uma função que recebe um 'nome'\ndef saudacao_personalizada(",
    blank: "_____",
    suffix: "):\n  print(\"Olá, \" + nome)\n\nsaudacao_personalizada(\"Ana\")",
    options: [
      "nome",
      "def nome",
      "input(nome)",
      "param nome"
    ],
    answer: "nome",
    output: "Olá, Ana",
    hint: "Variáveis definidas dentro dos parênteses da função são chamadas de 'parâmetros'."
  },

  // 4. Comando 'return'
  {
    tema: "Retorno de Valores",
    title: "Enviando dados de volta da função",
    prefix: "def somar(a, b):\n  resultado = a + b\n  ",
    blank: "_____",
    suffix: " resultado\n\ns = somar(5, 3)\nprint(s)",
    options: [
      "return",
      "print",
      "output",
      "send"
    ],
    answer: "return",
    output: "8",
    hint: "Use 'return' para enviar um valor de volta para o local onde a função foi chamada."
  },

  // 5. Escopo Local
  {
    tema: "Escopo de Variáveis",
    title: "Variável de escopo local",
    prefix: "def minha_funcao():\n  # 'msg' é uma variável local\n  msg = \"Olá\"\n  print(msg)\n\nminha_funcao()\n# Tentar acessar 'msg' aqui fora causa um erro\nprint(",
    blank: "_____",
    suffix: ")",
    options: [
      "msg",
      "minha_funcao.msg",
      "\"Olá\"",
      "global.msg"
    ],
    answer: "msg",
    output: "Olá\nNameError: name 'msg' is not defined", // O 'Olá' vem da chamada, o NameError vem do print(msg)
    hint: "Variáveis criadas dentro de uma função (escopo local) só existem dentro dela."
  },

  // 6. Escopo Global
  {
    tema: "Escopo de Variáveis",
    title: "Variável de escopo global",
    prefix: "usuario = \"Marcos\"\n\ndef saudacao_global():\n  # A função pode ler a variável global\n  print(\"Bem-vindo, \" + ",
    blank: "_____",
    suffix: ")\n\nsaudacao_global()",
    options: [
      "usuario",
      "global.usuario",
      "param usuario",
      "self.usuario"
    ],
    answer: "usuario",
    output: "Bem-vindo, Marcos",
    hint: "Funções podem ler variáveis definidas fora delas (escopo global)."
  },

  // 7. Modularização (import)
  {
    tema: "Modularização",
    title: "Importando um módulo",
    prefix: "# Importa o módulo 'math' para funções matemáticas\n",
    blank: "_____",
    suffix: " math\n\nprint(math.pi)",
    options: [
      "import",
      "include",
      "use",
      "load"
    ],
    answer: "import",
    output: "3.141592653589793",
    hint: "A palavra-chave 'import' é usada para carregar bibliotecas (módulos) externas."
  },

  // 8. Usando Funções de Módulos
  {
    tema: "Modularização",
    title: "Usando uma função importada",
    prefix: "import math\n\n# Usa a função 'sqrt' (raiz quadrada) do módulo 'math'\nraiz = ",
    blank: "_____",
    suffix: "(81)\nprint(raiz)",
    options: [
      "math.sqrt",
      "sqrt",
      "math(sqrt)",
      "math->sqrt"
    ],
    answer: "math.sqrt",
    output: "9.0",
    hint: "Para usar uma função de um módulo, use o formato 'nome_do_modulo.nome_da_funcao()'."
  },

  // 9. Parâmetros com Valor Padrão
  {
    tema: "Parâmetros",
    title: "Parâmetro com valor padrão (default)",
    prefix: "# 'pais' tem um valor padrão \"Brasil\"\ndef saudar(nome, pais",
    blank: "_____",
    suffix: "):\n  print(f\"Olá {nome} de {pais}\")\n\nsaudar(\"Carlos\") # Não precisa passar o país",
    options: [
      "= \"Brasil\"",
      ": \"Brasil\"",
      "== \"Brasil\"",
      "default \"Brasil\""
    ],
    answer: "= \"Brasil\"",
    output: "Olá Carlos de Brasil",
const quizEstruturasDecisao = [
  // 1. Estrutura Simples (if)
  {
    tema: "Estrutura Simples",
    title: "Sintaxe básica do 'if'",
    prefix: "idade = 20\n",
    blank: "_____",
    suffix: " idade >= 18:\n  print(\"Pode entrar\")",
    options: [
      "if",
      "elif",
      "else",
      "case"
    ],
    answer: "if",
    output: "Pode entrar",
    hint: "Para iniciar uma verificação condicional simples, usamos a palavra-chave 'if'."
  },

  // 2. Estrutura Composta (else)
  {
    tema: "Estrutura Composta",
    title: "Sintaxe do 'else'",
    prefix: "idade = 15\nif idade >= 18:\n  print(\"Pode entrar\")\n",
    blank: "_____",
    suffix: ":\n  print(\"Não pode entrar\")",
    options: [
      "else",
      "elif",
      "if not",
      "default"
    ],
    answer: "else",
    output: "Não pode entrar",
    hint: "O bloco 'else' captura todos os casos em que a condição 'if' principal é Falsa."
  },

  // 3. Estrutura Múltipla (elif)
  {
    tema: "Estrutura Composta (Múltipla)",
    title: "Sintaxe do 'elif'",
    prefix: "nota = 85\nif nota >= 90:\n  print(\"A\")\n",
    blank: "_____",
    suffix: " nota >= 80:\n  print(\"B\")\nelse:\n  print(\"C\")",
    options: [
      "elif",
      "else if",
      "if",
      "also"
    ],
    answer: "elif",
    output: "B",
    hint: "'elif' é a contração de 'else if' e permite verificar uma nova condição se a anterior falhou."
  },

  // 4. Sintaxe: O uso dos Dois-Pontos (:)
  {
    tema: "Sintaxe de Bloco",
    title: "Iniciando um bloco condicional",
    prefix: "numero = 10\nif numero > 5",
    blank: "_____",
    suffix: "\n  print(\"Maior que 5\")",
    options: [
      ":",
      ";",
      "{",
      "then"
    ],
    answer: ":",
    output: "Maior que 5",
    hint: "Em Python, 'if', 'elif' e 'else' exigem dois-pontos (:) para iniciar o bloco de código indentado."
  },

  // 5. Fluxo de Execução (if simples Falso)
  {
    tema: "Estrutura Simples",
    title: "Execução com condição Falsa",
    prefix: "temperatura = 10\n",
    blank: "_____",
    suffix: " temperatura > 25:\n  print(\"Está calor\")\nprint(\"Fim\")",
    options: [
      "if",
      "else",
      "elif",
      "while"
    ],
    answer: "if",
    output: "Fim", // O print("Está calor") é ignorado
    hint: "Num 'if' simples, se a condição for Falsa, o bloco indentado é simplesmente ignorado e o programa continua."
  },

  // 6. Fluxo de Execução (elif)
  {
    tema: "Estrutura Composta (Múltipla)",
    title: "Apenas um bloco executa",
    prefix: "valor = 30\nif valor > 50:\n  print(\"Alto\")\n",
    blank: "_____",
    suffix: " valor > 20:\n  print(\"Médio\")\nelif valor > 10:\n  print(\"Baixo\")",
    options: [
      "elif",
      "if",
      "else",
      "also"
    ],
    answer: "elif",
    output: "Médio",
    hint: "Mesmo que (valor > 10) também seja verdade, apenas o *primeiro* 'elif' verdadeiro (valor > 20) é executado."
  },
  
  // 7. O 'else' como "catch-all"
  {
    tema: "Estrutura Composta (Múltipla)",
    title: "O bloco 'else' final",
    prefix: "comando = \"VOAR\"\nif comando == \"CORRER\":\n  print(\"Correndo...\")\nelif comando == \"PULAR\":\n  print(\"Pulando...\")\n",
    blank: "_____",
    suffix: ":\n  print(\"Comando desconhecido\")",
    options: [
      "else",
      "elif",
      "if comando == \"VOAR\"",
      "default"
    ],
    answer: "else",
    output: "Comando desconhecido",
    hint: "O 'else' no final de uma cadeia 'if/elif' é opcional e captura qualquer caso que não se encaixe nas condições anteriores."
  },

  // 8. Operador de Comparação (==)
  {
    tema: "Condições",
    title: "Verificando igualdade",
    prefix: "cor = \"vermelho\"\nif cor ",
    blank: "_____",
    suffix: " \"vermelho\":\n  print(\"É a cor primária\")",
    options: [
      "==",
      "=",
      "!=",
      "is"
    ],
    answer: "==",
    output: "É a cor primária",
    hint: "Para *comparar* se dois valores são iguais, usamos '=='. Um único '=' é usado para *atribuição* de valor."
  },
  
  // 9. Condição com 'and'
  {
    tema: "Condições Múltiplas",
    title: "Operador 'and'",
    prefix: "idade = 25\ntem_convite = True\nif idade >= 18 ",
    blank: "_____",
    suffix: " tem_convite == True:\n  print(\"Entrada permitida\")",
    options: [
      "and",
      "or",
      "&",
      "&&"
    ],
    answer: "and",
    output: "Entrada permitida",
    hint: "O operador 'and' (E) exige que AMBAS as condições sejam verdadeiras para o bloco ser executado."
  },

  // 10. Condição com 'or'
  {
    tema: "Condições Múltiplas",
    title: "Operador 'or'",
    prefix: "dia = \"Sabado\"\nif dia == \"Sabado\" ",
    blank: "_____",
    suffix: " dia == \"Domingo\":\n  print(\"Fim de semana\")\nelse:\n  print(\"Dia útil\")",
    options: [
      "or",
      "and",
      "|",
      "||"
    ],
    answer: "or",
    output: "Fim de semana",
    hint: "O operador 'or' (OU) exige que APENAS UMA das condições seja verdadeira para o bloco ser executado."
  }
];
const quizPythonFundamentos = [
  // 1. Comando de Saída (print)
  {
    tema: "Comandos de Saída",
    title: "Exibindo uma mensagem",
    prefix: "# Programa Python para exibir Olá Mundo\n",
    blank: "_____",
    suffix: "(\"Olá Mundo\")",
    options: [
      "print",
      "escreva",
      "console.log",
      "output"
    ],
    answer: "print",
    output: "Olá Mundo",
    hint: "Em Python, a função interna para exibir dados no console é 'print()'."
  },
  
  // 2. Comando de Entrada (input)
  {
    tema: "Comandos de Entrada",
    title: "Capturando a idade do usuário",
    prefix: "# Armazenar a entrada do usuário na variável 'idade'\nidade = ",
    blank: "_____",
    suffix: "(\"Digite sua idade: \")",
    options: [
      "input",
      "leia",
      "read",
      "get"
    ],
    answer: "input",
    output: null, // A saída depende da interação
    hint: "Python usa a função interna 'input()' para capturar dados do teclado."
  },

  // 3. Tipo de Dado da Entrada (str)
  {
    tema: "Tipos de Dados (Entrada)",
    title: "Tipo de dado padrão do Input",
    prefix: "valor = input(\"Digite 5: \")\n# Qual é o tipo de 'valor'?\nprint(type(valor))",
    blank: "_____", // O blank é conceitual aqui, mas as opções são o tipo.
    suffix: "",
    options: [
      "<class 'str'>",
      "<class 'int'>",
      "<class 'float'>",
      "<class 'bool'>"
    ],
    answer: "<class 'str'>",
    output: "<class 'str'>", // O que o print(type(valor)) mostraria
    hint: "A função input() sempre retorna os dados como string (texto), mesmo que números sejam digitados."
  },

  // 4. Nomes de Variáveis Inválidos
  {
    tema: "Variáveis",
    title: "Nome de variável inválido",
    prefix: "# Qual dos seguintes nomes de variável causa um SyntaxError?\n",
    blank: "_____",
    suffix: " = 10",
    options: [
      "1_numero",
      "minha_variavel",
      "Numero1",
      "_variavel"
    ],
    answer: "1_numero",
    output: "SyntaxError: invalid syntax", // Saída esperada se tentarmos usar a resposta
    hint: "Nomes de variáveis em Python não podem começar com um dígito numérico."
  },

  // 5. Convenção de Constantes
  {
    tema: "Variáveis (Constantes)",
    title: "Convenção para constantes",
    prefix: "# Pela convenção (PEP 8), como nomeamos um valor que não deve mudar?\n",
    blank: "_____",
    suffix: " = 3.14159",
    options: [
      "PI",
      "pi",
      "const_pi",
      "Pi"
    ],
    answer: "PI",
    output: null,
    hint: "A convenção para constantes em Python é usar nomes totalmente em MAIÚSCULAS."
  },

  // 6. Operador Aritmético (Módulo %)
  {
    tema: "Operadores Aritméticos",
    title: "Operador Módulo (Resto)",
    prefix: "# Calcular o RESTO da divisão de 17 por 5\nresultado = 17 ",
    blank: "_____",
    suffix: " 5\nprint(resultado)",
    options: [
      "%",
      "/",
      "//",
      "**"
    ],
    answer: "%",
    output: "2",
    hint: "O operador '%' (módulo) retorna o que 'sobra' após uma divisão inteira."
  },

  // 7. Operador Aritmético (Potência **)
  {
    tema: "Operadores Aritméticos",
    title: "Operador de Potência",
    prefix: "# Calcular 5 elevado ao quadrado (5²)\nresultado = 5 ",
    blank: "_____",
    suffix: " 2\nprint(resultado)",
    options: [
      "**",
      "^",
      "pow",
      "*"
    ],
    answer: "**",
    output: "25",
    hint: "Em Python, dois asteriscos (**) são usados para exponenciação (elevar à potência)."
  },

  // 8. Operador Relacional (Diferente !=)
  {
    tema: "Operadores Relacionais",
    title: "Verificando 'Diferente de'",
    prefix: "a = 10\nb = 5\n# Verificar se 'a' NÃO é igual a 'b'\nif a ",
    blank: "_____",
    suffix: " b:\n  print(\"Diferente\")",
    options: [
      "!=",
      "<>",
      "NOT",
      "!=="
    ],
    answer: "!=",
    output: "Diferente",
    hint: "O operador relacional 'diferente de' em Python é '!='."
  },

  // 9. Operador Lógico (AND)
  {
    tema: "Operadores Lógicos",
    title: "Operador E (AND)",
    prefix: "condicao1 = (10 > 5)  # True\ncondicao2 = (3 == 3)  # True\nresultado = condicao1 ",
    blank: "_____",
    suffix: " condicao2\nprint(resultado)",
    options: [
      "and",
      "or",
      "&&",
      "&"
    ],
    answer: "and",
    output: "True",
    hint: "O operador lógico 'and' (E) só retorna True se AMBAS as condições forem verdadeiras."
  },

  // 10. Operador Lógico (OR / NOT)
  {
    tema: "Operadores Lógicos",
    title: "Operador OU (OR)",
    prefix: "condicao1 = not True  # False\ncondicao2 = (5 < 2)   # False\nresultado = condicao1 ",
    blank: "_____",
    suffix: " condicao2\nprint(resultado)",
    options: [
      "or",
      "and",
      "||",
      "xor"
    ],
    answer: "or",
    output: "False",
    hint: "O operador lógico 'or' (OU) retorna False somente se AMBAS as condições forem falsas."
  }
];
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
