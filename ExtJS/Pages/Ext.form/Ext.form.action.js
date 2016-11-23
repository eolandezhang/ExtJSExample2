/// <reference path="~/Scripts/ext-4.2.1.883/ext-all-dev.js" />
Ext.onReady(function () {
    Ext.QuickTips.init();
    var productForm = Ext.create('Ext.form.Panel', {
        title: '表单加载示例',
        padding:10,
        frame: true,
        fieldDefaults: {
            labelSeparator: '：',
            labelWidth: 100,
            width:300
        },
        renderTo: 'form',
        items: [{
            fieldLabel: '产品名称',
            xtype: 'textfield',
            name: 'productName',
            value:'U盘'
        }, {
            fieldLabel: '金额',
            xtype: 'numberfield',
            name: 'price',
            value:100
        }]
    });
})