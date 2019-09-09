;(function($){
 $.fn.banner=function(options){
     var {items,left,right,list,autoPlay,moveTime,delayTime,index}=options;
     list=list===false?false:true;
     autoPlay=autoPlay===false?false:true;
     moveTime=moveTime||200;
     delayTime=delayTime||3000;
     index=index||0;
     var obj={};

     //list的功能
     if(list){
         var str='';
         for(var i=0;i<items.length;i++){
            str+=`<li>${i+1}</li>`
         }
        var ul=$('<ul>').html(str);
        ul.css({
            width:"150px",
            height:30,
            lineHeight:'30px',
            display:'flex',
            justifyContent:'space-around',
            margin:0,
            padding:0,
            listStyle:'none',
            position:"absolute",
            left:0,
            right:0,
            bottom:0,
            margin:"auto",

        }).children('li').css({
            width:'20px',
            height:'20px',
            borderRadius:'50%',
            border:'1px solid #f00',
            textAlign:'center',
            lineHeight:'20px',
            
        }).eq(0).css({
            background:'red',
            color:'#fff'
        })
        this.append(ul);
        ul.children('li').on('click',function(){
            // console.log($(this).index())
            if($(this).index()>index){
                listMove($(this).index(),-1);
            }
            if($(this).index()<index){
                listMove($(this).index(),1);
            }
            ul.children('li').css({
                background:'black',
                color:'#fff',
            }).eq($(this).index()).css({
                background:'red',
                color:'#fff',
            })
            index=$(this).index();

        })
        listMove=function(iNow,type){
            items.eq(index).css({
                left:0
            }).stop().animate({
                left:items.eq(0).width()*type
            },moveTime).end().eq(iNow).css({
                left:-items.eq(0).width()*type
            }).stop().animate({
                left:0,
            },moveTime)
        }
        //点击按钮功能
        if(left != undefined && left.length > 0 && right != undefined && right.length > 0){
            var irey;
            left.on('click',function(){
                if(index==items.length-1){
                    index=0;
                    irey=items.length-1;
                }else{
                    index++;
                    irey=index-1;
                }
                obj.btnMove(1);
               
            })
            right.on('click',function(){
                console.log(111);
                if(index==0){
                    index=items.length-1;
                    irey=0;
                }else{
                    index--;
                    irey=index+1;
                }
                obj.btnMove(-1);
            })
        }
        obj.btnMove=function(type){
            items.eq(irey).css({
                left:0,
            }).stop().animate({
                left:-items.eq(0).width()*type
            },moveTime).end().eq(index).css({
              left:items.eq(0).width()*type
            }).stop().animate({
                left:0
            },moveTime)
            if(!list) return;
            ul.children('li').css({
                background:'black',
                color:'#fff',
            }).eq(index).css({
                background:'red',
                color:'#fff',
            })
        }
     }
     
     if(autoPlay){
        var t;
        this.hover(function(){
            clearInterval(t);
        },function(){
            t=setInterval(()=>{
                (()=>{
                    if(index==items.length-1){
                        index=0;
                        irey=items.length-1;
                    }else{
                        index++;
                        irey=index-1;
                    }
                    obj.btnMove(1);
                })();
            },delayTime)
        },1000)

     }


 }




})(jQuery)