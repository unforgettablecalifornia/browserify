/* 
* @Author: wanghongxin
* @Date:   2015-05-08 23:57:28
* @Last Modified by:   wanghongxin
* @Last Modified time: 2015-05-18 10:35:03
*/
'use strict';
(function(root,factory){
	var Cut=require('./lib/cut.js');
	var $=window.$;
	module.exports.app=factory.call(root,Cut,$);//app启动模块
}(this,function(Cut,$){
	return function(){
		//转场模块
		var cut=new Cut();
		window.cut=cut;
		cut.init();
		//广告模块
		//媒体模块
		//评论模块
		//目录模块
		//菜单模块
	}
}));
