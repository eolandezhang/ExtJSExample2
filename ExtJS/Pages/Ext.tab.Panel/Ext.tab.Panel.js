/// <reference path="~/Scripts/ext-4.2.1.883/ext-all-dev.js" />
Ext.onReady(function () {
    var tabPanel= Ext.create('Ext.tab.Panel', {
        title: 'Ext.tab.Panel 示例',
        frame: true,
        height: 150,
        width: 300,
        activeTab: 1,
        renderTo: 'content',
        items: [
            { title: '1', html: '1' },
            { title: '2', html: '2' },
            { title: '3', html: '3' }
        ],
        buttons: [{
            text: '添加',
            handler:addTabPage
        }]
    });

    function addTabPage() {
        var index = tabPanel.items.length + 1;
        var tabPage = tabPanel.add({
            title: index,
            html: index,
            closable:true
        });
        tabPanel.setActiveTab(tabPage);
    }

});