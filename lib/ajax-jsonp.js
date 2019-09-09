
		function ajax(options){
			var {type,url,success,error,date,timeout}=options;
			type=type||'get';
			date=date||{};
			timeout=timeout||500;
			var str='';
			for(var i in date){
				str+=`${i}=${date[i]}&`;
			}
			if (type=='get'||type=='jsonp') {
				var d=new Date();
				url=url+'?'+str+"_yut="+d.getTime();
			}
			if (type==='jsonp') {
				var script=document.createElement('script');
				script.src=url;
				document.body.appendChild(script);
				window[date[date.columnName]]=function(res){
					success&&success(res);
					error=null;
				}
				setTimeout(()=>{
					error||error('timeout');
					success=null;
				},timeout)
			}else{
				var xhr=new XMLHttpRequest();
				xhr.open(type,url,true);
				xhr.onreadystatechange=function(){
				if (xhr.status==200&&xhr.readyState==4) {
					success(xhr.responseText);
				}else if(xhr.status!=200&&xhr.readyState==4){
					error&&error(xhr.status);
				}
			}
			if (type=='get') {
				xhr.send();
			}else if(type=='post'){
				xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        		xhr.send(str.slice(0,str.length-1));
			}


			}
			
		} 	