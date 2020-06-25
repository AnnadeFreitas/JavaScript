//function
function clicou() {
  document.getElementById("agradecimento").innerHTML =
    "<b>Obrigada por clicar!</b>";
}

function redirecionar() {
  window.open("https://www.google.com.br"); // abre em outra aba
  window.location.href = "https://www.google.com.br"; // abre na mesma página
}
function trocar(elemento) {
  //document.getElementById("mousemove").innerHTML =
  elemento.innerHTML = "Obrigada por passar o mouse!";
}
function voltar(elemento) {
  //document.getElementById("mousemove").innerHTML =
  elemento.innerHTML = "Passe o mouse aqui";
}
function load() {
  alert("Página carregada");
}
function funcaoChange(elemento) {
  Console.log(elemento.value);
}

function soma(n1, n2) {
  return n1 + n2;
}
alert(soma(2, 5));

function validaIdade(idade) {
  var validar;

  if (idade >= 18) {
    validar = "Você pode dirigir!";
  } else {
    validar = "Você Não pode dirigir!";
  }
  return validar;
}
var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));

Date;
var d = new Date();
alert(d);
alert("Day: " + d.getDay());
alert("Month: " + d.getMonth());
alert("Year: " + d.getFullYear());
alert(d.getHours());

//Laços de repetição(loops):

for (var count = 0; count < 5; count++) {
  console.log(count);
}

//While:
var count = 1;
while (count < 5) {
  console.log(count);
  count++;
}

var count = 1;
while (count < 5) {
  alert(count);
  count++;
}

//Condicionais:

var idade = prompt("Qual sua idade?");
if (idade < 18) {
  alert("Você não pode beber!");
} else {
  alert("Beba com moderação!");
}

//Lista:
var lista = ["maça", "pera", "laranja"];
console.log(lista);
lista.push("goiaba", "uva", "morango");
console.log(lista);
lista.pop("maça", "uva");
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));

//Dicionário:

var fruta = [
  { name: "apple", collor: "red" },
  { name: "melon", collor: "yellow" },
];
console.log(fruta[0].name);
console.log(fruta[1].collor);
console.log(fruta);

//Variáveis e concatenação:

var name = "Anna Waleska";
var age = 25;
var age2 = 10;
var frase = "Japão is the best team of the world";
alert(name + " have " + age + " years!");

alert(age + age2);

//Funções da linguagem:

console.log(name);
console.log(age + age2);
console.log(frase.replace("Japão", "Brasil"));
alert(frase.replace("Japão", "Brasil"));
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
