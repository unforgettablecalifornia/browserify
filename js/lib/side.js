/* 
* @Author: wanghongxin
* @Date:   2015-05-12 14:17:54
* @Last Modified by:   wanghongxin
* @Last Modified time: 2015-05-18 13:51:03
*/

'use strict';
;(function(root,factory){//后续模块
    var _=window._;
    var $=window.$;
    require('../vender/touch.js');
    // var drag=require('./drag.js');
    var cut=window.cut;
    var www5cn=window.www5cn;
    module.exports=factory.call(root,_,$,cut,www5cn);
}(this,function(_,$,cut,www5cn){
    return function(){
        var temlplate=_.template($('#sidejs').html());
        $('body').prepend(temlplate(www5cn));
        var left_menu=$('.left_menu');
        var right_menu=$('.right_menu');
        var right_side=$('.right_side');
        var left_side=$('.left_side');
        var back=$('.back');
        var imgs=$('.smallImg');
        var pageIndex=$('#pageIndex');
        var pageTotal=cut._pageNum;
        init();
        function init(){
            left_menu.on('tap',showLeft);
            right_menu.on('tap',showRight);
            back.on('tap',hide);
            $('.catalogueContent div').on('tap',toSlide);
            //drag('.catalogueContent');
            styleInit();
            $(window).on('cut',success);
        }
        function success(e,now,pre){
            pageIndex.html(now+1+'/'+pageTotal);
        }



        function showLeft(){
            closeSide();
            left_side.
                removeClass('f-hide');
            cut.page_stop();              


            _.delay(function(){
                    left_side.css({
                            'webkitTransform':'translate3d(300px,0,0)',
                            'transform':'translate3d(300px,0,0)',
                            '-webkit-transform':'translate3d(300px,0,0)'
                        });
                }, 100);
        }
        function styleInit(){
            // var rect=$('.catalogueContent').parent().get(0).getBoundingClientRect();
            var Parentheight=$(window).height()-200;
            var smallImgHeight=(Parentheight/4)-10;
            imgs.each(function(index, el) {
                $(el).css({
                        height:smallImgHeight+'px'
                   });
            });
        }
        function showRight(){
            closeSide();
            right_side.
                removeClass('f-hide');
            left_side.addClass('f-hide');
            cut.page_stop();
             _.delay(function(){
                    right_side.
                        css({
                                'webkitTransform':'translate3d(-420px,0,0)',
                                'transform':'translate3d(-420px,0,0)',
                                '-webkit-transform':'translate3d(-420px,0,0)'
                            });
                }, 100);
        }
        function closeSide(){
            right_side.
                css({
                    
                        'webkitTransform':'translate3d(0,0,0)',
                        'transform':'translate3d(0,0,0)',
                        '-webkit-transform':'translate3d(0,0,0)'
                    });
            left_side.
                css({
                        'webkitTransform':'translate3d(0,0,0)',
                        'transform':'translate3d(0,0,0)',
                        '-webkit-transform':'translate3d(0,0,0)'
                    });

            
        }
        function toSlide(){
			
            var now=$(this).index();
            if(cut._pageNow===now){
                return;
            }
            cut.toSlide(now);
            hide();
            cut.page_start();
            $(window).trigger('cut',[now]);
        }

        function hide(){
            right_side.
                css({
                        'webkitTransform':'translate3d(0,0,0)',
                        'transform':'translate3d(0,0,0)',
                        '-webkit-transform':'translate3d(0,0,0)'
                    });
            left_side.
                css({
                        'webkitTransform':'translate3d(0,0,0)',
                        'transform':'translate3d(0,0,0)',
                        '-webkit-transform':'translate3d(0,0,0)'
                    });
            _.delay(function(){
                left_side.addClass('f-hide');
                right_side.addClass('f-hide');
            }, 300);
            cut.page_start();
        }
    }
}));