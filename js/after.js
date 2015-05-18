/* 
* @Author: wanghongxin
* @Date:   2015-05-08 23:57:28
* @Last Modified by:   wanghongxin
* @Last Modified time: 2015-05-18 10:40:14
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
    //启动音乐模块
    media.init(www5cn.audio.src);
    //启动侧边栏模块
    side();
    //启动广告模块
    advert(100,{
        'gdt_banner.js':[1,80],
        '5cn_banner.js':[81,100]
    },'http://img0.hx.com/magazine0120/js/');
    //启动互动模块
    interaction();
    // 微信分享模块
    share(www5cn.wx);
}));