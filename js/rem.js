(function(win,doc){
	var fresh=function(){
//	获得当前屏幕宽度的大小
		var html=doc.documentElement;
		var w=html.clientWidth;
	
//	console.log(w);
//	设置当前屏幕根元素HTML的fontsize,即1rem	
		html.style.fontSize=(w/10)+'px';
	}
	
	if(document.readyState==="complete"){
		fresh();//页面加载完刷新

	}else{
//	监听页面加载完毕,且刷新
		document.addEventListener("DOMContentLoaded",fresh,false);
	}
	win.addEventListener('resize',fresh,false);

})(window,document)

