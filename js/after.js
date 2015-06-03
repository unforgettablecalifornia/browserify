/* 
* @Author: wanghongxin
* @Date:   2015-05-08 23:57:28
* @Last Modified by:   wanghongxin
* @Last Modified time: 2015-06-03 18:28:19
*/
;(function(root,factory){//后续模块
    var media=require('./lib/audio.js');
    var side=require('./lib/side.js');
    var advert=require('./lib/banner.js');
    var interaction=require('./lib/interaction.js');
    var share=require('./lib/share.js');
    var www5cn=window.www5cn;
    factory.call(root,media,side,advert,interaction,share,www5cn);
}(this,function(media,side,advert,interaction,share,www5cn){
    function isWeiXin(){ 
        var ua = window.navigator.userAgent.toLowerCase(); 
        if(ua.match(/MicroMessenger/i) == 'micromessenger'){ 
            return true; 
        }else{ 
            return false; 
        } 
    } 
    //启动音乐模块
    media.init(www5cn.music.src);
    //启动侧边栏模块
    $.
        ajax({
            url: 'data/side.json',
            type: 'get',
            success:function(data){
                var interData={
                    back:'javascript:;',
                    reviews:'javascript:;',
                    good:'javascript:;',
                    share:'javascript:;'
                };
                data.user.message='javascript:;';
                data.user.attention='javascript:;';
                if(!isWeiXin()){
                    data.user.hotUrl='#hot';
                    data.user.homeUrl='#home';
                    data.user.downloadUrl='#download';
                    data.user.newestUrl='#newest';
                    data.user.recommendUrl='#recommend';
                    data.user.restMagazineUrl='#rest';
                    data.user.message='#message';
                    data.user.attention='#attention';
                    interData.back='#back';
                    interData.reviews='#reviews';
                    interData.good='#good';
                    interData.share='#share';

                    console.log(data);
                }
                $.extend(www5cn,data);
                side(data);
                interaction(interData);
            }
        });
    //启动广告模块
    advert(100,{
        'gdt_banner.js':[1,80],
        '5cn_banner.js':[81,100]
    },'http://img0.hx.com/magazine0120/js/');
    //启动互动模块
    // 微信分享模块
    share(www5cn.wx);
}));