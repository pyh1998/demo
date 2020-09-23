// 获取节点
var oRight = document.getElementsByClassName('lun_right')[0];
var oTli = oRight.getElementsByClassName('top')[0];
var oRlis = oTli.getElementsByTagName('li');
var oBox = document.getElementById('box');
var oBdivs = oBox.querySelectorAll('.center');

//console.log(oRight,oTli,oRlis,oBox,oBdivs)

    // for循环
    for(var i = 0; l = oRlis.length, i < l; i++){
         oRlis[i].index = i;  //绑定索引值；
         //  鼠标移入
         oRlis[i].onmouseover = function(){

             for(var x = 0; y = oBdivs.length, x < y; x++){
                oRlis[x].removeAttribute("class");
                oBdivs[x].removeAttribute("id");
             }

             oRlis[this.index].setAttribute('class',"color");
             oBdivs[this.index].setAttribute('id','block');

         }

    }


