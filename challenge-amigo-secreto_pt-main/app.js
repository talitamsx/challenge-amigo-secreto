//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let lista = [];
let nome;

// busca o elemento que possui o id igual a "listaAmigos"
//  Que é uma lista <ul> onde os nomes serão adicionados
let listaAmigos = document.getElementById("listaAmigos");
//console.log(lista);

// Adiciona nome à lista de amigos, exibe na tela e limpa o campo de input.
function adicionarAmigo() {
  nome = document.querySelector(".input-name").value; //pega valor de input
  let nomeAdicionado = document.createElement("li"); //cria um elemento <li> para listar os nomes

  //verifica se o campo esta vazio
  if (nome.trim() !== "") {
    lista.push(nome); //adiciona nome a lista
    nomeAdicionado.textContent = nome; // recebe o valor para mostrar na tela
    console.log(lista);
    listaAmigos.appendChild(nomeAdicionado); //mostra na tela o valor digitado
  } else {
    alert("Digite um nome");
  }
  limparCampo();
}

//limpa campo após inserir nome
function limparCampo() {
  nome = document.querySelector(".input-name");
  nome.value = "";
}

adicionarAmigo();
