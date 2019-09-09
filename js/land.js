;(function(){
    class Land{
        constructor(){
            this.addEvent();
        }
        addEvent(){
            var that=this;
            $('#btn').on('click',function(){
                //console.log($('.txt1').val(),$('.txt2').val());
                //登录之后主页显示登录者的状态

                that.panDuan();
            })
        }
        panDuan(){
            var temp=1;
            this.data=localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):[];
            if(this.data.length<1){
                alert('用户名不存在请注册1')
                //跳转到注册页面
                window.location.href='./register.html';
            }else{
                for(var i=0;i<this.data.length;i++){
                    if(this.data[i].name==$('.txt1').val()&&this.data[i].pass==$('.txt2').val()){
                        alert('登录成功')
                        temp=0;
                        window.location.href='./index.html';
                        this.data1=localStorage.getItem('login')?JSON.parse(localStorage.getItem('login')):[];
                        if(this.data1.length<1){
                            this.data1.push({
                                name:$('.txt1').val(),
                                pass:$('.txt2').val(),
                            })
                        }else{
                            var temp=1;
                            for(var i=0;i<this.data1.length;i++){
                                if(this.data1[i].name==this.name){
                                    temp=0;
                                }				
                            }
                            if(temp){
                                this.data1.push({
                                    name:$('.txt1').val(),
                                    pass:$('.txt2').val(),		
                                })
                            }
                        }
                        localStorage.setItem('login',JSON.stringify(this.data1));
                    }
                    
                }
                if(temp){
                    alert('用户名或密码输入错误或不存在')
                    //跳转到注册页面
                }
            }
        }
    }
    new Land();
    













})()