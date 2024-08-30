let obra;
let columnas = 8;
let filas=8;
let tam;

function copiaObra() {
  for (let i = columnas / 2; i < columnas; i++) {
    for (let j = 0; j < filas; j++) {
      let x = i * tam;
  let y = j * tam;
  let distancia = dist(mouseX, mouseY, x, y);
  let tono = cambioDeColor(distancia, width, height, 600, 200);
  let tamaño = map(mouseX, 0, width, 100, columnas);
  formas(i, j, x, y, tono, tamaño);
}
    }
  }

function formas(i, j, x,y, tono, tamaño) {
  if ((i + j) % 2 == 0) {
    fill(222, 232, 245, tono);
    rect(x, y, tam, tam);
    fill(53, 71, 155, tono);
    ellipse(x + tam / 2, y + tam / 2, tamaño, tamaño);
    fill(222, 232, 245, tono);
    ellipse(x + tam / 2, y + tam * 0.6, tam * 0.7, tam * 0.7);
  } else {
    fill(53, 71, 155, tono);
    rect(x, y, tam, tam);
    fill(222, 232, 245, tono);
    ellipse(x + tam / 2, y + tam / 2, tamaño, tamaño);
   fill(53, 71, 155, tono);
    ellipse(x + tam / 2, y + tam * 0.6, tam * 0.7, tam * 0.7);
  }
}

function cambioDeColor(distancia,ancho,alto,X,Y) {
  return distancia * 255 / dist(ancho, alto, X, Y);
}
