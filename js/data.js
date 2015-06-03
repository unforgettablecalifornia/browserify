/* 
* @Author: wanghongxin
* @Date:   2015-05-08 23:57:28
* @Last Modified by:   wanghongxin
* @Last Modified time: 2015-06-03 17:57:55
*/
'use strict';
(function(root,factory){
    var app=require('./app.js');
    var _=require('./vender/underscore.js');
    require('./vender/ajax.js');
    var parseData=require('./lib/parseData.js');
    var data=factory.call(root,app.app,_,parseData);//加载数据模块
    // $.
    //     ajax({
    //         url: 'data/page.json',
    //         type: 'get',
    //         success:function(data){
    //             console.log(parseData(data));
    //         }
    //     });
    data(['./js/bin/follow.js']);
}(this,function(app,_,parseData){

    function getScript(url){
        var script=document.createElement('script');
        script.defer=true;//非阻塞ui
        script.src=url;
        document.body.appendChild(script);
    }
    return function(targets){
        var magaTpl=_.template($('#maga').html());
        $.ajax({
            'url':'data/page.json',
            'dataType':'text',
            'success':function(data){
                data=eval("("+data+")");

                var newData=parseData(data);
                window.www5cn=newData;
                $('body').prepend(magaTpl(newData));
                var real_init=_.after(3,initialize)
                var preLoadList=_.first(newData.pages,3);
                _.each(preLoadList,function(item){
                    var img=new Image();
                    img.onload=real_init;
                    img.src=item.background.style.backgroundImage.replace(/url\((.{0,})\)/,'$1');
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
