/*向window.onload添加方法*/
function addLoadEvent(fun){ 
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = fun;
	} else {
		window.onload = function(){
			oldonload();
			fun();
		}
	}
}





/*替换占位符图片*/
function showpic(whichpic){
	if(!document.getElementById('placeholder')) return false;
	var source=whichpic.getAttribute("href");
	var placeholder=document.getElementById("placeholder");
	if(placeholder.nodeName!="IMG") return false;
	//nodeName总是返回一个大写字母的值，即使元素在html文档里是小写字母
	placeholder.setAttribute("src", source);
	if(document.getElementById("description")){
      
    //检测title是否为空
	var text=whichpic.getAttribute("title")? whichpic.getAttribute("title"):"";
	var description=document.getElementById("description");
	//检测第一个子元素是否为文本节点
	if(description.firstChild.nodeType==3){
		description.firstChild.nodeValue = text;	
	}
    }
	
	return true;
	
}
/*改变选中选项签背景颜色*/
function change(obj){
	var imggallery=document.getElementById("imggallery").getElementsByTagName("a");
     for(var i=0;i<imggallery.length;i++){
     	if(imggallery[i]==obj){
          imggallery[i].className="on";
     	}
     	else{
           imggallery[i].className="";
     	}
     }
}


/*初始化，向每个a元素，绑定onclick事件，后续就可以点击了*/
addLoadEvent(prepareGallery);  
function prepareGallery(){
	if(!document.getElementById) {return false;}     /*向后兼容：对象检测，*/
	if (!document.getElementsByTagName) {return false;}
	if(!document.getElementById("imggallery") ) {return false;}

	var imggallery=document.getElementById("imggallery").getElementsByTagName("a");
	
    for(var i=0;i<imggallery.length;i++){

        imggallery[i].onclick=function(){
     	
     	showpic(this);

        change(this);
        //如果图片不存在，浏览器将按照用户点击的那个链接打开一张新的图片
        return false; 
		}			 
	}
}
