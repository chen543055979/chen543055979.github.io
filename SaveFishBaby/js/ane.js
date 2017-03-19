var aneObj = function(){
    this.startX = [];
    this.endX = [];
    this.endY = [];
    this.sinX = 0;
    this.amp = [];      //振幅
};

aneObj.prototype.num = 50;

aneObj.prototype.init = function(){
    for(var i=0;i<this.num;i++){
        this.startX[i] = i * 16 + Math.random() * 20;
        this.endX[i] = this.startX[i];
        this.endY[i] = canHeight-220 + Math.random()*50;
        this.amp[i] = Math.random()*50+50;
    }
};

aneObj.prototype.draw = function(){
    this.sinX += deltaTime*.0008;
    var sinY = Math.sin(this.sinX);

    ctx2.save();
    ctx2.globalAlpha = .6;
    ctx2.lineWidth = 20;
    ctx2.lineCap = "round";
    ctx2.strokeStyle = "#3b154e";
    for(var i=0;i<this.num;i++){
        ctx2.beginPath();
        ctx2.moveTo(this.startX[i],canHeight);
        this.endX[i] = this.startX[i] + sinY*this.amp[i];
        ctx2.quadraticCurveTo(this.startX[i],canHeight-100,this.endX[i],this.endY[i]);
        ctx2.stroke();
    }
    ctx2.restore();
};