var wrapper= document.body.querySelector(".wrapper"); 
var damage = Number(prompt("How much damage would you like to deal to the Dragon? (1-5)"));
var totaldragondamage=0;
var totaluserdamage=0;

while(totaluserdamage<5||totaldragondamage<10){
  var damage = Number(prompt("How much damage would you like to deal to the Dragon? (1-5)"));
  randomdamagetodragon=Math.floor(Math.random()*damage) +1;
  if(randomdamagetodragon>5){
   totaldragondamage=totaldragondamage+1;
  }else{
    totaldragondamage= totaldragondamage + randomdamagetodragon;
  }
  randomdamagetouser=Math.floor(Math.random()*2) +1;
 totaluserdamage=totaluserdamage+randomdamagetouser;
}

if(totaluserdamage>=5){
  wrapper.innerHTML="User has been killed"
}else if (totaldragondamage>=10){
  wrapper.innerHTML="Dragon has been killed."
}