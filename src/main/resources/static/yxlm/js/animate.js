// 动画封装
function animate(ele,tager){
    // 2.开始定时器时，首先清除定时器  防止多次点击时，移动过快
    clearInterval(ele.timer);
    // 获取速度的步长
    var speed = tager > ele.offsetLeft?28:-28;
    // 1.开始定时器·
    ele.timer = setInterval(function(){
        var val = tager -ele.offsetLeft;
        ele.style.left = ele.offsetLeft + speed + "px";
        // 因为步长有正有负,所以要用绝对值来比较
        if(Math.abs(val) < Math.abs(speed) ){
            clearInterval(ele.timer);
            ele.style.left = tager + "px";
        }

    },0);
}

// 动画封装
function Animate(ele,tager){
    // 2.开始定时器时，首先清除定时器  防止多次点击时，移动过快
    clearInterval(ele.timer);
    // 获取速度的步长
    var speed = tager > ele.offsetLeft? 100: -100;
    // 1.开始定时器·
    ele.timer = setInterval(function(){
        var val = tager -ele.offsetLeft;
        ele.style.left = ele.offsetLeft + speed + "px";
        // 因为步长有正有负,所以要用绝对值来比较
        if(Math.abs(val) < Math.abs(speed) ){
            clearInterval(ele.timer);
            ele.style.left = tager + "px";
        }

    },0);
}

// 动画封装
function loucent(ele,tager){
    // 2.开始定时器时，首先清除定时器  防止多次点击时，移动过
    clearInterval(ele.timer);
    // 获取速度的步长
    var speed = tager > ele.offsetTop?28:28;
    // 1.开始定时器·
    ele.timer = setInterval(function(){
        var val = tager -ele.offsetTop;
        ele.style.top = ele.offsetTop + speed + "px";
        // 因为步长有正有负,所以要用绝对值来比较
        if(Math.abs(val) < Math.abs(speed) ){
            clearInterval(ele.timer);
            ele.style.top = tager + "px";
        }

    },0);
}
