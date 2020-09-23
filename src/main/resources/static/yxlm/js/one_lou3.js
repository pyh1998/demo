
var oH3 = document.getElementsByClassName("h3")[0];
var oLi = document.getElementById('lis');
var oH3lis = oLi.getElementsByTagName('li');

//获取div
var oLouOne = document.getElementsByClassName('louOne_block')[0];
var oCents =oLouOne.querySelectorAll('.lis');

/*console.log(oH3,oLi,oH3lis,oLouOne);
console.log(oLouOne,oCents);*/

	for(var i =0; l = oH3lis.length, i < l; i++){

		//绑定索引值
	    oH3lis[i].index = i;
	    oH3lis[i].onmouseover = function(){

	    	for(var k = 0; y = oCents.length, k < y; k++){
	    		 oH3lis[k].removeAttribute('class');
	    		 oCents[k].removeAttribute('id');
	    	}

	    	oH3lis[this.index].setAttribute("class", "color");
	    	oCents[this.index].setAttribute("id","One_Bck");

	    }

	}
