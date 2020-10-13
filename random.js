//create shield power up
//High speed power up
//repair power up - life again - not right now
//create electric coins - increases charge
//fallen trees
//broken buildings

//create stray animals - moving (crossing the street)
function strays1(){
    
      var animal = createSprite(0,600);
      var rand = Math.round(random(1,2));
      if(rand===1){
           animal.addAnimation("walk cat",catImg);
           animal.scale=0.5;
      }
      else{
          animal.addAnimation("walk dog",dogImg);
          animal.scale=0.5;
      }
      animal.velocityX = 3;
      animal.velocityY = 0.5;
      animal.lifetime = 230;
}

function strays2(){
    
    var animal = createSprite(700,600);
    var rand = Math.round(random(1,2));
    if(rand===1){
        animal.addAnimation("walk cat",catImg);
        animal.scale=0.5;
    }
    else{
        animal.addAnimation("walk dog",dogImg);
        animal.scale=0.5;
    }
    animal.velocityX = 3;
    animal.velocityY = 0.5;
    animal.lifetime = 230;
}



