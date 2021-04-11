let lasers = [];
class laserupdown {
  constructor(x, y, vy, rx, ry, tx, c) {
    this.x = x;
    this.y = y;
    this.vy = vy;
    this.rx = rx
    this.ry = ry;
    this.tx = tx;
    this.c = c;
  }
  move() {
    this.y += this.vy;
    this.ry -= this.vy
    if (this.y > windowHeight) {this.y = 0}
    if (this.ry < 0) {this.ry = -17}
  }
 
  
  render() 
  { if (mouseIsPressed) {
    if (key =='1') {
    stroke(72, 76, 224);
    strokeWeight(0.3);
    fill(this.c);
    triangle(this.x, this.y, this.x+5, this.y+10, this.x+10, this.y); 
    //lefttriangle 
    triangle(this.tx, this.y, this.tx+5, this.y+10, this.tx+10, this.y); 
    //righttriangle
    triangle(this.rx, this.ry, this.rx+5, this.ry-10, this.rx+10, this.ry);
    //centertriangle
    }   
    
    if (key == '2') {
     stroke(52, 234, 248);
     strokeWeight(0.3);
     rect(this.x, this.y, random(0, 10), random(0,10) ); 
     //lefttrectangle
     rect(this.tx, this.y, random(0, 10), random(0, 10) );
     //rightrectangle
     rect(this.rx, this.ry, 8, 8 );
     //centerrectangle
     
    }
    
    if (key == '3') {
      stroke(219, 232, 44);
      strokeWeight(0.3);
      ellipse(this.x, this.y, 10, 10);
      //leftellipse
      ellipse(this.tx, this.y, 10, 10);
      //rightellipse
      ellipse(this.rx, this.ry, 10, 10);
      //centerellipse
  }
  }
}
}   
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i <1000; i++) {
      lasers[i] = new laserupdown(
      random(0, 30), random(0, 30), //this.x, this.y
      random(0, 5), //this.vy
      random(windowWidth/2-30, windowWidth/2+30), random(0, windowHeight), //this.rx, this.ry
      random(windowWidth-30, windowWidth), // this.tx
      color(random(0, 50), random(0, 50), random(0, 50)) ); //this.c
    }
  }
  
  function draw() {
    background(0);
    for (let laser of lasers) {
      laser.move();
      laser.render();
    }
  }
