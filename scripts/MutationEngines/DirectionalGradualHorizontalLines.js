//keeps the direction of the parent, gradually changes over generations but only in a horizontal or vertical line
function DirectionalGradualHorizontalLines() {
        //has to remember selected color to give to object, not just fill	this.r1 = 0;
	this.g1 = 0;
	this.b1 = 0;
	this.r2 = 0;
	this.g2 = 0;
	this.b2 = 0;
	this.changeX = true;
	this.changeY = false;
	this.directionX = randomSign();
        this.directionY = randomSign();
	this.directionRed = randomSign();
	this.directionBlue = randomSign();
	this.directionGreen = randomSign();
	this.directionScale = randomSign();
	this.directionAngle = randomSign();
        
	this.nextFill = function(red1,green1,blue1, red2, green2, blue2){
	   this.r1 = Math.min(255, Math.floor(Math.random() * 35  * this.directionRed + red1));
	   this.g1 = Math.min(255, Math.floor(Math.random() * 35  * this.directionGreen + green1));
	   this.b1 = Math.min(255, Math.floor(Math.random() * 35  * this.directionBlue + blue1));
	   this.r2 = Math.min(255, Math.floor(Math.random() * 35  * this.directionRed + red2));
	   this.g2 = Math.min(255, Math.floor(Math.random() * 35  * this.directionGreen + green2));
	   this.b2 = Math.min(255, Math.floor(Math.random() * 35  * this.directionBlue + blue2));
	   //no negatives
	   this.r1 = Math.max(0, this.r1);
	   this.g1 = Math.max(0, this.g1);
	   this.b1 = Math.max(0, this.b1);
	   this.r2 = Math.max(0, this.r2);
	   this.g2 = Math.max(0, this.g2);
	   this.b2 = Math.max(0, this.b2);
	   this.redirectColors();  
	   
	   ret = "45-rgb(" +this.r1 + "," + this.g1 + "," + this.b1 +  ")-rgb(" + +this.r2 + "," + this.g2 + "," + this.b2 +")";
	   return ret;
	}
	
	//go in different direction if you hit max or min.
	this.redirectColors = function(){
	   if(this.r1 > 250 || this.r2 > 250 || this.r1 < 10 || this.r2 < 10){
	      this.directionRed = - this.directionRed;
	   }
	   
	   if(this.g1 > 250 || this.g2 > 250 || this.g1 < 10 || this.g2 < 10){
	      this.directionGreen = - this.directionGreen;
	   }
	   
	   if(this.r1 > 250 || this.r2 > 250 || this.b1 < 10 || this.b2 < 10){
	      this.directionBlue = - this.directionBlue;
	   }
	}
	
	//changes x position until it hits a wall, then changes y position once
	this.nextPositionX = function(x,maxx){
	    var ret = x;
	    if(this.changeX){
	        ret = Math.min(maxx-10, x + Math.random() * maxx/10 * this.directionX);
	        ret = Math.max(10, ret);
	        //if near max or min, switch directions
	        if(Math.abs(ret-maxx) < 11  || ret < 11){
	            this.directionX = -this.directionX;
	            this.changeY = true;
	            this.changeX = false;
	        }
	    }
	    return ret;
	}
	
        //only changes y position once per horizontal line
	this.nextPositionY = function(y,maxy){
	    var ret = y;
	    if(this.changeY){
	        ret = Math.min(maxy-10, y + Math.random() * maxy/10 * this.directionY);
	        ret = Math.max(10, ret);
	        if(Math.abs(ret-maxy) < 11 || ret < 11 ){
	            this.directionY = -this.directionY;
	            this.changeY = false;
	            this.changeX = true;	        
	        }
	    }
	    this.changeY = false;
	    this.changeX = true;
	    return ret;
	}
	
	this.nextSize = function(scale){
	    ret =  Math.random()  * this.directionScale + scale ;
	    ret = Math.max(0.5, ret);
	    ret = Math.min(3, ret);
	    if(ret == 0.5 || ret == 3){
	       this.directionScale = - this.directionScale;
	    }
	    return ret;
	}
	
	this.nextAngle = function(angle){
	    ret =  Math.random() * 10 * this.directionAngle + angle;
	    ret = Math.max(0, ret);
	    ret = Math.min(360, ret);
	    if(ret == 0 || ret == 360){
	       this.directionAngle = -this.directionAngle;
	    }
	    return ret;
	}
	
	function randomSign(){
	  var arr = [1,-1, 1, -1, 1, 1 ,1];
	  var ret = arr[Math.floor(Math.random() * 6)];
	  return ret;
	}		
}

