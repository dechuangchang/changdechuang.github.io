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
    for(var i = 0 ; i< user.length ; i++){
        var id = aUser[i];
        if(i == 0 && Math.round(Math.random()*7+1)>2){
            ajax(id,'樾');
        }
        if(i == 1 && Math.round(Math.random()*7+1)>2){
            ajax(id,'铭');
        }
        if(i == 2 && Math.round(Math.random()*4+1)>=3){
            ajax(id,'范');
        }
        if(i == 3){
            ajax(id,'常');
        }
        
        
    }

}
var timer = null;
timer = setInterval(function(){
    forUser(user)
},10000)
