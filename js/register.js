;(function(){
//1.登录的正则验证
var re1=/^[\w\-\u4e00-\u9fa5]{4,20}$/;
var temp1=temp2=temp3=temp4=0;
$('.txt1').focus(function(){
    $(this).val('');
})
$('.txt1').blur(function(){
    if (re1.test($(this).val())) {
        temp1=1;
        $('.countpeople').html('可以使用').css({
            color:'green',
        });

    }else{
        $('.countpeople').html('输入格式错误，请重新输入').css({
            color:'red',
        });
        temp1=0;

    }
})
var re2=/^.{6,18}$/;
var shuzi=zimu=fuhao=0;
var numsz = /\d/;
var azzm = /[a-zA-Z]/;
var tsfh = /[^\da-zA-Z]/;
$('.txt2').blur(function(){
    if (re2.test($(this).val())) {
        $('.countkey').css({
            color:'green',
        });
        temp2=1;
        //密码强度检测
    if(numsz.test(this.value)){shuzi = 1;}
    if(azzm.test(this.value)){zimu = 1;}
    if(tsfh.test(this.value)){fuhao = 1;}
    switch(shuzi+zimu+fuhao){
        case 1:$('.countkey').html("简单");break;
        case 2:$('.countkey').html("一般");break;
        case 3:$('.countkey').html("复杂");break;
    }

    }else{
        $('.countkey').html('输入格式错误，请重新输入').css({
            color:'red',
        });
        temp2=0;
    }
})

$('.txt3').blur(function(){
   // console.log($('.txt2').val()==$('.txt3').val());
    //console.log($('.txt3').val());
    if ($('.txt2').val()==$('.txt3').val()){
        temp3=1;
        $('.countagainkey').html('正确').css({
            color:'green',
        });
    }else{
        $('.countagainkey').html('两次密码不一致').css({
            color:'red',
        });
        temp3=0;
    }
})
$('.fuxuan').click(function(){
    if($('.fuxuan')[0].checked==true){
        temp4=1;
    }
    else{
        temp4=0;
    }
})
 var bb=0; 
$('#btn').click(function(){
    if(temp1+temp2+temp3+temp4==4){
        class Land{
            constructor(){
                this.addEvent();
                
            }
            addEvent(){
                    //var date={}
                    this.name=$('.txt1').val();
                    this.pass=$('.txt2').val();
                    //console.log(that.name,that.pass)
                    this.setLocal();
                
            }
            setLocal(){
                this.data=localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):[];
                if(this.data.length<1){
                    this.data.push({
                        name:this.name,
                        pass:this.pass,
                    })
                }else{
                    var temp=1;
                    for(var i=0;i<this.data.length;i++){
                        if(this.data[i].name==this.name){
                            alert('用户名存在')
                            temp=0;
                        }				
                    }
                    if(temp){
                        this.data.push({
                            name:this.name,
                            pass:this.pass,		
                        })
                        alert('注册成功');
                    }
                }
                localStorage.setItem('user',JSON.stringify(this.data));
            }
            
            
        }
        new Land();
    }
    else{
        bb=0;
        alert('格式错误')
    }
    
})

// 2.划过操作
$('.hhhhhhh').children('a').hover(function(){
    $(this).addClass('active');
},function(){
        $(this).removeClass('active');
    
})


//登录验证

    // class Land{
    //     constructor(){
    //         this.addEvent();
            
    //     }
    //     addEvent(){
    //             //var date={}
    //             this.name=$('.txt1').val();
    //             this.pass=$('.txt2').val();
    //             //console.log(that.name,that.pass)
    //             that.setLocal();
            
    //     }
    //     setLocal(){
    //         this.data=localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):[];
    //         if(this.data.length<1){
    //             this.data.push({
    //                 name:this.name,
    //                 pass:this.pass,
    //             })
    //         }else{
    //             var temp=1;
    //             for(var i=0;i<this.data.length;i++){
    //                 if(this.data[i].name==this.name){
    //                     alert('用户名存在')
    //                     temp=0;
    //                 }				
    //             }
    //             if(temp){
    //                 this.data.push({
    //                     name:this.name,
    //                     pass:this.pass,		
    //                 })
    //             }
    //         }
    //         localStorage.setItem('user',JSON.stringify(this.data));
    //     }
        
        
    // }
    // new Land();





















})()