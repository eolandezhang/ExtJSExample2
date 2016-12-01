/// <reference path="~/Scripts/ext-4.2.1.883/ext-all-dev.js" />
/// <reference path="~/Scripts/ext-4.2.1.883/ext-all.js" />
Ext.onReady(function () {
    var panel = Ext.create('Ext.panel.Panel',
    {
        title: 'Ext.core.DomHelper示例',
        width: '280px',
        renderTo: 'sub1',
        html: "<div style='height:500px;'><div id='div1' style='height:200px;padding:5px;border:1px solid gray;'>原文本div1</div><div id='div2' style='height:50px;padding:5px;border:1px solid blue;'>div2</div><div id='div3' style='height:50px;padding:5px;border:1px solid red;'>div3</div></div>"
    });
    Ext.core.DomHelper.append(Ext.get('div1'), '<br/>追加文本', true);
    Ext.core.DomHelper.applyStyles(Ext.get('div1'), 'font-size:18px;color:green;font-weight:bold;');
    var mytemplate = Ext.core.DomHelper.createTemplate('<div name="{id}">' +
        '<span class="{cls}">{name:trim} {value:ellipsis(6)}<br/>' +
        '第二行文本' +
        '</span>' +
        '</div>');
    mytemplate.append(
        Ext.get("div1"),
        { id: 'myid', cls: 'myClass', name: 'foo', value: 'bar123123123123123' }, true);

    Ext.core.DomHelper.insertAfter(Ext.get('div1'),
    {
        tag: 'div', id: 'item2', html: '<div>div1 后insert</div>'
    });
    Ext.core.DomHelper.insertBefore(Ext.get('div1'),
   {
       tag: 'div', id: 'item3', html: '<div>div1 前insert</div>'
   });
    Ext.core.DomHelper.insertFirst(Ext.get('div1'),
   {
       tag: 'div', id: 'item4', html: '<div>div1 insertFirst</div>'
   });
    Ext.core.DomHelper.insertHtml('beforeBegin', document.getElementById('div1'), 'insertHtml');
    Ext.core.DomHelper.overwrite(document.getElementById('div3'), 'overwrite');



});