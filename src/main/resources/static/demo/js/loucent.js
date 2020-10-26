var oLent = document.getElementById("loucent");
var cdivs = document.getElementsByClassName("loucent");
var oFixed = document.getElementById("fixed");
var oLis = oFixed.querySelectorAll(".icotion ");
var fix = document.getElementById('fix');
var olast = document.getElementById('last');
// console.log(oLent,cdivs);
// console.log(oFixed,oLis,olast);


  //页面加载事件
  window.onload = function(){
     var on = true;
     window.onscroll = function(){

       // 获取鼠标滚动的距离
       var oHeight = document.documentElement.scrollTop || document.body.scrollTop;
       for(var i = 0; v = oLis.length, i < v; i++){
             //绑定索引值
             oLis[i].index = i;
             var ct = cdivs[i].offsetTop; //获取每个（i）div的每个div的高度
             // console.log(odivs)

             //判断
             if(parseInt(oHeight) >= parseInt(ct) - 2  ){
                for(var x = 0; y = cdivs.length, x < y ; x++){
                  oLis[x].removeAttribute("class");
                }
                  oLis[i].setAttribute("class","animate");
             }
       }

       //判断
       if(!on){
         clearInterval(timer);
         on = false;
       }

       var oFixed = document.getElementById("fixed");
       var cents = document.getElementsByClassName("loucent");
       var clis = oFixed.getElementsByTagName('li');
       var timer;
       // console.log(adivs,oFixed,lies)

       for(var a = 0; b = cents.length, a < b; a++){
          //绑定索引值
          clis[a].index = a;

          clis[a].onclick = function(){
              //获取每个div离顶部的距离
              var ot = cents[this.index].offsetTop;
              // console.log(dives);
              //清除定时器
              clearInterval(timer);
              timer = setInterval(function(){

                 on = true;
                 //获取鼠标滚动的距离
                 var sH = document.documentElement.scrollTop || document.body.scrollTop;

                 //设置速度之
                 var speed = (ot - sH)/4;

                 speed = speed >0 ? Math.ceil(speed) : Math.floor(speed);

                 // 赋值
                 document.body.scrollTop = document.documentElement.scrollTop = sH + speed;

                  if( ot == parseInt(sH) ){
                     clearInterval(timer);
                  }

              },20)
          }
       }

       // 返回顶部显示
       if(oHeight >= 660){
          oFixed.style.height = 360 + "px";
          oFixed.style.transition = "all 0.6s ease";
       }else{
         oFixed.style.height = 300 + "px";
         oFixed.style.transition = "all 0.6s  ease";
       }

       // 返回顶部功能
       olast.onclick = function(){
         $('html').animate({scrollTop:0},500);
       }

     }
  }
