var user = [
    //樾
    'j170zcWV93Em-1-zZVRcIK3stmKa0lRTLEKx-DZ7uq9TVEuWImb-q2KXKxoBvluT',
    //铭
    'GaGABfy38kUyDKa9ZBstu3b34c-sr0ylcCsEAUikLE_JtGL2-AD1Q0X8QwMnOtho',
    //范
    'VMrBiNy8N9BxKj7ZHYvyPArMDz3lBX79E6fMfn54wAl4hlAYPQyoRXZEHDxMPcc9',
    //常
    'HIlIehiTLgVG8CUGoggJ5jhQQ1JfwZbxL6tjy3lkVA5ppnIq1sWNFOEypDGX_uJq'
];

function ajax(id,name){
    $.ajax({
        type: "GET",
        url: "http://chat.jiaxianghua.org/poetry-show.html",
        data: "type=share&mediaid="+id,
        success: function(msg){
            
        }
    });
    $.ajax({
        type: "GET",
        url: "http://chat.jiaxianghua.org/svc/media/convertion?",
        data: "type=poetryAudio&mediaid="+id,
        success: function(msg){
            
        }
    });
    $.ajax({
        type: "POST",
        url: "http://chat.jiaxianghua.org/svc/common?type=poetryShow",
        data: "mediaid="+id,
        success: function(msg){
            console.log('%c'+name+'+ 试听',"color:blue")
        }
    });
    $.ajax({
        type: "GET",
        url: "http://chat.jiaxianghua.org/svc/weixin",
        data: "type=getSignature&url=http://chat.jiaxianghua.org/poetry-show.html?type=share&mediaid="+id,
        success: function(msg){
            
        }
    });
    
    if(Math.round(Math.random()*3+1)>2){
        setTimeout(function(){
            $.ajax({
                type: "GET",
                url: "http://chat.jiaxianghua.org/svc/common",
                data: "type=likeThisPoetry&target=push&mediaid="+id,
                success: function(msg){
                    var msg = JSON.parse(msg).msg == 'SUCCESS' ? '成功':'失败';
                    
                    if(msg=='成功'){
                        console.log('%c'+name+' 投票=>'+msg,"color:#75b300")
                    }else{
                        console.log('%c'+name+' 投票=>'+msg,"color:red")
                    }
                }
            });
        },1000)
    }
    
}

function forUser(user){
    var aUser = user;
    var max = Math.round(Math.random()*19+1);
    if(max>0&&max<10){
        ajax(aUser[3],'常');
    }
    if(max>18){
        ajax(aUser[0],'樾');
        return
    }
    if(max>15&&max<20){
        ajax(aUser[1],'铭');
        return
    }
    if(max>10&&max<15){
        ajax(aUser[2],'范');
        return
    }
    
}
var timer = null;
timer = setInterval(function(){
    forUser(user)
},10000)







for(var q = 0 ; q< arr.length; q++){
       
    $.ajax({
       type: "POST",
       url: "http://chat.jiaxianghua.org/svc/common?type=poetryShow",	       
       data:"mediaid=HIlIehiTLgVG8CUGoggJ5jhQQ1JfwZbxL6tjy3lkVA5ppnIq1sWNFOEypDGX_uJq",           
       success: function(msg){
              
       }
   });
    $.ajax({
       type: "GET",
       url: "http://chat.jiaxianghua.org/svc/media/convertion",	       
       data:"type=poetryAudio&mediaid=HIlIehiTLgVG8CUGoggJ5jhQQ1JfwZbxL6tjy3lkVA5ppnIq1sWNFOEypDGX_uJq&openid="+arr[q].openid,           
       success: function(msg){
              
       }
   });
   
}
for(var f = 0 ; f< arr.length; f++){
       
    
    $.ajax({
       type: "GET",
       url: "http://chat.jiaxianghua.org/svc/common",	       
       data:"type=likeThisPoetry&target=push&mediaid=HIlIehiTLgVG8CUGoggJ5jhQQ1JfwZbxL6tjy3lkVA5ppnIq1sWNFOEypDGX_uJq&openid="+arr[f].openid,           
       success: function(msg){
            var msg = JSON.parse(msg).msg == 'SUCCESS' ? '成功':'失败';
            if(msg=='成功'){
                console.log('%c'+name+' 投票=>'+msg,"color:#75b300")
            }else{
                console.log('%c'+name+' 投票=>'+msg,"color:red")
            }
       }
   });
   
}

function randomString(len) {
　　len = len || 32;
　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
　　var maxPos = $chars.length;
　　var pwd = '';
　　for (i = 0; i < len; i++) {
　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
　　}
　　return 'oYzlxs'+pwd;
}




function randomString(len) {
　　len = len || 32;
　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
　　var maxPos = $chars.length;
　　var pwd = '';
　　for (i = 0; i < len; i++) {
　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
　　}
　　return pwd;
}
for(var f = 0 ; f< 1000; f++){
	var cood = randomString(32);
    $.ajax({
       type: "GET",
       url: "http://chat.jiaxianghua.org/svc/weixin",	       
       data:{
            type:'getUserInfo',
            code:cood,
            url:'http://chat.jiaxianghua.org/ranking.html?code='+cood+'&state=STATE',
       }, 
       success: function(msg){
            var msg = JSON.parse(msg)
            console.log(msg)
       }
   });
   
}

