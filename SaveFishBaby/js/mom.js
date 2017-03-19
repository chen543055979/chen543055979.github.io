var momObj = function(){
    this.x = 0;
    this.y = 0;
    this.angle = 0;
    this.momEye = [];
    this.momBodyOrange = [];
    this.momBodyBlue = [];
    this.momTail = [];
    this.body = "";

    this.momBodyCount = 0;

    this.momTailTimer = 0;
    this.momTailCount = 0;

    this.momEyeTimer = 0;
    this.momEyeCount = 0;
    this.momEyeInterval = 1000;
};

momObj.prototype.init = function(){
    this.x = canWidth*.5;
    this.y = canHeight*.5;
    this.angle = 0;

    for(var i=0;i<8;i++){
        this.momTail[i] = new Image();
        this.momTail[i].src = "./img/bigTail" + i + ".png";
    }
    for(var j=0;j<2;j++){
        this.momEye[j] = new Image();
        this.momEye[j].src = "./img/babyEye" + j + ".png";
    }
    for(var k=0;k<8;k++){
        this.momBodyOrange[k] = new Image();
        this.momBodyBlue[k] = new Image();
        this.momBodyOrange[k].src = "./img/bigSwim" + k + ".png";
        this.momBodyBlue[k].src = "./img/bigSwimBlue" + k + ".png";
    }
};

momObj.prototype.draw = function(){

    this.x = lerpDistance(mx,this.x,.98);
    this.y = lerpDistance(my,this.y,.98);

    var beta = Math.atan2(my-this.y,mx-this.x)+Math.PI;     //反正切
    this.angle = lerpAngle(beta,this.angle,.6);

    this.momTailTimer += deltaTime;
    if(this.momTailTimer > 50){
        this.momTailCount = (this.momTailCount+1)%8;
        this.momTailTimer %= 50;
    }

    this.momEyeTimer += deltaTime;
    if(this.momEyeTimer > this.momEyeInterval){
        this.momEyeCount = (this.momEyeCount+1)%2;
        this.momEyeTimer %= this.momEyeInterval;
        this.momEyeCount==1 ? this.momEyeInterval = 200 : this.momEyeInterval = Math.random()*1500+2000;
    }

    ctx1.save();
    data.double == 1 ? this.body = this.momBodyOrange[this.momBodyCount] : this.body = this.momBodyBlue[this.momBodyCount];
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.momTail[this.momTailCount],-this.momTail[this.momTailCount].width*.5+30,-this.momTail[this.momTailCount].height*.5);
    ctx1.drawImage(this.body,-this.body.width*.5,-this.body.height*.5);
    ctx1.drawImage(this.momEye[this.momEyeCount],-this.momEye[this.momEyeCount].width*.5,-this.momEye[this.momEyeCount].height*.5);
    ctx1.restore();
};