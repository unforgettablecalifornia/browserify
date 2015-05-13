/* 
* @Author: wanghongxin
* @Date:   2015-05-12 14:17:54
* @Last Modified by:   wanghongxin
* @Last Modified time: 2015-05-13 18:33:14
*/

'use strict';
;(function(root,factory){//后续模块
    var $=window.$;
    require('./weixin.js');
    module.exports.share=factory.call(root,$);
}(this,function($){
    return function(opts){
        $(document.body).wx(opts);
    }
}));