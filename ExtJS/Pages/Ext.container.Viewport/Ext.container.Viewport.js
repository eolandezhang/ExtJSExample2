/// <reference path="~/Scripts/ext-4.2.1.883/ext-all-dev.js" />
Ext.onReady(function () {
	Ext.create('Ext.container.Viewport', {
		layout: 'border',	
		items: [{
			title: '1',
			region: 'north',
			html: ' <a href="../../Default.html">首页</a>',
			height: 100
		}, {
			title: '2',
			region: 'west',
			width: 150,
			html: 'left'
		}, {
			title: '3',
			html: 'middle',
			region: 'center'
		}]
	});
});