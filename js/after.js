/* 
* @Author: wanghongxin
* @Date:   2015-05-08 23:57:28
* @Last Modified by:   wanghongxin
* @Last Modified time: 2015-05-12 13:43:42
*/
;(function(root,factory){
    var media=require('./lib/audio.js');
    factory.call(root,media.media);
}(this,function(media){
    //启动音乐模块
    media.init(www5cn.audio.src);
}));