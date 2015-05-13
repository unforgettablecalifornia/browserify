/* 
* @Author: wanghongxin
* @Date:   2015-05-08 23:57:28
* @Last Modified by:   wanghongxin
* @Last Modified time: 2015-05-12 17:00:26
*/
;(function(root,factory){//后续模块
    var media=require('./lib/audio.js');
    var side=require('./lib/side.js');
    factory.call(root,media.media,side.side);
}(this,function(media,side){
    //启动音乐模块
    media.init(www5cn.audio.src);
    side();
}));