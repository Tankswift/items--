;(function(){
    //渲染数据
    class Car{
        constructor(){
            this.box=$('.box');
            this.url='http://localhost/item/data/goods.json';
            this.load();
        }
        load(){
            var that=this;
            $.ajax({
                url:this.url,
                success:function(res){
                    that.record=res;
                    //console.log(that.record);
                    that.getLoacl();
                    
                }
            })
        }
        getLoacl(){
            var sum=0;
            var str='';
            this.car=localStorage.getItem('car')?JSON.parse(localStorage.getItem('car')):[];
            for(var i=0;i<this.record.length;i++){
                for(var j=0;j<this.car.length;j++){
                    if(this.record[i].goodsId==this.car[j].id){
                        // console.log(this.car[j]
                        var price=this.record[i].price.substring(1,this.record[i].price.length);
                        var add=price*this.car[j].num;
                        sum=sum+add;
                        str+=`
                                
                                    <tr abc='${this.car[j].id}'>
                                        <td>
                                            <img src="${this.record[i].url}" alt="">
                                            <span class="span1">${this.record[i].name}</span>
                                        </td>
                                        <td class="center">无</td>
                                        <td class="center">${this.record[i].price}</td>
                                        <td class="center">
                                            <span class="span2">-</span>
                                            <input type="text" min="0" numtype="int" size="3" value="${this.car[j].num}" id="txtinput">
                                            <span class="span2">+</span>
                                        </td>
                                        <td class="center">5</td>
                                        <td class="center"><span class="span3">￥${add}</span></td>
                                        <td class="center">
                                            <span class="span4 teshu">收藏</span>
                                            <span class="span4">X删除</span>
                                        </td>
                                    </tr>
                        
                        `
                    }

                }
            }
            // if(i==this.record.length){
            //     str=str+`
            //     <tr>
            //                             <td>
            //                                 <img src="" alt="">
            //                                 <span class="span1"></span>
            //                             </td>
            //                             <td class="center"></td>
            //                             <td class="center"></td>
            //                             <td class="center">
            //                                 <span class="span2"></span>
            //                                 <input type="text" min="0" numtype="int" size="3" value="" id="txtinput">
            //                                 <span class="span2"></span>
            //                             </td>
            //                             <td class="center"></td>
            //                             <td class="center"><span class="span3"></span></td>
            //                             <td class="center">
            //                                 <span class="span4 teshu"></span>
            //                                 <span class="span4"></span>
            //                             </td>
            //                         </tr>
            //     `
            // }
            console.log(sum);
            $('.box').html(str);
            $('.margin-b').children('span').html('￥'+sum);
            this.delete();
        }
        delete(){
            var that=this;
            $('.span4').on('click',function(){
                $('.span4').parent().parent('tr')[0].remove();
                that.numId=$(this).parent().parent('tr')[0].getAttribute('abc');
                console.log(that.numId);
                that.deleteLocal();
                that.getLoacl();
            })
            
        }
        deleteLocal(){
            for(var i=0;i<this.car.length;i++){
                if(this.car[i].id==this.numId){
                    this.car.splice(i,1);
                }
            }
            localStorage.setItem('car',JSON.stringify(this.car));
        }
    }
    new Car();


    //返回按钮
    $('.btnl').on('click',function(){
        window.location.href='./index.html';
    })










    // this.car=localStorage.getItem('car')?JSON.parse(localStorage.getItem('car')):[];
    // this.goods=localStorage.getItem('goods');
    // for(var i=0;i<this.car.length;i++){
    //     if(this.car[i].id==this.goods){
    //         this.num=i;
    //         //console.log(this.num)
    //         this.display();

    //     }
    // }











})()