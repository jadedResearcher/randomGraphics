//all attributes are not changed at all
function PassThru() {	this.r1 = 0;
	this.g1 = 0;
	this.b1 = 0;
	this.r2 = 0;
	this.g2 = 0;
	this.b2 = 0;

	this.nextAngle = function(angle){
	    return angle;
	}
	
	this.nextFill = function(red1,green1,blue1, red2, green2, blue2){
	   this.r1 = red1;
	   this.g1 = green1;
	   this.b1 = blue1;
	   this.r2 = red2;
	   this.g2 = green2;
	   this.b2 = blue2;
	   ret = "45-rgb(" +this.r1 + "," + this.g1 + "," + this.b1 +  ")-rgb(" + +this.r2 + "," + this.g2 + "," + this.b2 +")";
	   return ret;
	}
	
	this.nextPositionX = function(x,maxx){
	    return x;
	}

	this.nextPositionY = function(y,maxy){
	    return y;
	}
	
	this.nextSize = function(scale){
	    return scale;
	}

}

