

var oRightH3 = document.getElementsByClassName('h3')[2];
var oRightUl = oRightH3.getElementsByClassName('strategy')[0];
var oRightlis = oRightUl.getElementsByTagName('li');

// 获取div
var oLun = document.getElementById('Lun');
var oJbox = oLun.getElementsByClassName('j_box')[0];
var oJdivs = oLun.getElementsByClassName('lis');

var oDivlength = oJdivs.length - 1; //获取div的总数量 - 1
// 左右按钮
var oLeft = document.getElementsByClassName('btn_left ')[0];
var oRight = document.getElementsByClassName('btn_right ')[0];

// console.log(oRightH3,oRightUl,oRightlis);
// console.log(oLun,oJbox,oJdivs);
// console.log(oLeft,oRight);

    for(var i = 0; x = oRightlis.length, i < x; i++){
        //绑定索引值
        oRightlis[i].index = i;

        oRightlis[i].onmouseover = function(){
            for(var k = 0; y = oDivlength, k < y; k++){
                oRightlis[k].removeAttribute('class');
                oJdivs[k].removeAttribute('id');
            }

            jImgkey = this.index;
            jNumber = this.index;

            animate(oJbox, -this.index * 500);
            oRightlis[this.index].setAttribute('class','blue');
            oJdivs[this.index].setAttribute("id","jbck");
        }

    }


    // 左右事件
    var jImgkey = 0;  //图片及信息
    var jNumber = 0;  //星期
    oRight.onclick = function(){

        // 图片切换
        jImgkey++;

        if(jImgkey > oJdivs.length - 1){
            oJbox.style.left = 0;
            jImgkey = 1;
        }

        for(var k = 0; y = oDivlength, k < y; k++){
            oJdivs[k].removeAttribute('id');
        }
        animate(oJbox, -jImgkey * 500);
        oJdivs[jImgkey].setAttribute("id","jbck");


        /* 星期部分  */
        jNumber++  //递增

        if( jNumber > oRightlis.length - 1){
            jNumber=0;
        }
        
        for(var i = 0; x = oRightlis.length, i < x; i++ ){
            oRightlis[i].removeAttribute("class");
        }

        oRightlis[jNumber].setAttribute("class","blue");

    }

    oLeft.onclick = function(){

        // 图片切换
        jImgkey--;

        if(jImgkey < 0){
            oJbox.style.left =  -oDivlength * 500 + "px" ;
            jImgkey = oDivlength -1;
        }

        for(var k = 0; y = oDivlength, k < y; k++){
            oJdivs[k].removeAttribute('id');
        }
        animate(oJbox, -jImgkey * 500 );
        oJdivs[jImgkey].setAttribute("id","jbck");


        /* 星期部分  */
        jNumber--  //递增

        if( jNumber < 0){
            jNumber = oRightlis.length - 1;
        }

        for(var i = 0; x = oRightlis.length, i < x; i++ ){
            oRightlis[i].removeAttribute("class");
        }

        oRightlis[jNumber].setAttribute("class","blue");

    }





