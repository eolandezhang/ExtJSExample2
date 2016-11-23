/// <reference path="~/Scripts/ext-4.2.1.883/ext-all-dev.js" />
var baseUrl = "http://" + window.location.hostname + "/ExtJSProject.WebApi/api/";
Ext.onReady(function () {

    Ext.QuickTips.init();
    var form = new Ext.form.Panel({
        title: '表单',
        bodyStyle: {
            padding: '10px'
        },
        width: 400,
        frame: true,
        renderTo: 'form',
        defaultType: 'textfield',
        defaults: {
            labelSeparator: '：',
            labelWidth: 100,
            width: 300,
            allowBlank: false,
            blankText: '不允许为空',
            labelAlign: 'right',
            msgTarget: 'qtip'
        },
        items: [
        {
            name: 'ProductName',
            fieldLabel: '产品名称',
            value: 'U盘'
        }, {
            fieldLabel: '金额',
            xtype: 'numberfield',
            name: 'Price',
            value: 100
        }, {
            fieldLabel: '生产日期',
            xtype: 'datefield',
            format: 'Y/m/d',
            name: 'Date'
        }, {
            xtype: 'hidden',
            name: 'ProductId',
            value: '001'
        }, {
            fieldLabel: '产品简介',
            name: 'Introduction',
            xtype: 'textarea'
        }
        ],
        buttons: [
        {
            text: '加载',
            handler: loadIntroduction
        }]
    });

    function loadIntroduction() {
        form.getForm().load({
            params:  form.getForm().getValues(),
            url: baseUrl + 'Product/GetById',
            //dataType: "json",
            //headers: { 'Content-type': 'application/json' },
            method: 'GET',
            success: function (form, action) {
                Ext.Msg.alert('提示', '产品简介加载成功');
            },
            failure: function (form, action) {
                Ext.Msg.alert('提示', '产品简介加载失败<br/>失败原因：' + action.result.errorMessage);
            }
        });

    }
});


