var height = 500;
var width = 600;
var paper;
var crosshair;
window.onload = function(){
    paper = new Raphael(document.getElementById('sim'),height,width);
    //do I REALLY have to do this to animate gradient, seems ridiculous...
    paper.customAttributes.gradient = function (grad) {
        return {fill: grad};
    };
	
    crosshair = paper.circle($("#x")[0].value,$("#x")[0].value,5,5);
    crosshair.attr({stroke: "#fff", fill: "#000"});
    $("#sim").click(function(event) {
        ($("#x")[0].value = event.layerX);
        ($("#y")[0].value = event.layerY);
        crosshair.animate({cx: event.layerX, cy: event.layerY}, 100);
        crosshair.toFront();
        
    });
    
    $("#x").change(function() {
       //have to have it twice 'cause .change doesn't fire when i click and manually
       //change the value
       crosshair.animate({cx: this.value}, 100);
       crosshair.toFront();
    });
    
    $("#y").change(function() {
       crosshair.animate({cy: this.value}, 100);
       crosshair.toFront();
    });
    setUpControls();	}

function setUpControls(){
   $("#Generate").click(generate);
   $("#Clear").click(clear);
}
//all attributes for the TemplateObject come from a form
function generate(){
  var x = Math.random() * width;
  var y = Math.random() * height;
  if($("#x")[0].value > 0 || $("#x")[0].value < width){
     x = parseInt($("#x")[0].value);
  }
  
  if($("#y")[0].value > 0 || $("#y")[0].value < height){
     y = parseInt($("#y")[0].value);
  }
  var cmut = getColorMutator();
  var r1 = cmut.r1;
  var g1 = cmut.g1;
  var b1 =cmut.b1;
  var r2 = cmut.r2;
  var g2 = cmut.g2;
  var b2 = cmut.b2;
  var scale = 1.0;
  var rotation = 0;
  var stroke = "#000";
  var path = getShape().path;
  var pmut = getPositionMutator();
  var smut = getScaleMutator();
  var rmut = getRotationMutator();
  var number = $("#number")[0].value;
  var tmp_object = new TemplateObject(path, x, y,height,width, "", stroke, scale, rotation, number, null);
  
  tmp_object.setColors(r1,g1,b1,r2,g2,b2);
  tmp_object.setPositionMutator(pmut);
  tmp_object.setColorMutator(cmut);
  tmp_object.setScaleMutator(smut);
  tmp_object.setRotationMutator(rmut);
  
  //set animations before sprite (setting sprite calls any applicable animations)
  var animation_path = getAnimationShape().path;
  var animation_speed = parseInt($("#speed")[0].value);
  var shape = $("#shape_animation")[0].checked;
  var position = $("#position_animation")[0].checked;
  var scale = $("#scale_animation")[0].checked;
  var rotation = $("#rotation_animation")[0].checked;
  var color = $("#color_animation")[0].checked;
  tmp_object.setAnimationParams(shape, position, scale, rotation, color, animation_path, animation_speed);
   
  var tmp_sprite = paper.path(tmp_object.path);
  tmp_object.setSprite(tmp_sprite);
  

}

function getShape(){
   var shape = $("#shape")[0].value;
   if(shape == "Butterfly"){
      return new Butterfly();
   }else if(shape == "Spiral"){
      return new Spiral();
   }else if(shape == "Smoosh"){
      return new Smoosh();
   }else if(shape == "Starburst"){
     return new Starburst();
   }else if(shape == "Seed"){
     return new Seed();
   }else if(shape == "Sun"){
     return new Sun();
   }else if(shape == "Flower"){
     return new Flower();
   }else if(shape == "Star"){
     return new Star();
   }else if(shape == "Splat"){
     return new Splat();
   }else if(shape == "CursiveJ"){
     return new CursiveJ();
   }   
}

function getAnimationShape(){
   var shape = $("#animation_shape")[0].value;
   if(shape == "Butterfly"){
      return new Butterfly();
   }else if(shape == "Spiral"){
      return new Spiral();
   }else if(shape == "Smoosh"){
      return new Smoosh();
   }else if(shape == "Starburst"){
     return new Starburst();
   }else if(shape == "Seed"){
     return new Seed();
   }else if(shape == "Sun"){
     return new Sun();
   }else if(shape == "Flower"){
     return new Flower();
   }else if(shape == "Star"){
     return new Star();
   }else if(shape == "Splat"){
     return new Splat();
   }else if(shape == "CursiveJ"){
     return new CursiveJ();
   }   
}

function getPositionMutator(){
   var id = $("#position_mutator")[0].value;
   return getMutator(id);
}

function getColorMutator(){
   var id = $("#color_mutator")[0].value;
   return getMutator(id);
}

function getScaleMutator(){
   var id = $("#scale_mutator")[0].value;
   return getMutator(id);
}

function getRotationMutator(){
   var id = $("#rotation_mutator")[0].value;
   return getMutator(id);
}

function getMutator(id){
   if(id == "Random"){
      return new Random();
   }else if(id == "RandomGradual"){
      return new RandomGradual();
   }else if(id == "RandomReds"){
      return new RandomReds();
   }else if(id == "RandomGreens"){
      return new RandomGreens();
   }else if(id == "RandomBlues"){
      return new RandomBlues();
   }else if(id == "DirectionalGradual"){
      return new DirectionalGradual();
   }else if(id == "DirectionalGradualPastels"){
      return new DirectionalGradualPastels();
   }else if(id == "DirectionalGradualDarks"){
      return new DirectionalGradualDarks();
   }else if(id == "DirectionalGradualHorizontalLines"){
      return new DirectionalGradualHorizontalLines();
   }else if(id == "DirectionalGradualVerticalLines"){
      return new DirectionalGradualVerticalLines();
   }else if(id == "PassThru"){
      return new PassThru();
   }  
}

function clear(){
   paper.clear();
   crosshair = paper.circle($("#x")[0].value,$("#x")[0].value,5,5);
   crosshair.attr({stroke: "#fff", fill: "#000"});
}

		    

	

		


			

