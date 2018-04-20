

function Snake() { //This is the Snake constructor
  this.x = 0; //Value of X
  this.y = 0; //Value of Y
  this.xspeed = 1; //Start snake travel to right
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) { //When the distance between the snake and food is less than 1 pixel
      this.total++; //Add one to the total
      document.getElementById('showScore').innerHTML = this.total;
      fRate++;
      eat.soundVolume(1.0);
      eat.play();
      return true;
    }
    else {
      return false;
    }
  }

  this.dir = function(x,y) {
    this.xspeed = x;
    this.yspeed = y;
  }
  
  this.death = function() {
    if ((this.x < 0) || (this.x > w - scl) || (this.y < 0) || (this.y > h - scl)) {
      this.tail = [];
      this.total = 0;
      document.getElementById('showScore').innerHTML = "You have died.";
      noLoop();
    }
    
    for (var i = 0; i < this.tail.length - 1; i++) {
      var pos = this.tail[i + 1];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.tail = [];
        this.total = 0;
        document.getElementById('showScore').innerHTML = "You have died.";
        noLoop();
      }
    }
  }
  
  this.update = function() {
    for (var i = 0; i < this.tail.length -1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    
    if (this.total >= 1) {
      this.tail[this.total - 1] = createVector(this.x, this.y);
    }
    
    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;
    //this.x = constrain(this.x, 0, width - scl);
    //this.y = constrain(this.y, 0, height-scl);
    document.getElementById('showScore').innerHTML = this.x + " " + this.y;
}

  this.show = function() { //This is the inherent design of the snake
    fill(255,255,255); //This is the color of the snake
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x,this.y,scl,scl);//Start at 0,0 and move outwards evenly toward tje value of scl
  }
}

function foodLocation() {
 var cols = floor(width / scl); //Make cols 20 pixels wide
 var rows = floor(height / scl); //Make rows 20 pixels wide
 food = createVector(floor(random(cols)), floor(random(rows))); //Generates random position for the food
 food.mult(scl);
}





