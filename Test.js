// JavaScript Document
//轮播方法1：
/*window.onload = function(){
    var n = 0;
    setInterval(run,3000);
    function run(){
        var x = document.getElementsByTagName("li");
        console.log(x.length);
        for(k=0; k<= x.length-1; k++){
            console.log("n="+n+";k="+k);
            if(n == k){
                x[k].className = "item_slide1";
            }else{
                x[k].className = "item";
            }
        }
        if(n < x.length-1){
            n++;
        }else{
            n = 0;
        }
    }
}*/
//轮播方法2:
/*window.onload = function(){
    var slider = {
        n:0,
        x:null,
        run:function(){
            this.x = document.getElementsByClassName("item");
            //console.log(this.x.length);
            for(k=0;k<=this.x.length-1;k++){
                //console.log("n="+this.n+";k="+k);
                if(this.n == k){
                    //this.x[k].className = "item_slide1";
                    this.x[k].style.opacity = "1";
                    this.x[k].style.zIndex = "1";
                }else{
                    //this.x[k].className = "item";
                    this.x[k].style.opacity = "0";
                    this.x[k].style.zIndex = "0";
                }
            }
            if(this.n < this.x.length-1){
                this.n++;
            }else{
                this.n = 0;
            }
        }
    };
    function getrun(){
        slider.run();
    }
    setInterval(getrun,3000,0);
}*/
//轮播方法3:
/*window.onload = function(){
    var slider = {
        n:0,
        x:null,
        base:function(elements){
            this.x = elements;
        },
        run:function(){
            //this.x = document.getElementsByClassName("item");
            //console.log(this.x.length);
            for(k=0;k<=this.x.length-1;k++){
                //console.log("n="+this.n+";k="+k);
                if(this.n == k){
                    //this.x[k].className = "item_slide1";
                    this.x[k].style.opacity = "1";
                    this.x[k].style.zIndex = "1";
                }else{
                    //this.x[k].className = "item";
                    this.x[k].style.opacity = "0";
                    this.x[k].style.zIndex = "0";
                }
            }
            if(this.n < this.x.length-1){
                this.n++;
            }else{
                this.n = 0;
            }
        }
    };
    function getRun(){
        var elements = document.getElementsByClassName("item");
        slider.base(elements);
        slider.run();
    }
    setInterval(getRun,3000);
}*/
/*function Cat(name, sound){
 this.name = name;
 this.sound = sound;
 Cat.prototype.type = "猫科";
 Cat.prototype.eat = "老鼠";
 }
 var cat1 = new Cat("大毛","喵喵喵");
 var cat2 = new Cat("二毛","喵喵");
 console.log(cat1.type == cat2.type);*/
//***********继承函数
function extend(Child, Parent){
    var F = function(){};//创建一个空对象;
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = Parent.prototype; //提供一个能够直接使用父对象的方法和属性的通道；
}
//***********************
/*function Animal(){
}
Animal.prototype.species = "动物";
function Cat(name, color){
    this.name = name;
    this.color = color;
    this.sound = "喵喵喵";
}
extend(Cat,Animal);
var cat1 = new Cat("damao","bai");
var cat2 = new Cat("ermao","hei");
console.log("cat1的种类:"+cat1.species+",cat1的颜色:"+cat1.color);
console.log("cat2的种类:"+cat2.species+",cat2的颜色:"+cat2.color);*/


//轮播方法4：
//******创建父类
function Slider(){}
Slider.prototype.effect = function(){};
Slider.prototype.type = "轮播";
//********************
//******创建子类
function Slider1(elements){
    this.elements = elements;
    this.x = elements.length;
    this.n = 0;
}
//**********************
//*******利用继承函数进行继承
extend(Slider1,Slider);
///********************
//*******继承后子类对从父类继承而来的函数进行改写，以后如果轮播要用不同的效果，可以先创建新子类继承Slider，然后重写
// effect方法
Slider1.prototype.effect = function(){
    for(k=0;k<=this.x-1;k++){
        //console.log("n="+this.n+";k="+k);
        if(this.n == k){
            //this.x[k].className = "item_slide1";
            this.elements[k].style.opacity = "1";
            this.elements[k].style.zIndex = "1";
        }else{
            //this.x[k].className = "item";
            this.elements[k].style.opacity = "0";
            this.elements[k].style.zIndex = "0";
        }
    }
    if(this.n < this.x-1){
        this.n++;
    }else{
        this.n = 0;
    }
}
//**********************************

window.onload = function(){
    var e = document.getElementsByClassName("item");
    var slider1 = new Slider1(e);
    function getRun(){
        slider1.effect();
    }
    setInterval(getRun,3000);
}


























