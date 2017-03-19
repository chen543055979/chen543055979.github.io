var babyObj = function(){
    this.x = 0;
    this.y = 0;
    this.angle = 0;
    this.babyEye = [];
    this.babyBody = [];
    this.babyTail = [];

    this.babyTailTimer = 0;
    this.babyTailCount = 0;

    this.babyEyeTimer = 0;
    this.babyEyeCount = 0;
    this.babyEyeInterval = 1000;

    this.babyBodyTimer = 0;
    this.babyBodyCount = 0;
};

babyObj.prototype.init = function(){
    this.angle = 0;
    this.x = canWidth*.5 - 50;
    this.y = canHeight*.5 + 50;
    this.babyBody.src = "./img/babyFade0.png";

    for(var i=0;i<8;i++){
        this.babyTail[i] = new Image();
        this.babyTail[i].src = "./img/babyTail" + i + ".png";
    }
    for(var j=0;j<2;j++){
       this.babyEye[j] = new Image();
       this.babyEye[j].src = "./img/babyEye" + j + ".png";
    }
    for(var k=0;k<20;k++){
        this.babyBody[k] = new Image();
        this.babyBody[k].src = "./img/babyFade" + k + ".png";
    }
};

babyObj.prototype.draw = function(){

    this.x = lerpDistance(mom.x,this.x,.98);
    this.y = lerpDistance(mom.y,this.y,.98);

    var beta = Math.atan2(mom.y-this.y,mom.x-this.x)+Math.PI;
    this.angle = lerpAngle(beta,this.angle,.6);

    this.babyTailTimer += deltaTime;
    if(this.babyTailTimer > 50){
        this.babyTailCount = (this.babyTailCount+1)%8;
        this.babyTailTimer %= 50;
    }

    this.babyEyeTimer += deltaTime;
    if(this.babyEyeTimer > this.babyEyeInterval){
        this.babyEyeCount = (this.babyEyeCount+1)%2;
        this.babyEyeTimer %= this.babyEyeInterval;
        if(this.babyEyeCount==1){
            this.babyEyeInterval = 200;
        }else{
            this.babyEyeInterval = Math.random()*1500+2000;
        }
    }

    this.babyBodyTimer += deltaTime;
    if(this.babyBodyTimer>300){
        this.babyBodyCount += 1;
        this.babyBodyTimer %= 300;
        if(this.babyBodyCount>19){
            this.babyBodyCount = 19;
            data.gameOver = true;
        }
    }

    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.babyTail[this.babyTailCount],-this.babyTail[this.babyTailCount].width*.5+23,-this.babyTail[this.babyTailCount].height*.5);
    ctx1.drawImage(this.babyBody[this.babyBodyCount],-this.babyBody[this.babyBodyCount].width*.5,-this.babyBody[this.babyBodyCount].height*.5);
    ctx1.drawImage(this.babyEye[this.babyEyeCount],-this.babyEye[this.babyEyeCount].width*.5,-this.babyEye[this.babyEyeCount].height*.5);
    ctx1.restore();
};