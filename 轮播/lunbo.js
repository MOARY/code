window.onload=function(){
		var container=document.getElementById("container");
		var list=document.getElementById('list');
		var prev=document.getElementById("prev");
		var next=document.getElementById("next");
		var circle=document.getElementById("circle").getElementsByTagName('span');
		var index=1;
		list.style.left=0;
		circle[0].style.background="red";
		function animate(offset){
			var newleft=parseInt(list.style.left)+offset;
			list.style.left=newleft+"px";
			if(newleft>0){
				list.style.left=-1440+"px";
			}
			if(newleft<-1440){
				list.style.left=0+"px";
			}
		}
		function showcircle(){
			for(var i=0;i<circle.length;i++){
				if(i==index-1){
					circle[index-1].style.background="red";
				}else{
					circle[i].style.background="grey";
				}
			}
			
		}
		prev.onclick = function(){
			if(index==1){
				index=circle.length;
			}else{
				index--;
			}
			showcircle();
			animate(720);
		}
		next.onclick=function(){
			if(index==circle.length){
				index=1;
			}
			else{
				index++;
			}
			showcircle();
			animate(-720);
		}
		for(var i=0;i<circle.length;i++){
			(function(i){
				circle[i].onclick=function(){
					if(circle[i].style.background!="red"){
						var offset=-720*(i+1-index);
						index=i+1;
						animate(offset);
						showcircle();
					}
				}
			})(i)
		}
}