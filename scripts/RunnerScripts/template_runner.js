var height = 1000;
var width = 1000;
var speed = 5000;
window.onload = function(){
    paper = new Raphael(document.getElementById('sim'),height,width);			
    object_list = new Array();
    makeFirst();}


		    
//make origin object
function makeFirst(){
   //(x,y,maxx,maxy, fill, stroke, scale, rotation, parent)
    var tmp_object = new TemplateObject(height/2, width/2,height,width, "", '#000', 1.0, 0, null);
    tmp_object.setColors(255,10,10,255,255,255);
    tmp_object.setPositionMutator(new RandomPosition());
    tmp_object.setColorMutator(new RandomColor());
    tmp_object.setScaleMutator(new RandomScale());
    tmp_object.setRotationMutator(new RandomAngle());
    
    var tmp_sprite = paper.path(tmp_object.path);
    tmp_object.setSprite(tmp_sprite);
};
		    

	

		


			

