
var oH3 = document.getElementsByClassName('h3')[1];
var oUl = oH3.getElementsByClassName('Video')[0];
var lies = oUl.getElementsByTagName('li');

// 获取div
var oDiv = document.getElementById('Two_block');
var odivs = oDiv.querySelectorAll('.list');

// console.log(oH3,oUl,lies);
// console.log(oDiv,odivs);

    for(var i = 0; i < lies.length; i++){
        lies[i].index = i;
      
        lies[i].onmouseover = function(){

            for(var k = 0; k < odivs.length; k++){
                lies[k].removeAttribute('class');
                odivs[k].removeAttribute('id');
            }

            lies[this.index].setAttribute("class","blue");
            odivs[this.index].setAttribute("id","Two_bck");

        }

    }
    


