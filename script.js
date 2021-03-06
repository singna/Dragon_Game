var wrapper= document.body.querySelector(".wrapper"); 
var damage = Number(prompt("How much damage would you like to deal to the Dragon? (1-5)"));
var damgdragon=0;
var damguser=0;

while(damgdragon<10||damguser<5){
  var damage = Number(prompt("How much damage would you like to deal to the Dragon? (1-5)"));
  if(damage>5){
    damage=1;
  }else{
    damage=Math.floor(Math.random()*5) +1;
    wrapper.innerHTML="Dragon has been killed"
  }
  damgus=Math.floor(Math.random()*2) +1;
  damgdragon=damgdragon+damage
  damguser=damguser+damgus
  wrapper.innerHTML="User has been killed"
}