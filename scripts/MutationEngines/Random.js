//all attributes are randomized
function Random() {
        //values for first object	this.r1 = Math.floor(Math.random() * 255);
	this.g1 = Math.floor(Math.random() * 255);
	this.b1 = Math.floor(Math.random() * 255);
	this.r2 = Math.floor(Math.random() * 255);
	this.g2 = Math.floor(Math.random() * 255);
	this.b2 = Math.floor(Math.random() * 255);

	this.nextAngle = function(angle){
	    return Math.random() * 360;
	}
	
	this.nextFill = function(red1,green1,blue1, red2, green2, blue2){
	   this.r1 = Math.floor(Math.random() * 255);
	   this.g1 = Math.floor(Math.random() * 255);
	   this.b1 = Math.floor(Math.random() * 255);
	   this.r2 = Math.floor(Math.random() * 255);
	   this.g2 = Math.floor(Math.random() * 255);
	   this.b2 = Math.floor(Math.random() * 255);
	   ret = "45-rgb(" +this.r1 + "," + this.g1 + "," + this.b1 +  ")-rgb(" + +this.r2 + "," + this.g2 + "," + this.b2 +")";
	   return ret;
	}
	
	this.nextPositionX = function(x,maxx){
	    return Math.random() * maxx;
	}

	this.nextPositionY = function(y,maxy){
	    return Math.random() * maxy;
	}
	
	this.nextSize = function(scale){
	    return Math.random() * 2 + 0.5;
	}

}

