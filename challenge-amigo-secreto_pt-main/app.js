let lista = [];
let nome;
let listaAmigos = document.getElementById("listaAmigos");

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

function sortearAmigo() {
  limparListaNomes();
  nomeAleatorio = Math.floor(Math.random() * lista.length);
  let resultado = lista[nomeAleatorio];
  let nomeSorteado = document.createElement("li");  
  listaAmigos.appendChild(nomeSorteado);
  nomeSorteado.textContent = `O nome sorteado é: ${resultado}`;  
  console.log(`${resultado}`) ;  
  } 
adicionarAmigo();
//limpa campo após inserir nome
function limparCampo() {
  nome = document.querySelector(".input-name");
  nome.value = "";
}

function limparListaNomes() {
  listaAmigos.innerHTML = ''
 }

 document.querySelector(".button-draw").addEventListener("click", sortearAmigo)