
 



var backgroundImg;
var particles=[];



function setup() {
  createCanvas(800,400);
  
}

function preload(){
  backgroundImg=loadImage("snow2.jpg");
  
}




function draw() {
  background(backgroundImg);  
  drawSprites();


  if(frameCount%60===0) {
    particles.push(new Particles(random(0,800),0))
    
    
    }


  for (var k = 0; k < particles.length; k++) {
    particles[k].display();
  }

}