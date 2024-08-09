let palavra;
let imagem;
let musica;

function preload() {
  imagem = loadImage("coxinha.png");
  musica = loadSound("musica.mp3");
}

function setup() {
  createCanvas(600, 600);
  palavra = palavraAleatoria();
  musica.loop();
}

function draw() {
  background("#2196F3");
  image(imagem, 0, 0, 600, 600);
  inicializacores();
  let quantidade = map(mouseX, 0, width, 0, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 300, 300);
}

function palavraAleatoria() {
  let palavras = ["o", "tata", "é", "fota", "vó", "nada", "frio", "do", "taraio"];
  return random(palavras);
}

function inicializacores() {
  fill("lightblue");
  textSize(64);
  textAlign(CENTER, CENTER);
}