function setup() {
  createCanvas(windowWidth, windowHeight);
}

let mode = 'Stainglass' // default mode

function draw() {
   background(71, 230, 234);
   stroke(255);
   randomSeed(0);
     
   let xlength = map(mouseX, 0, windowWidth, 1, windowWidth/9); //devide into 9 sections
   let ylength = map(mouseY, 0, windowHeight, 0, windowHeight/6); //devide into 6 sections
   
   for (let x = 0; x < windowWidth; x += windowWidth/9) {
     for (let y = 0; y < windowHeight; y += windowHeight/3) {
       strokeWeight(7); // point x, y at each section and designate strokeWeight
     switch(mode) {
      case 'Stainglass' :
     line(x, 0, x, windowHeight);
     line(0, y, windowWidth, y); 
     stroke(0);
     fill(random(255), random(255), random(255), random(255), random(255)); 
     rect(x, y, xlength, ylength); 
     rect(x, y+windowHeight/6, xlength, ylength); //make default rectangle 9x6
     triangle(x, y, x + (xlength/2), y + ylength, x + xlength, y); //make triangle at odd line
     let y2 = windowHeight;        
     triangle(x, y2, x + (xlength/2), y + ylength, x + xlength, y2); //make triangle at down->top      
     
     fill(random(255), random(255), random(255), random(255), random(255));
       rect(x+ (xlength/2), y+(ylength/2), xlength/2, ylength/2); //make little rectangle at odd line (right-down side)
     fill(random(255), random(255), random(255), random(255), random(255));
       rect(x, y, xlength/2, ylength/2); //make little rectangle at odd line(left-up side)
     fill(random(255), random(255), random(255), random(255), random(255));
       rect(x, y+ ylength/2, xlength/2, ylength/2); //make little rectangle at odd line(left-down side)
     break;
 
     case 'circle': 
     delta = map(mouseX, 0, windowWidth, 0, 15);
     strokeWeight(delta);  //make circle mode and strokeweight random
        
     if (y < windowHeight/3) {
       stroke(random(255), 0, 0);
       fill(random(255), 0, 0);
       ellipse(x, y+75, xlength, ylength); } //make ellipses at first line
       
     else if (y >= windowHeight/3 && y < (windowHeight/3)*2) {
       stroke(0, random(255), 0);
       fill(0, random(255), 0);
       ellipse(x, y+35, xlength, ylength); } //make ellipses at second line
       
     else if (y >= (windowHeight/3)*2) {
     stroke(0, 0, random(255));
     fill(0, 0, random(255));
     ellipse(x, y, xlength, ylength); } //make ellipses at third line
     break;          
       }
     }
   }  
}
   

function keyPressed() {
  switch(key) {
    case 'a': mode = 'Stainglass';
    break;
    case 'b': mode = 'circle'; //make keys to control mode
    break;
  }
print(mode);
}