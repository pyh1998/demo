var oFor_Top = document.getElementsByClassName('for_Top')[0];
var oUs = document.getElementsByClassName('ul')[0];
var oForlis = oUs.getElementsByTagName('li');
var oFordivs = document.getElementsByClassName('for_Bottom');

// console.log(oFor_Top,oUs,oForlis);
// console.log(oFordivs);

    // for循环
    for(var i = 0; x = oForlis.length, i < x; i++){

        // 绑定索引值
        oForlis[i].index = i;

        oForlis[i].onclick = function(){

            for(var k = 0; y = oFordivs.length, k < y; k++){

                oForlis[k].removeAttribute("class");
                oFordivs[k].removeAttribute("id");
            }

                oForlis[this.index].setAttribute("class","blue");
                oFordivs[this.index].setAttribute("id","forbck");
        }
    }










