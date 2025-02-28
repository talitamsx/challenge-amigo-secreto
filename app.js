let lista = [];
let nome;
let listaSorteados = [];
let listaAmigos = document.getElementById("listaAmigos");
let exibirNomeSorteado = document.getElementById("resultado");
let botaoSortear = document.querySelector(".button-draw");
let botaoAdicionar = document.querySelector(".button-add");

// Adiciona nome à lista de amigos, exibe na tela e limpa o campo de input.
function adicionarAmigo() {
  nome = document.querySelector(".input-name").value.trim();

  if (nome === "") {
    alert("Digite um nome");
    return;
  }

  let nomeAdicionado = document.createElement("li");
  lista.push(nome); //adiciona nome a lista

  //Exibe o nome na tela
  nomeAdicionado.textContent = nome;
  listaAmigos.appendChild(nomeAdicionado);
  console.log("Lista atual:", lista);

  limparCampo();
}

//Sortear um nome aleatório
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

  //Adiciona nome sorteado na lista de sorteados
  listaSorteados.push(resultado);

  //Exibe o nome sorteado na tela
  let nomeSorteado = document.createElement("li");
  nomeSorteado.textContent = `O nome sorteado é: ${resultado}`;
  exibirNomeSorteado.appendChild(nomeSorteado);

  //Apaga nome sorteado da lista
  lista.splice(nomeAleatorio, 1);
}

//limpa campo após inserir nome
function limparCampo() {
  nome = document.querySelector(".input-name").value = "";
}

//limpa a lista de nomes exibidos na tela
function limparListaNomes() {
  listaAmigos.innerHTML = "";
  exibirNomeSorteado.innerHTML = "";
}

botaoAdicionar.addEventListener("click", adicionarAmigo);
botaoSortear.addEventListener("click", sortearAmigo);
