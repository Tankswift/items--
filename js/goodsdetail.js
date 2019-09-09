;(function(){
    //滑动变色
    $('.ulproject').children('li').eq(1).hover(function(){
        $(this).addClass('active')
    },function(){
        $(this).removeClass('active')
    })

   
   

//页面数据的渲染
	class Detail{
		constructor(){
			this.url='http://localhost/item/data/goods.json';
			this.yu=$('.yu');
			this.fadabig=$('.fadabig')
			this.li=$('.li')
			this.load();
		}
		load(){
			var that=this;
			$.ajax({
				url:this.url,
				success:function(res){
					that.shuju=res;
					console.log(res);
					that.getId();
				}
			})
		}
		getId(){
			var goodsId=localStorage.getItem('goods')
			for(var i=0;i<this.shuju.length;i++){
				if(this.shuju[i].goodsId==goodsId){
					this.display(i);
					//console.log(i);

					 //放大镜
					function Fanda(){
						this.bigbox=document.querySelector('.carbuy-l')
						this.smallobj=document.querySelector('.fadasmall');
						this.sImg=document.querySelector('.fadasmall img ');
						//console.log(this.sImg);
						this.spanobj=document.querySelector('.fadasmall .bbb');
						this.bigobj=document.querySelector('.fadabig');
						this.bImg=document.querySelector('.fadabig img')
						//console.log(this.bImg);
						this.addEvent();
						console.log(this.bigbox.offsetLeft,this.bigbox.offsetTop);
					}
					Fanda.prototype.addEvent=function(){
						//移入事件
						this.smallobj.onmouseover=()=>{
							this.over();
						}
						//移出事件
						this.smallobj.onmouseout=()=>{
							this.out();
						}
						//移动事件
						this.smallobj.onmousemove=()=>{
							var eve=event||window.event;
							this.move(eve);
						}
					}
					Fanda.prototype.over=function(){
						this.bigobj.style.display='block';
						this.spanobj.style.display='block';
					}
					Fanda.prototype.move=function(eve){
						var l=eve.pageX-this.smallobj.offsetLeft-this.spanobj.offsetWidth/2-125;
						var h=eve.pageY-this.smallobj.offsetTop-this.spanobj.offsetHeight/2-229;
						//边界设定
						if(l<0) l=0;
						if(h<0) h=0;
						if(l>this.smallobj.offsetWidth-this.spanobj.offsetWidth) l=this.smallobj.offsetWidth-this.spanobj.offsetWidth;
						if(h>this.smallobj.offsetHeight-this.spanobj.offsetHeight) h=this.smallobj.offsetHeight-this.spanobj.offsetHeight;
						this.spanobj.style.left=l+'px';
						this.spanobj.style.top=h+'px';
						//计算比例
						var x=l/(this.smallobj.offsetWidth-this.spanobj.offsetWidth);
						var y=h/(this.smallobj.offsetHeight-this.spanobj.offsetHeight);
						this.bImg.style.left=x*(this.bigobj.offsetWidth-this.bImg.offsetWidth)+'px';
						this.bImg.style.top=y*(this.bigobj.offsetHeight-this.bImg.offsetHeight)+'px';
					}
					//移出
					Fanda.prototype.out=function(){
						this.bigobj.style.display='none';
						this.spanobj.style.display='none';
					}
					
						new Fanda();
					






				}
			}
		}
		display(num){
			var str1='';
			var str2='';
			var str3='';
			str1=`<img src="${this.shuju[num].url}" alt="">`;
			str2=`<img src="${this.shuju[num].url}" alt="">`;
			str3=`
			<h2 class="goodsname">${this.shuju[num].name}</h2>
                    <div class="goodsprice">
                        <ul>
                            <li>
                                <span>商品编号:</span>
                                <em class="infoModi">${this.shuju[num].number}</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span>商品货号：</span>
                                <em id="goodsBn" class="infoModi">P5C4C054D292DE</em>
                            </li>
                            <li class="t1">
                                <span>售价:</span>
                                <em class="sellprice">${this.shuju[num].price}</em>
                            </li>
                            <li>
                                <span>配送:</span>
                                <em>北京市 至 上海 申通快递：0</em>
                            </li>
                            <li>
                                <span>月销:</span>
                                <em>1000件</em>
                            </li>
                        </ul>
                    </div>
			`
			this.yu.html(str1);
			this.fadabig.html(str2);
			this.li.html(str3);
		}
	}
	new Detail();

















})()