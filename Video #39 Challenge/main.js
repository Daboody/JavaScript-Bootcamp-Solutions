// Challenge First Part
let job = "Designer";
let salary = 0 ;

switch (job) {
  case "Manager" :
  console.log(salary = 8000);
  break;

  case "IT" :
  case "Support" :
  console.log(salary = 6000);
  break;

    case "Developer" :
    case "Designer" :
    console.log(salary = 7000);
    break;

    default :
    console.log(salary = 4000);
}

// Challenge Second part 
let holidays = 3;
let money = 0;

if(holidays == 0){
    money = 5000;
    console.log(`My Money is ${money}`);
}else if(holidays == 1 || holidays == 2){
    money = 3000;
    console.log(`My Money is ${money}`);
}else if(holidays == 3){
    money = 2000;
    console.log(`My Money is ${money}`);
}else if(holidays == 4){
    money = 1000;
    console.log(`My Money is ${money}`);
}else if(holidays == 5){
    money = 0;
    console.log(`My Money is ${money}`);
}else{
    money = 0;
    console.log(`My money is ${money}`);
}

