var user = [
    //樾
    'j170zcWV93Em-1-zZVRcIK3stmKa0lRTLEKx-DZ7uq9TVEuWImb-q2KXKxoBvluT',
    //铭
    'GaGABfy38kUyDKa9ZBstu3b34c-sr0ylcCsEAUikLE_JtGL2-AD1Q0X8QwMnOtho',
    //范
    'VMrBiNy8N9BxKj7ZHYvyPArMDz3lBX79E6fMfn54wAl4hlAYPQyoRXZEHDxMPcc9'
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
            
        }
    });
    $.ajax({
        type: "GET",
        url: "http://chat.jiaxianghua.org/svc/weixin",
        data: "type=getSignature&url=http://chat.jiaxianghua.org/poetry-show.html?type=share&mediaid="+id,
        success: function(msg){
            
        }
    });
    setTimeout(function(){
        $.ajax({
            type: "GET",
            url: "http://chat.jiaxianghua.org/svc/common",
            data: "type=likeThisPoetry&target=push&mediaid="+id,
            success: function(msg){
                console.log(name+'结果'+JSON.parse(msg).msg)
            }
        });
    },1000)
}

function forUser(user){
    var aUser = user;
    for(var i = 0 ; i< user.length ; i++){
        var id = aUser[i];
        if(i == 0 && Math.round(Math.random()*1+1)==1){
            ajax(id,'樾');
        }
        if(i == 1 && Math.round(Math.random()*3+1)>2){
            ajax(id,'铭');
        }
        if(i == 2 && Math.round(Math.random()*7+1)>=3){
            ajax(id,'范');
        }
    }

}
var timer = null;
timer = setInterval(function(){
    forUser(user)
},10000)
