let xsize = 400;
let ysize = 400; //posso sostituirli nel create Canvas
function setup() {
  createCanvas(xsize, ysize);
}

function draw() {
  //sfondo per cielo scuro
  background("darkblue");
  //voglio disegnare luna
  fill ("yellow");
  stroke ("white")
  strokeWeight (5)
  circle (300, 90, 50)
  //prato
  fill ("green")
  stroke ("lightgreen")
  strokeWeight (2)
  rect(0, 200, 400, 200);


  //case
  fill ("white")  
  strokeWeight (0);
  let x_casa_primordiale= 15;
  rect (x_casa_primordiale, 145, 60, 60);
  for (let i=0; i<400; i=i+140){ //for=vorrei ripetere una azione per un certo numero di volte
    rect (x_casa_primordiale+i, 145, 60, 60);
  }
  //tetti
  triangle 
}