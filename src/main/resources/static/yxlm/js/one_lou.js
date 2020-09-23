// 获取节点
var oLun = document.getElementsByClassName('lun_left')[0];
var oDing = document.querySelector('.ding');
var oImgs = oDing.getElementsByTagName('img');
var oLi = document.querySelector('.lis');
var olis = oLi.getElementsByTagName('li');

// 移动的对象
var oAnimate = document.getElementsByClassName('imgs')[0];

//  获取移入小点点
for (var i = 0; i < olis.length; i++) {

    olis[i].index = i; //绑定索引值
    //  鼠标移入
    olis[i].onmouseover = function () {

        for (var k = 0; k < oImgs.length - 1; k++) {
            olis[k].className = "";
        }

        olis[this.index].className = 'color';

        // 图片移动
        imgKey = this.index;
        number = this.index;
        animate(oAnimate, -this.index * 820);
    }
}

//   2.定时器  调用函数
timer = setInterval(autoPlay, 4000);

var imgKey = 0;
var number = 0;

//   函数封装
function autoPlay() {

    // 图片随着定时器移动
    imgKey++;

    if (imgKey > oImgs.length - 1) {
        oAnimate.style.left = 0;
        imgKey = 1;
    }

    animate(oAnimate, -imgKey * 820);


    //小点点随着定时器切换
    number++;

    for (var i = 0; l = olis.length, i < l; i++) {
        olis[i].className = "";
    }

    if (number > olis.length - 1) {
        number = 0
    }

    olis[number].className = "color";
}


    oLun.onmouseover = function () {
        clearInterval(timer);
    }

    oLun.onmouseout = function () {
        timer = setInterval(autoPlay, 4000);
    }
