// Viron lippu
// Tehnyt Tuomas Lehti 18.1.2019

// Viron lipun määrittely viroksi:
// https://et.wikipedia.org/wiki/Eesti_lipp

// Lipun leveys 11 yksikköä, korkeus 7 yksikköä
// Marginaali 1 yksikkö per sivu
// Suurennuskerroin 50

function setup() {
  createCanvas(50*(1+11+1), 50*(1+7+1));
}

function draw() {
  background(200);
  noStroke();
	
  // Sininen raita
  fill(0, 114, 206);
  rect(50*1, 50*1, 50*11, 50*(7/3));
  
  // Musta raita
  fill(0);
  rect(50*1, 50*(1+7/3), 50*11, 50*(7/3));
  
  // Valkoinen raita
  fill(255);
  rect(50*1, 50*(1+14/3), 50*11, 50*(7/3));
}
