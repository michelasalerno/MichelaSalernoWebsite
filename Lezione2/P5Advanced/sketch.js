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
  strokeWeight (10)
  circle (300, 90, 100)
  //prato
  fill ("green")
  stroke ("lightgreen")
  strokeWeight (2)
  rect(0, 200, 400, 200);
  stroke ("yellow");
  strokeWeight (30);
  let x_stella_primordiale= 10;
  let y_stella_primordiale= 20;
  point (x_stella_primordiale, y_stella_primordiale);
  let passo=1;
  for (let i=0; i<50; i=i+passo){ //for=vorrei ripetere una azione per un certo numero di volte
    strokeWeight (i*3);
    // vogliamo che 0-->y, 1-->w, 2-->y
    if (i%2 == 0) {
      // numeri pari
      //corpo di ramo vero
      stroke ("yellow");
    } else {
      //numeri dispari
      //altrimenti questo
      stroke ("pink");
    }
    
    point(x_stella_primordiale*i, y_stella_primordiale+i);
    
    
  }

  //aggiungo un'altra stella
  // point (x_stella_primordiale,100);
  // point (x_stella_primordiale+70, 100); //in questo modo abbiamo un comportamento parametrico
  // point (75, 30); //punto aggiunto con valori
  fill ("white");
  stroke ("black");
  strokeWeight (1);
  textSize (15);
  text ("C'era una volta...", 270, 380 )
  
}
