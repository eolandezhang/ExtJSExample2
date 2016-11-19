/// <reference path="~/Scripts/ext-4.2.1.883/ext-all-dev.js" />

Ext.onReady(function () {
    var toolbar = new Ext.toolbar.Toolbar({
        renderTo: 'toolbar'
    });
   
    toolbar.add([
       {
           text: "新建",
           handler: onButtonClick
       }, {
           text: '打开',
           handler: onButtonClick
       }, {
           text: '保存',
           handler: onButtonClick
       }, '-',
       {
           xtype: 'textfield',
           hideLabel: true,
           width: 150
       },
       '->',
       '<a href=#>超链接</a>',
       { xtype: 'tbspacer', width: 50 },
       '静态文本'
    ]);
    function onButtonClick(btn) {
        alert(btn.text);
    }

    Ext.get('EnableToolbar')
        .on('click',
            function () {
                toolbar.enable();
            });
    Ext.get('DisableToolbar')
       .on('click',
           function () {
               toolbar.disable();
           });

});


