//random, but only by a small amount added to the original value
function RandomGradual() {
        //has to remember selected color to give to object, not just fill        //values for first object	this.r1 = Math.floor(Math.random() * 255);
	this.g1 = Math.floor(Math.random() * 255);
	this.b1 = Math.floor(Math.random() * 255);
	this.r2 = Math.floor(Math.random() * 255);
	this.g2 = Math.floor(Math.random() * 255);
	this.b2 = Math.floor(Math.random() * 255);

	this.nextFill = function(red1,green1,blue1, red2, green2, blue2){
	   this.r1 = Math.min(255, Math.floor(Math.random() * 25  * randomSign() + red1));
	   this.g1 = Math.min(255, Math.floor(Math.random() * 25  * randomSign() + green1));
	   this.b1 = Math.min(255, Math.floor(Math.random() * 25  * randomSign() + blue1));
	   this.r2 = Math.min(255, Math.floor(Math.random() * 25  * randomSign() + red2));
	   this.g2 = Math.min(255, Math.floor(Math.random() * 25  * randomSign() + green2));
	   this.b2 = Math.min(255, Math.floor(Math.random() * 25  * randomSign() + blue2));
	   //no negatives
	   this.r1 = Math.max(0, this.r1);
	   this.g1 = Math.max(0, this.g1);
	   this.b1 = Math.max(0, this.b1);
	   this.r2 = Math.max(0, this.r2);
	   this.g2 = Math.max(0, this.g2);
	   this.b2 = Math.max(0, this.b2);
	   ret = "45-rgb(" +this.r1 + "," + this.g1 + "," + this.b1 +  ")-rgb(" + +this.r2 + "," + this.g2 + "," + this.b2 +")";
	   return ret;
	}
	
	this.nextPositionX = function(x,maxx){
	    return Math.min(maxx, x + Math.random() * maxx/10 * randomSign());
	}
	
	this.nextPositionY = function(y,maxy){
	    return Math.min(maxy, y + Math.random() * maxy/10 * randomSign());
	}
	
	this.nextSize = function(scale){
	    ret = Math.random() * randomSign() + scale;
	    //don't go out of bounds
	    ret = Math.max(0.5, ret);
	    ret = Math.min(3, ret);
	    return ret;
	}
	
	this.nextAngle = function(angle){
	    ret =  Math.random() * 360;
	    ret = Math.max(0, ret);
	    ret = Math.min(360, ret);
	    return ret;
	}
	
	function randomSign(){
	  var arr = [1,-1];
	  var ret = arr[Math.floor(Math.random() * 2)];
	  return ret;
	}		
}

