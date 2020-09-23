
var Teh3 = document.getElementsByClassName("h3")[3];
var Telis = Teh3.querySelector(".lis");
var Tlis = Telis.getElementsByTagName('li');

// 获取div
var Tetop = document.getElementsByClassName('mkTop')[0];
var Tedivs = Tetop.querySelectorAll(".mk_list");
var TefristWidth = Tedivs[0].offsetWidth + 8;  //获取div的自身宽度
var Tdivs = Tedivs.length - 1; //获取所有的div的数量 - 最后复制的那一张  4

// console.log(Teh3,Telis,Tlis);
// console.log(Tetop,Tedivs);
// console.log(TefristWidth);


for(var i = 0; x = Tlis.length, i < x; i++  ){

     //绑定索引值
     Tlis[i].index = i;
     Tlis[i].onmouseover = function(){

        for(var k = 0; y = Tdivs, k < y; k++){
            Tlis[k].id = "";
        }

            Tlis[this.index].id ="position";

            // div动画
            Animate(Tetop, - this.index * TefristWidth );

     }

}
