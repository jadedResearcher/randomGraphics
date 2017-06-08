
//takes in an absolute path and converts it to a relative one
//assume stripped of letters and is just pairs of things.
function convertAbsoluteToRelativeSVGPath(path){
   var arr = path.split(" ");
   //first grab each pair of coordinates out.
   arr = pathToRelativeArray(arr);
   return arrayToPath(arr);
}

//takes in a path in string form (comma separated point values separated by spaces 45,234 23,32  etc)
//while doing that, converts whole thing to relative values
//shaves off the first value as the thing its relative to
function pathToRelativeArray(arr){
   var ret = [];
   for(var i in arr){
       arr[i] = arr[i].split(",");
       //now subtract next element from this one, if it exists.
       if(i != 0 && arr[i].length == 2){
          var x = arr[i][0] - arr[i-1][0];
          var y = arr[i][1] - arr[i-1][1]
          ret.push([x,y]);
       }//end if       
   }//end for
   return ret;
}


//takes an array of points and converts back into path
function arrayToPath(arr){
    var ret = "";
    for(var i in arr){
        ret += " " + arr[i][0] + "," + arr[i][1];
    }
    return ret;
}
