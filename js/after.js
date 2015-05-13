/* 
* @Author: wanghongxin
* @Date:   2015-05-08 23:57:28
* @Last Modified by:   wanghongxin
* @Last Modified time: 2015-05-13 15:53:34
*/
;(function(root,factory){//后续模块
    var media=require('./lib/audio.js');
    var side=require('./lib/side.js');
    var advert=require('./lib/banner.js');
    var interaction=require('./lib/interaction.js');
    factory.call(root,media.media,side.side,advert.advert,interaction.interaction);
}(this,function(media,side,advert,interaction){
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
}));