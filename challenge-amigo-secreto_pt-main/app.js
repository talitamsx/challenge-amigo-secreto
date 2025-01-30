//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let lista = [];
let nome;
console.log(lista);
function adicionarAmigo() {
  nome = document.querySelector("input").value; //pega valor de input
  if (nome.trim() !== "") {
    //verifica se o campo esta vazio
    lista.push(nome); //adiciona nome a lista

    console.log(lista);
  } else {
    alert("Digite um nome");
  }
  limparCampo();
}
function limparCampo() {
  nome = document.querySelector("input");
  nome.value = "";
}

adicionarAmigo();
