;(function(){

//1.实现搜索也的店铺和宝贝的切换

$('.baodian').hover(function(){
    var temp=1;
    $('#dianpu').parent('li').eq(0).stop().animate({
        top:35,
    },1).on('click',function(){
        if(temp){
            $('#baobei').html('店铺');
            $('#dianpu').html('宝贝');
            temp=0;
        }else{
            $('#baobei').html('宝贝');
            $('#dianpu').html('店铺'); 
            temp=1;
        }
        //$(this).stop().animate({top:0,})     
    })
},function(){
    $('#dianpu').parent('li').eq(0).stop().animate({
        top:0,
    },1)
})


//2.下拉菜单
$('.allkind').hover(function(){
    
    $('.xiala2').stop().show(1).children('.listbig').children('li').hover(function(){
        $(this).children('.biglist').stop().show(1);
        $(this)[0].style.background='#b20000';
        $(this).children('span')[0].style.color='#ffffff';
       
    },function(){
        $(this).children('.biglist').stop().hide(1);
        $(this)[0].style.background='#5a5a5a';
        $(this).children('span')[0].style.color='#787878';
    })
},function(){
    $('.xiala2').stop().hide(1)
})

//3.nav滑动效果
$('.navlanul').children('li').hover(function(){
$(this).css({
    background:'#680a00'
}).children('a').css({
    borderBottom:'1px solid #fff',
})
},function(){
    $(this).css({
        background:'none'
    }).children('a').css({
        borderBottom:'0',
    })
})

// 4.nav处的购物下拉

$('.shopcar').hover(function(){
    $(this).children('.listshopcar').stop().show(1).css({
        background:'red',
       
    });
   
},function(){
    $(this).children('.listshopcar').stop().hide(1);
})
 

// 5.轮播图
$(".boxbanner").banner({
    items:$(".boxbanner").find("img"), 
    list:true,         
    autoPlay:true,     
    moveTime:1000,
    delayTime:2000,     
    index:0         
});





//6.登录成功界面

var data=localStorage.getItem('login')?JSON.parse(localStorage.getItem('login')):[]
if(data.length!=0){
    var name=data.pop().name
    $('.linklogin').html(name);
    var span=$('<span>')
    span.appendTo($('.linklogin'));
    span[0].innerHTML='[退出]';
    span.css({
        color:'red',
        cursor: 'pointer',
    })
}
$('.linklogin').children('span').on('click',function(){
    localStorage.removeItem('login');
    var str=`<div class="linklogin">
    <a href="register.html">免费注册</a>
    /
    <a href="land.html">登录</a>
    /
    <a href="land.html">商家入驻</a>
</div>`
    $('.linklogin').html(str);
})

//7.数据请求渲染页面
class Page{
    constructor(){
        this.box1=$('.a1');
        this.box2=$('.a2');
        this.url='http://localhost/item/data/goods.json'
        this.load();
    }
    load(){
        var that=this;
        $.ajax({
            url:this.url,
            success:function(res){
                that.shuju=res;
                that.display()
               //console.log(res);
               //5.蒙版特效
                                $('#hotBuy').children('.margin').hover(function(){
                                    $(this).find('.moban').stop().show(1);
                                },function(){
                                    $(this).find('.moban').stop().hide(1);
                                })
                                $('.commo').hover(function(){
                                    $(this).find('.moban').stop().hide();
                                },function(){
                                    $(this).find('.moban').stop().show();
                                })
            }
        })
    }
    display(){
        var str1='';
        var str2='';
        for(var i=0;i<6;i++){
            str1+=
            `
            <li class="commo">
                <a href="#"><img src="${(this.shuju[i].urlfrist)}" alt=""></a>
                <div class="moban2 moban"></div>
            </li>
            
            `
        }
        for(var i=6;i<12;i++){
            str2+=
            `
            <li class="commo">
                <a href="#"><img src="${(this.shuju[i].urlfrist)}" alt=""></a>
                <div class="moban2 moban"></div>
            </li>
            `
        }
        this.box1.html(str1);
        this.box2.html(str2);
    }
}
new Page();






























})()