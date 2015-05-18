/* 
* @Author: wanghongxin
* @Date:   2015-05-12 14:17:54
* @Last Modified by:   wanghongxin
* @Last Modified time: 2015-05-18 10:40:09
*/

'use strict';
;(function(root,factory){
    var _=window._;
    var $=window.$;
    require('../vender/touch.js');
    module.exports=factory.call(root,_,$);
}(this,function(_,$){
    return function(){
        var html=   '<div id="clickme">'+
                    '</div>'+
                    '<div class="inter f-hide st"></div>';
        var template=_.template(html);
        $('body').prepend(template());
        var interaction=$('#clickme');
        var inter=$('.inter');
        var showed=false;
        interaction.on('tap',act);
        function act(){
            showed=!showed;
            showed&&up();
            !showed&&down();
        }
        function show(){
            inter.css({
                   'webkitTransform':'translate3d(0,'+(-100)+'px,0)',
                   '-webkit-transform':'translate3d(0,'+(-100)+'px,0)',
                   'transform':'translate3d(0,'+(-100)+'px,0)'
                });
        }
        function bye(){
            inter.addClass('f-hide');
        }
        function hide(){
            inter.css({
                   'webkitTransform':'translate3d(0,'+(0)+'px,0)',
                   '-webkit-transform':'translate3d(0,'+(0)+'px,0)',
                   'transform':'translate3d(0,'+(0)+'px,0)'
                });

        }
        function up(){
            inter.removeClass('f-hide');
            _.delay(show, 100);
        }
        function down(){
            hide();
            _.delay(bye, 300);
        }

    }
}));