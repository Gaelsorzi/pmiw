//Gael Sorzini y  Braian Ezequiel Bailate
let fondos = [];
let estado;
let sonidoFondo, tic;
let textos = []; 

function preload() {
  for (let i = 0; i < 10; i++) {
    fondos[i] = loadImage("data/fondo" + i + ".jpg");
  }
  sonidoFondo = loadSound('data/suspenso.mp3'); 
  tic = loadSound('data/click.mp3'); 
}

function setup() {
  createCanvas(640, 480);
  for (let i = 0; i < 10; i++) {
  fondos[i].resize(640, 480); 
  }
   estado = "inicio";
   textos = [
    "COMO VESTIR UNA SOMBRA", //0
    "Lo mas dicil es cercarla, conocer su limite alli donde se enlaza con la penumbra al borde de si misma.", //1
    "Escogerla entre tantas otras, apartarla de la luz que toda sombra respira sigilosa e peligrosamente.", //2
    "Ahora... como se viste una sombra?", //3
    "A la fuerza",//4
    "Con delicadeza",//5
    "La sombra, tenebrosa, se desvace", //6
    "Empezar entonces a vestirla como distraido, sin moverse demasiado, sin asustarla o disolverla.", //7 
    "Lo consentirá todo en su ignorancia momentánea, como si aún jugara con otra sombra, pero se inquietará al sentir la falda ajustarse y los dedos abotonando la blusa entre sus senos, rozando su garganta hasta perderse en un oscuro surtidor.", //8
    "La sombra empieza a notarse incomoda por la situacion.", //9
    "Detenerse.", //10 
    "Continuar igualmente.", //11 
    "La sombra parece agradecida al ver que logro entender lo que deseaba. Puede que, a pesar de no tener un rostro, se mas exmpresiva ahora.", //12
    "Rechazará la coronación con la peluca rubia flotante y rápidamente se dibujará una boca con la brasa del cigarrillo, deslizándose anillos y pulseras en sus manos, mientras los labios recién formados murmuran el lamento de quien despierta al mundo.", //13
    "La sombra se niega a que esto continue y decide poner un alto.", //14
    "Dejarla ir.", //15
    "Insistir.", //16
    "La sombra huye, ocultandose junto a otras sombras en la oscuridad esperando no desvanecerse ante la luz del sol.", //17
    "Faltarán los ojos, que surgirán de las lágrimas. La sombra luchará por completarse. El mismo impulso que la visita comenzará a despojarla, descubriendo su forma, mientras cae lentamente entre un brillo de anillos y luciérnagas húmedas.", //18
    "Tpfinalparte1", //19
    "Integrantes: Gael Sorzini y Braian Ezequiel Bailate", //20
    "Autor de la obra: Julio Florencio Cortáza",//21
    "NEXT",//22
    "BACK",//23
    "HOME",//24
    "CREDITOS",//25
  ];  
}

function draw() {
  background(219, 195, 170);
  cargarPantallas();
  fill(222, 179, 72);
  textSize(20);
  textAlign(CENTER, CENTER);
  let valorVolumen = map(mouseX, 0, width, 0.1, 1);
  sonidoFondo.amp(valorVolumen);
  }
