var dustObj = function(){
    this.x = [];
    this.y = [];
    this.amp = [];
    this.style = [];
    this.dustPic = [];
    this.sinX = 0;
};

dustObj.prototype.num = 30;
dustObj.prototype.init = function(){
    for(var i=0;i<7;i++){
        this.dustPic[i] = new Image();
        this.dustPic[i].src = "./img/dust" + i + ".png";
    }
    for(var j=0;j<this.num;j++){
        this.x[j] = Math.random()*canWidth;
        this.y[j] = Math.random()*canHeight;
        this.amp[j] = 20 + Math.random() * 25;
        this.style[j] = Math.floor(Math.random()*7);
    }
    this.sinX = 0;
};

dustObj.prototype.draw = function(){
    this.sinX += deltaTime*.0008;
    var sinY = Math.sin(this.sinX);
    for(var i=0;i<this.num;i++){
        ctx1.drawImage(this.dustPic[this.style[i]],this.x[i]+sinY*this.amp[i],this.y[i]);
    }
};