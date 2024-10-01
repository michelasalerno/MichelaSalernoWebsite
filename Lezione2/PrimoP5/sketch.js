function setup() {
  createCanvas(400, 400);
}

function draw() {
  //sfondo per cielo scuro
  background("darkblue");
  //voglio disegnare luna
  fill ("yellow");
  stroke ("white")
  strokeWeight (10)
  circle (300, 90, 100)
  //prato
  fill ("green")
  stroke ("lightgreen")
  strokeWeight (2)
  rect(0, 200, 400, 200);
  fill ("white")
  stroke ("black")
  strokeWeight (1);
  textSize (15);
  text ("C'era una volta...", 270, 380 )
  
}
