let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,z";

let solution = myString.split(",").filter(function(ele){
    return isNaN(parseInt(ele));

}).map(function (ele){
return ele === "_" ? " " : ele ;

}).reduce(function (acc,current){
    return `${acc}${current}`;
});


console.log(solution);