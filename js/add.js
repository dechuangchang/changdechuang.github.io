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

[
'oYzlxs7r5JBWyQCSCMYHSdjmU6Zs',
'oYzlxs_-PjaxP2wQQyGGkIrgTcsQ',
'oYzlxs7NOc6NTnI2CMyXES2JjivE',
'oYzlxsxLSThwNEPT0z1c9ClwpscA',
'oYzlxs8_aIabH4ONwEydccfcYsLI',
'oYzlxs2bA_8LeOuYHahBivaartKw',
'oYzlxs2jX9m_fY0wCMLYvM2yhKI4',
'oYzlxs4LV5l7qTYDKBepzXrDwZkM',
'oYzlxs36f6LfEtakaDVCgigIYbos',
'oYzlxs_GZJPDQ42jzVlpiFHxHNgw',
'oYzlxs9H4B5DMK_dWjRcdKS99Ufs',
'oYzlxs-43JS4Zivn2o47fRWPBLgI',
'oYzlxs39feqrrQC8qtpCB_BqYY5k',
'oYzlxs8aaQ3dER-ylg6PkeYuolR8',
'oYzlxs0KUkohrD2t-lb3Ejmx29sI',
'oYzlxs-NxemQ-O2NwrtK190TL3-s',
'oYzlxsxtAXpAltURHFa_Lu1iYb5M',
'oYzlxs53jWfSTzQegxgYUnNZtV7Q',
'oYzlxsyHQD3oc7Rn2Q7PS-cdb1PM',
'oYzlxs08uw76P6f9iyl6XDbpNx40',
'oYzlxs9wMX6zc3_-gVdEas02cl1k',
'oYzlxs-mPrUp988c-WmMHTrKQ9BY',
'oYzlxsx8YmpfE2sfRGrfFi6TtVXs',
'oYzlxswLAG5Vx8F2a0H6o6HQifQQ',
'oYzlxswRTsFqIsalUbgo4hFF2lkI',
'oYzlxswjWEDQKDro72RVEpW9yfT4',
'oYzlxs90teu8VWVYO_iyRZRmfj3Y',
'oYzlxsx_8rV3H_rXf6mtGJI8OJJg',
'oYzlxs7gATSYftoGI4uNvlQlhNcA',
'oYzlxs-5IylrqfAlVJg282MLGSk4',
'oYzlxs2fEw2u8JULFYN_KX8MfA8E',
'oYzlxsz-TaOS2JVe_m_QXgWT7YYU',
'oYzlxszgNd5KQA-xpowxypKYCwgA',
'oYzlxs8jn_33uFpYECaHAGwfC21o',
'oYzlxs42d32drKVduWVmLFrlhxuc',
'oYzlxs6y5kzBYu7vfdSAAQp10jIo',
'oYzlxs8PuKIfpShVkDMIab7v3BrQ',
'oYzlxs8vjwNyutbDTBVsdSakQY0o',
'oYzlxs-LWu3YWKXfa7fcfc9cr3sc',
'oYzlxs_6syXC6wwKygXGKP9cwnoc',
'oYzlxs0UAutzMp5mp6nbVYY6x0wc',
'oYzlxsyToUazMd6_R7cpJcf_soes',
'oYzlxs4sX0qdoDLLmIs0OXxqgrIo',
'oYzlxsygy6LsuNi1dtGLc591-AoM',
'oYzlxswH9Tv0rKgYavjs3cIa3shA',
'oYzlxs-2wr8LtHv2auOhDWh8OkJQ',
'oYzlxs4NMKVLAANslBsznNKtwGcM',
'oYzlxs33NVdZaoF9qixFkctJEnJk',
'oYzlxs7CLjHPDNNUlXZ9eDa6WMYw',
'oYzlxsz4-Lzrh0xTq67SrD9VUv6E',
'oYzlxsxqmCXlnRzVO5FoH4bha3e4',
'oYzlxs9oz9yeov2L1DjtoXWB_pvI',
'oYzlxs8r7uKAw9XoE6NJKmUe7KwA',
'oYzlxs-u7i-9cw7nKdx41VgAz1ZU',
'oYzlxs_X1ETo2RrUWiAe3ZirjC6c',
'oYzlxs8vsOr38cR9EHUYzUo5KKA4',
'oYzlxs-k3VTmxrs3EB2SKiOUGNY8',
'oYzlxs_6j2XNFI754f1ljr_BloVc',
'oYzlxs24Yt0wzNmSbhXhyPMR3he0',
'oYzlxsxmuQvW6BHQrinFmYpl0G2s',
'oYzlxs0VmYt5GzXlNC5q2nd9KzYY',
'oYzlxs_1h8aPtZnBzpS0IrHv8Zc0',
'oYzlxs4p9HVvLXtMPJBRLzlIqgGM',
'oYzlxs_iLKiVGv0zuHZcO2dA5NYg',
'oYzlxsw7HBJFfbTnRTVT004I7I_U',
'oYzlxs7iKqmbDOra0l5_jP9-mfAQ',
'oYzlxs-EvOplqhaoTROKahiA1evo',
'oYzlxsxysgqB3Inx6j8OJ1osEHog',
'oYzlxs3kHJ-0cL8PFwd-4iyJ53Ns',
'oYzlxs8QX6N9Z8QVgsGX9tkzgNOg',
'oYzlxs-ChEeMUZX6uRSJkbO2Sqq8',
'oYzlxs4d8CC152ah3YxgdnYSSf6c',
'oYzlxszenhtixsXf2imQynFpFPCA',
'oYzlxswEhVa2L2kwMcU5jsGHRTik',
'oYzlxs6Xnkb_k_El7uba5E2PJOVI',
'oYzlxs2FfsGNG3M3O8FwsJxhLppQ',
'oYzlxs1gAkwXpFoGJ23_iH86BC9k',
'oYzlxswlsrdrqxBEuyKkH1Kbar_o',
'oYzlxs30QYN97hIxo2LL6n1fdpAI',
'oYzlxs1ee69NA3BJgMe2jUDPEK9A',
'oYzlxs0CD4OVML0-oWF0drQ-B3Gs',
'oYzlxs5Vl53Ih-aZlqJN7TKgR9i0',
'oYzlxs5BUa1vlIY_PaQ7lTGjBhj0',
'oYzlxs5Jt8JSGnYEGrja7g_VTNzM',
'oYzlxszLOw1kR-F-F1EeDyNZ8wW8',
'oYzlxsyCKRUgGQs_pdBrUJvkKDKk',
'oYzlxs29rXKaIoRYgbPYab32NYqA',
'oYzlxszAi-Lp_9bZtbAciggThiVk',
'oYzlxsy9p-jhWUCHP40WBZQ7cREA',
'oYzlxsy_MPxo8ck-Z9nbUhlH_HIk',
'oYzlxs50LJZWOKWRGe8XNDSifOa4',
'oYzlxs-hWa3YWKXfa7fcfc9cr3sc']


setInterval(function(){
    $.ajax({
        type: "GET",
        url: "http://chat.jiaxianghua.org/svc/common",	       
        data:"?type=likeThisPoetry&target=push&mediaid=Zh4E0d78yA8Hj1nHfH3wXVKl4tO_WRbcbZvsFkXOhdjAKw8qlanSJUgv2FKpfP2A&openid="+a[n],           
        success: function(msg){
            var msg = JSON.parse(msg).msg == 'SUCCESS' ? '成功':'失败';
			n++
            if(msg=='成功'){
                console.log(a[n])
            }
        }
    });
},1000)