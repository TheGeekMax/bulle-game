var bulles = [];

var img = [];

function setup() {
  
  createCanvas(400, 400);
  
  bulles[0] = new bulle(0,0,4,0,0,1);
  bulles[1] = new bulle(2,1,4,1,1,0);
  
  bulles[0].child[0] = -1;
  bulles[1].child[0] = -1;
  
  img[0] =  [];
  img[1] =  [];
  
  
  img[0][0] = loadImage('texture/coal.png');
  img[0][1] = loadImage('texture/wood.png');
  img[1][0] = loadImage('texture/torch.png');
}

function draw() {
  reset();
}

function reset(){
  background(14, 13, 51);
  removeElements();
  bulles[0].calculateCoor();
  bulles[0].show();
  bulles[1].calculateCoor();
  bulles[1].show();
  
  if(frameCount % 60 === 0){
    bulles[0].stock ++;
    //print(bulles.texture);
  }
}

function bulle(mx, my, long, type, id, text){
  this.mx = mx;
  this.my = my;
  
  this.long = long;
  this.x = 0;
  this.y = 0;
  this.stock = 0;
  
  this.child = [];
  
  this.texture = text;
  this.type = type;
  this.id = id;
  
  this.calculateCoor = function(){
    var slo = (width / long);
    
    this.x = this.mx * slo + slo / 2;
    this.y = this.my * slo + slo / 2;
  }
  
  
  this.show = function(){
    var slo = (width / long);
    
    if(this.child[0] != -1){
    var cur = this.child[0];
    stroke(255);
    line(this.x,this.y,bulles[cur].x,bulles[cur].y)
    }
    
    var txt = createDiv(this.stock);
    txt.position(this.x+2,this.y -20);
    txt.textStyle = BOLD;
    
    
    
    noStroke();
    colorMode(HSB);
    fill(map(this.type,0,2,0,255),255,255);
    ellipse(this.x, this.y ,slo -10, slo -10 );
    
    colorMode(RGB);
    
    image(img[this.type][this.texture],this.x-18,this.y-10);
  }
  
}