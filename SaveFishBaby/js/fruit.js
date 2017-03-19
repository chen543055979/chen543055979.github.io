var fruitObj = function(){
    this.x = [];
    this.y = [];
    this.l = [];
    this.alive = [];
    this.spd = [];
    this.aneId = [];
    this.fruitType = [];
    this.orange = new Image();
    this.blue = new Image();
};

fruitObj.prototype.num = 15;

fruitObj.prototype.init = function(){
    for(var i=0;i<this.num;i++){
        this.x[i] = 0;
        this.y[i] = 0;
        this.l[i] = 0;
        this.aneId[i] = 0;
        this.alive[i] = true;
        this.spd[i] = Math.random()*.015+.003;
        this.fruitType[i] = "";
        this.born(i);
    }
    this.orange.src = "./img/fruit.png";
    this.blue.src = "./img/blue.png";
};

fruitObj.prototype.draw = function(){
    for(var i=0;i<this.num;i++){
        if(this.alive[i]){
            var pic;
            this.fruitType[i] == "blue" ? pic = this.blue : pic = this.orange;
            if(this.l[i]<=14){
                this.x[i] = ane.endX[this.aneId[i]];
                this.y[i] = ane.endY[this.aneId[i]];
                this.l[i] += this.spd[i]*deltaTime;
                ctx2.drawImage(pic,this.x[i]-this.l[i]*.5,this.y[i]-this.l[i]*.5,this.l[i],this.l[i]);
            }else{
                this.y[i] -= this.spd[i]*deltaTime*7;
                ctx2.drawImage(pic,this.x[i]-this.l[i]*.5,this.y[i]-this.l[i]*.5,this.l[i],this.l[i]);
            }
            if(this.y[i]<10){
                this.born(i);
            }
        }
    }
};

fruitObj.prototype.born = function(i){
    this.aneId[i] = Math.floor(Math.random()*ane.num);
    this.l[i] = 0;
    this.alive[i] = true;
    Math.random()<.1 ? this.fruitType[i] = "blue" : this.fruitType[i] = "orange";
};

fruitObj.prototype.dead = function(i){
    this.alive[i] = false;
    this.born(i);
};

