var vs = [];
var siz = 80;
var y;
var j = 0;
var Q = 3;
var sli;
function setup() {
  y = 100;
  createCanvas(900, 400);
	sli = createSlider(0, 10, 3);
	for(var i = 0; i <= siz; i++) {
		vs[i] = createVector(i * (width/siz), y);
	}
	stroke(250);
	strokeWeight(3);
	noFill();
}

function draw() {
	j++;
  
  
  if(j == 2) {
  	Q = sli.value();
  	background(2);
	  
  	beginShape();
		  for(var i = 0; i <= siz; i++) {
		  
		  	if(i == siz) {
		  		console.log(vs[i-1].y);
		  		if((vs[i-1].y + 5 < height) && (vs[i-1].y - 15 > 0)) {
		  			vs[i].y = vs[i-1].y + random(-Q, Q);
		  		} else if(vs[i-1] - 15 <= 0) {
		  			vs[i].y = vs[i-1].y + random(0, Q);
		  		} else {
		  			 vs[i].y = vs[i-1].y + random(-Q, 0);
		  		}
		  	} else {
		  		vs[i].y = vs[i+1].y;
		  	}
		  	
		  	vertex(vs[i].x, vs[i].y);
		  }
	 	endShape();
	 	j = 0;
  }
 
}