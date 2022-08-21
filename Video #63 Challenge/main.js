function checkStatus(a , b , c){
    typeof a == "number" && typeof b == "boolean" && typeof c == "string" ? x == c && c == b && b == a && a ==x :""; 
    typeof a == "boolean" && typeof b == "string" && typeof c == "number" ? x == b && b == c && c == a && a == x : "" ;
    typeof a == "string" && typeof b == "boolean" && typeof c == "number" ? x == c && c == b && b == x : "" ; 
    typeof a == "boolean" && typeof b == "number" && typeof c == "string" ? x == c && c == a && a == x : "" ; 
    typeof a == "number" && typeof b == "string" && typeof c == "boolean" ? x == b && b == a && a == x : ""
    c == true ? c = "You are available for hire" : c = "You are Not available for hire"; 
   return `Hello ${a}, your age is ${b},  ${c}`;
    }