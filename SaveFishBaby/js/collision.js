function momFruitsCollision(){
    if(!data.gameOver){
        for(var i=0;i<fruit.num;i++){
            var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
            if(l<900){
                data.fruitNum++;
                mom.momBodyCount++;
                if(mom.momBodyCount>7) mom.momBodyCount = 7;
                if(fruit.fruitType[i]=="blue") data.double = 2;
                wave.born(fruit.x[i],fruit.y[i],"fruit");
                fruit.dead(i);
            }
        }
    }
}

function momBabyCollision(){
    if(data.fruitNum > 0 && !data.gameOver){
        var l = calLength2(mom.x,mom.y,baby.x,baby.y);
        if(l<900){
            baby.babyBodyCount = 0;
            mom.momBodyCount = 0;
            data.addScore();
            wave.born(baby.x,baby.y,"fish");
        }
    }
}
