/* 
* @Author: wanghongxin
* @Date:   2015-05-08 23:57:28
* @Last Modified by:   wanghongxin
* @Last Modified time: 2015-06-03 19:04:03
*/
;(function(root,factory){
    var _=window._;
    var $=window.$;
    module.exports=factory.call(root,_,$);
}(this,function(_,$){
    return function(data) {
                var maga = {};
                data = data.obj;
                console.log(data)
                // maga.id = data.id;
                // maga.wgUser = data.wgUser;
                // maga.media={
                //     audio:{}
                // };
                maga.music={};
                maga.music.src="img/2.mp3";
                maga.music.musicId = "2"; 
                maga.pages = _.map(data.pageslist,
                    function(item, index) {
                        var page = {
                            uniqueId:_.uniqueId('page_'),
                            order: item.pageNum,
                            effects:[],
                            background: {
                                style:{
                                    backgroundColor: item.backgroundImage.fillcolor,
                                    backgroundImage: item.backgroundImage.image.url,
                                    backgroundRepeat:'no-repeat',
                                    backgroundPosition:'30px 30px',
                                    backgroundSize:'100% 100%'
                                },
                                effects:[]
                            },
                            floatages: _.map(item.elementsList,
                                function(item, index) {
                                    var element;
                                    console.log(item.elementType)
                                    switch (item.elementType) {
                                        case 'image':
                                            element={
                                                type:'image',
                                                style:{
                                                    left:item.positionX,
                                                    top:item.positionY,
                                                    width:item.elementChild.width,
                                                    height:item.elementChild.height,
                                                    position:item.elementChild.position,
                                                    backgroundColor:item.elementChild.fillColor,
                                                    opacity:item.opacityOpacity,
                                                    transform:item.rotation,
                                                    shadow:item.shadow,
                                                },
                                                src:item.elementChild.image.url,
                                                effects:_.map(item.styles,
                                                    function(item,index){
                                                        return item.key;
                                                    })
                                            };
                                            break;
                                        case 'shape':
                                            element={
                                                type:'shape',
                                                style:{
                                                    left:item.positionX,
                                                    top:item.positionY,
                                                    width:item.elementChild.width,
                                                    height:item.elementChild.height,
                                                    color:item.elementChild.fillColor,
                                                    opacity:item.opacityOpacity,
                                                },
                                                effects:_.map(item.styles,
                                                    function(item,index){
                                                        return item.key;
                                                    })
                                            };
                                            break;
                                        case 'btn':
                                            element={
                                                type:'btn',
                                                style:{
                                                    left:item.positionX,
                                                    top:item.positionY,
                                                    width:item.elementChild.width,
                                                    height:item.elementChild.height,
                                                    color:item.elementChild.fontColor,
                                                    opacity:item.opacityOpacity,
                                                    transform:item.rotation,
                                                    shadow:item.shadow,
                                                    fontSize:item.elementChild.fontSize,
                                                    backgroundColor:item.elementChild.backgroundColor,
                                                    borderColor:item.elementChild.border,
                                                    borderWidth:item.elementChild.borderstyle,
                                                    borderStyle:item.elementChild.bordercrude,
                                                },
                                                src:item.elementChild.url,
                                                value:item.elementChild.context,
                                                effects:_.map(item.styles,
                                                    function(item,index){
                                                        return item.key;
                                                    })
                                            };
                                            break;
                                        case 'text':
                                            element={
                                                type:'text',
                                                style:{
                                                    left:item.positionX,
                                                    top:item.positionY,
                                                    // width:item.elementChild.width,
                                                    // height:item.elementChild.height,
                                                    color:item.elementChild.color,
                                                    opacity:item.opacityOpacity,
                                                    transform:item.rotation,
                                                    shadow:item.shadow,
                                                    fontSize:item.elementChild.fontsize,
                                                    backgroundColor:item.elementChild.backgroundColor,
                                                    // borderColor:item.elementChild.border,
                                                    // borderWidth:item.elementChild.borderstyle,
                                                    borderStyle:item.elementChild.bordercrude,
                                                },
                                                value:item.elementChild.content,
                                                effects:_.map(item.styles,
                                                    function(item,index){
                                                        return item.key;
                                                    })
                                            };
                                            break;
                                    }
                                    // element.uniqueId=_.uniqueId('floatage_');
                                    return element;
                                })
                        };
                        return page;
                    });
                return maga;
            }
}));