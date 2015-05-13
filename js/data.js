/* 
* @Author: wanghongxin
* @Date:   2015-05-08 23:57:28
* @Last Modified by:   wanghongxin
* @Last Modified time: 2015-05-13 17:36:44
*/
'use strict';
(function(root,factory){
    var app=require('./app.js');
    var _=require('./vender/underscore.js');
    require('./vender/ajax.js');
    var data=factory.call(root,app.app,_);//加载数据模块
    data(['./js/bin/follow.js']);
}(this,function(app,_){

    function getScript(url){
        var script=document.createElement('script');
        script.defer=true;//非阻塞ui
        script.src=url;
        document.body.appendChild(script);
    }
    return function(targets){
        var magaTpl=_.template($('#maga').html());
        $.ajax({
            'url':'data/maga.json',
            'dataType':'text',
            'success':function(data){
                data=eval("("+data+")");
                window.www5cn=data;
                $('body').prepend(magaTpl(data));
                var real_init=_.after(3,initialize)
                var preLoadList=_.first(data.pages,3);
                _.each(preLoadList,function(item){
                    var img=new Image();
                    img.onload=real_init;
                    img.src=item.conBackground;
                });

                function initialize(){
                    //初始化模块执行
                    app();
                    //同步执行完毕，进入下一阶段
                    //加载后续模块
                    _.each(targets,getScript);
                }
            },
            'error':function(error){
                console.log(error);
                alert('为什么加载数据失败了，如果失败了，我这里是没法渲染的');
            }
        });
    }
}));
