let lista = [];
let nome;
let listaSorteados = []; //armazena nomes sorteados
let listaAmigos = document.getElementById("listaAmigos"); //faz referência ao elemento id "listaAmigos", permitirá que adicione ou remova os itens dentro dele
let exibirNomeSorteado = document.getElementById("resultado"); //faz referência ao elemento id "resultado", permitirá exibir os nomes sorteados dentro de "resutado"
let botaoSortear = document.querySelector(".button-draw"); //retorna o primeiro elemento encontrado com a classe "button-draw".
let botaoAdicionar = document.querySelector(".button-add");


// Adiciona nome à lista de amigos, exibe na tela e limpa o campo de input.
function adicionarAmigo() {
  nome = document.querySelector(".input-name").value.trim(); //pega valor de input  e remove espaços em branco

  console.log("adicionarAmigo() foi chamada");

  //verifica se o campo esta vazio
  if (nome === "") {
    alert("Digite um nome");
    return;
  }

  let nomeAdicionado = document.createElement("li"); //cria um elemento <li> para listar os nomes
  
  lista.push(nome); //adiciona nome a lista

  
      //Exibe o nome na tela
    nomeAdicionado.textContent = nome;  
    listaAmigos.appendChild(nomeAdicionado);
    console.log("Lista atual:", lista);

  limparCampo();
}

function sortearAmigo() {
  // Limpa a exibição dos nomes antes de sortear
  limparListaNomes();

  if (lista.length === 0) {
    alert("TODOS OS NOMES FORAM SORTEADOS! SORTEIO REINICIADO");
    return;
  }

  //sorteia um nome aleatório (indice)
  let nomeAleatorio = Math.floor(Math.random() * lista.length);
  let resultado = lista[nomeAleatorio];

  //Apaga nome sorteado da lista
  lista.splice(nomeAleatorio, 1);

  //Adiciona nome sorteado na lista de sorteados
  listaSorteados.push(resultado);

  //Exibe o nome sorteado na tela
  let nomeSorteado = document.createElement("li");  
  nomeSorteado.textContent = `O nome sorteado é: ${resultado}`;  
  exibirNomeSorteado.appendChild(nomeSorteado);
  
  console.log(`${resultado}`);
  console.log(`Lista de sorteados: ${listaSorteados}`);  
  } 

// adicionarAmigo();

//limpa campo após inserir nome
function limparCampo() {
  nome = document.querySelector(".input-name").value = "";
  // nome.value = "";
}

//limpa a lista de nomes exibidos na tela
function limparListaNomes() {
  listaAmigos.innerHTML = "";
  exibirNomeSorteado.innerHTML = "";
 }

 botaoAdicionar.addEventListener("click", adicionarAmigo);
 botaoSortear.addEventListener("click", sortearAmigo);

//  document.querySelector(".button-add").addEventListener("click", adicionarAmigo);
//  document.querySelector(".button-draw").addEventListener("click", sortearAmigo);