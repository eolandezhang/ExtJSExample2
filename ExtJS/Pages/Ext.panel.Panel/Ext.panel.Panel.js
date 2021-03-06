﻿/// <reference path="~/Scripts/ext-4.2.1.883/ext-all-dev.js" />
Ext.onReady(function () {
    Ext.create('Ext.panel.Panel',
    {
        title: '面板头部',
        tbar: [
	    {
	        text: 'Button 1',
	        handler: function () { alert('Button 1') }
	    }],
        bbar: ['底端工具栏'],
        height: 200,
        width: 300,
        frame: true,
        renderTo: 'content',
        bodyPadding: 5,
        bodyStyle: 'background-color:#fff',
        html: '面板体',
        tools: [
            { id: 'save' },
            { id: 'toggle' },
            { id: 'close' },
            { id: 'maximize' }
        ],
        buttons: [
        {
            text: '面板底部'
        }]
    });

    Ext.create('Ext.panel.Panel', {
        title: '加载远程页面',
        renderTo: 'content2',
        height: 200,
        width: 300,
        frame: true,
        autoScroll: true,
        collapsible: true,
        bodyPadding: 5,
        bodyStyle: 'background-color:#fff',
        autoLoad: 'Page1.html'
    });

    Ext.create('Ext.panel.Panel', {
        title: '加载本地资源',
        renderTo: 'content3',
        height: 200,
        width: 300,
        frame: true,
        autoScroll: true,
        collapsible: true,
        bodyPadding: 5,
        bodyStyle: 'background-color:#fff',
        contentEl: 'localElement'
    });

    var htmlArray = [
'<table border=1>',
'<tr>',
    '<td>',
        'Column 1',
    '</td>',
     '<td>',
        'Column 2',
    '</td>',
'</tr>',
'<tr>',
    '<td>',
        '1',
    '</td>',
    '<td>',
        '2',
    '</td>',
'</tr>',
'</table>'
    ];

    Ext.create('Ext.panel.Panel', {
        title: '使用html配置自定义面板内容',
        renderTo: 'content4',
        height: 200,
        width: 300,
        frame: true,
        autoScroll: true,
        collapsible: true,
        bodyPadding: 5,
        bodyStyle: 'background-color:#fff',
        html: htmlArray.join('')
    });

    Ext.create('Ext.panel.Panel', {
        title: '使用items配置项添加单一组件',
        renderTo: 'content5',
        height: 300,
        width: 300,
        frame: true,
        autoScroll: true,
        collapsible: true,
        bodyPadding: 5,
        bodyStyle: 'background-color:#fff',
        items: [
        {
            xtype: 'datepicker',
            minDate: new Date()
        }]

    });

    Ext.create('Ext.panel.Panel', {
        title: '使用items配置项添加多个组件',
        renderTo: 'content6',
        height: 200,
        width: 300,
        frame: true,
        autoScroll: true,
        collapsible: true,
        bodyPadding: 5,
        bodyStyle: 'background-color:#fff',
        layout: 'auto',
        items: [
            {
                title: '嵌套面板一',
                html: 'abc'
            }, {
                title: '嵌套面板二',
                html: 'def'
            }
        ]
    });

    var panel = Ext.create('Ext.panel.Panel', {
        title: '使用items配置项添加多个组件',
        renderTo: 'content7',
        activeItem: 0,
        height: 200,
        width: 300,
        frame: true,
        autoScroll: true,
        collapsible: true,
        bodyPadding: 5,
        bodyStyle: 'background-color:#fff',
        layout: 'card',
        items: [
            {
                title: '嵌套面板一',
                html: 'abc',
                id: 'p1'
            }, {
                title: '嵌套面板二',
                html: 'def',
                id: 'p2'
            }
        ],
        buttons: [
        {
            text: '上一页',
            handler: changePage
        }, {
            text: '下一页',
            handler: changePage
        }]
    });

    function changePage(btn) {
        var index = Number(panel.layout.activeItem.id.substring(1));
        if (btn.text == '上一页') {
            index -= 1;
            if (index < 1) {
                index = 1;
            }
        }
        else {
            index += 1;
            if (index > 2) {
                index = 3;
            }
        }
        panel.layout.setActiveItem('p' + index);
    }


    Ext.create('Ext.panel.Panel', {
        title: '使用items配置项添加多个组件',
        renderTo: 'content8',
        height: 200,
        width: 300,
        frame: true,
        autoScroll: true,
        collapsible: true,
        bodyPadding: 5,
        bodyStyle: 'background-color:#fff',
        layout: 'anchor',
        items: [
            {
                anchor: '50% 50%',
                title: '嵌套面板一',
                html: 'abc'
            }
        ]
    });

    Ext.create('Ext.panel.Panel', {
        title: '使用items配置项添加多个组件',
        renderTo: 'content9',
        height: 200,
        width: 300,
        frame: true,
        autoScroll: true,
        collapsible: true,
        bodyPadding: 5,
        bodyStyle: 'background-color:#fff',
        layout: 'anchor',
        items: [
            {
                anchor: '-20 -20',
                title: '嵌套面板一',
                html: 'abc'
            }
        ]
    });

    Ext.create('Ext.panel.Panel', {
        title: '使用items配置项添加多个组件',
        renderTo: 'content10',
        height: 250,
        width: 300,
        frame: false,
        autoScroll: true,
        collapsible: true,
        bodyPadding: 5,
        bodyStyle: 'background-color:#fff,padding:15px;',
        layout: 'anchor',
        items: [
            {
                anchor: 'r b',
                title: '嵌套面板一',
                width: 200,
                height: 130,
                html: 'abc'
            }
        ]
    });
    Ext.create('Ext.panel.Panel', {
        title: '使用items配置项添加多个组件',
        renderTo: 'content11',
        height: 250,
        width: 300,
        frame: false,
        autoScroll: true,
        collapsible: true,
        bodyPadding: 5,
        bodyStyle: 'background-color:#fff,padding:15px;',
        layout: 'anchor',
        items: [
            {
                x: 10,
                y: 10,
                title: '嵌套面板一',
                width: 200,
                height: 130,
                html: 'abc'
            }
        ]
    });


    Ext.create('Ext.panel.Panel', {
        title: '使用items配置项添加多个组件',
        renderTo: 'content12',
        height: 150,
        width: 250,
        frame: true,
        autoScroll: true,
        collapsible: true,
        bodyPadding: 5,
        layout: 'column',
        default: {
            bodyStyle: 'background-color:#fff',
            height: 100,
            frame: true,
        },
        items: [
            {
                title: '嵌套面板一',
                width: 100,
                height: 100
            }, {
                title: '嵌套面板二',
                width: 100,
                height: 100
            }
        ]
    });

    Ext.create('Ext.panel.Panel', {
        title: '使用items配置项添加多个组件',
        renderTo: 'content13',
        height: 250,
        width: 400,
        frame: true,
        bodyPadding: 5,
        layout: 'column',
        default: {
            bodyStyle: 'background-color:#fff',
            height: 100,
            frame: true,
        },
        items: [
            {
                title: '嵌套面板一',
                columnWidth: .3,
                height: 100
            }, {
                title: '嵌套面板二',
                columnWidth: .7,
                height: 100
            }, {
                title: '嵌套面板三',
                width: 100,
                height: 100
            }
        ]
    });

    Ext.create('Ext.panel.Panel', {
        title: '使用items配置项添加多个组件',
        renderTo: 'content14',
        height: 250,
        width: 300,
        bodyPadding: 5,
        frame: true,
        layout: {
            type: 'table',
            columns: 4
        },
        default: {
            bodyStyle: 'background-color:#fff',
            width: 50,
            height: 100,
            frame: true,
        },
        items: [
            {
                title: '一',
                width: 150,
                height: 100,
                colspan: 3
            }, {
                title: '二',
                width: 50,
                height: 200,
                rowspan: 2
            }, {
                title: '三',
                width: 50,
                height: 100,
            }, {
                title: '四',
                width: 50,
                height: 100
            }, {
                title: '五',
                width: 50,
                height: 100
            }
        ]
    });


    Ext.create('Ext.panel.Panel', {
        title: 'Border 布局示例',
        layout: 'border',
        height: 400,
        width: 400,
        frame: true,
        bodyPadding: 5,
        renderTo: 'content15',
        defaults: {
            collapsible: true
        },
        items: [{
            title: 'north panel',
            html: '上',
            region: 'north',
            height: 100
        }, {
            title: 'sourth panel',
            html: '下',
            region: 'south',
            height: 100
        }, {
            title: 'east panel',
            html: '右',
            region: 'east',
            width: 100
        }, {
            title: 'main content',
            html: '中',
            region: 'center'
        }]
    });


    Ext.create('Ext.panel.Panel', {
        title: 'HBox布局示例',
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        height: 150,
        width: 300,
        frame: true,
        renderTo: 'content16',
        bodyPadding: 5,
        items: [{
            title: '1',
            flex: 1,
            html: '1/4'
        }, {
            title: '2',
            flex: 1,
            html: '1/4'
        }, {
            title: '3',
            flex: 2,
            html: '1/2'
        }]
    });

  








});