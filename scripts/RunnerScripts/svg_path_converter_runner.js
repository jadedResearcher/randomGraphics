

//set up jquery listener for input
window.onload = function(){
$(document).keypress(function(e) {
    if(e.keyCode == 13) {
        var path = convertAbsoluteToRelativeSVGPath($("#input")[0].value);
        $("#output")[0].value = path;
        console.log(path); 
    }
});             }




