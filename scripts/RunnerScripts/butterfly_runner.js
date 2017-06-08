var height = 800;
var width = 800;
var speed = 5000;
window.onload = function(){
    paper = new Raphael(document.getElementById('sim'),height,width);			
    makeFirst();}


		    
//make origin object
function makeFirst(){
    var shape = new Butterfly();
    //TemplateObject(path, x,y,maxx,maxy, fill, stroke, scale, rotation, number, parent)
    var tmp_object = new TemplateObject(shape.path, width/2, height/2,width,height, "", '#000', 1, 0, 50, null);
    tmp_object.setColors(Math.random()*255,Math.random()*255,Math.random()*255,Math.random()*255,Math.random()*255,Math.random()*255);
    tmp_object.setPositionMutator(new DirectionalGradual);
    tmp_object.setColorMutator(new DirectionalGradual());
    tmp_object.setScaleMutator(new DirectionalGradual());
    tmp_object.setRotationMutator(new DirectionalGradual());
    
    var tmp_sprite = paper.path(tmp_object.path);
    tmp_object.setSprite(tmp_sprite);
};
		    


		


			

