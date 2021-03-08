var dam = document.body.querySelector(".damage");
var udam=document.body.querySelector(".udamage");
var result= document.body.querySelector(".result");
var amount= prompt("How many hits do you want to try (up to 5)?")
var user= 5;
var dragon=10;
var udamage;
while(user<5&&dragon<10){
 damage= Math.floor(Math.random() * amount);
  if (damage>5){damage=amount+1;}
  else{ dragon= 10 -damage;}

  udamage= Math.floor(Math.random() * 2)+1;
  user=5-udamage;
  dam.innerHTML="The dragon's health is at:" +dragon;
udam.innerHTML="The user's health is at:" +user;
}
if(user<1){
  result.innerHTML="The dragon wins.";
}else{
  result.innerHTML="The user wins!";
}