/// <reference path="~/Scripts/ext-4.2.1.883/ext-all-dev.js" />
var baseUrl = "http://" + window.location.hostname + "/ExtJSProject.WebApi/api/";
Ext.onReady(function () {

    Ext.QuickTips.init();
    var form = new Ext.form.Panel({
        title: '表单提交示例',
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
            msgTarget: 'side'
        },
        items: [
        {
            name: 'UserName',
            fieldLabel: '用户名'
        }, {
            name: 'Password',
            fieldLabel: '密码',
            inputType: 'password'
        }
        ],
        buttons: [
        {
            text: '登入',
            handler: login
        }, {
            text: '重置',
            handler: reset
        }]
    });

    function login() {
        form.getForm().submit({
            clientValidation:true,
            url: baseUrl + 'Login/Validate',
            method: 'GET',
            success: function (form, action) {
                Ext.Msg.alert('提示', '成功');
            },
            failure: function (form, action) {
                console.log(action);
                Ext.Msg.alert('提示', '失败');
            }
        });
    }

    function reset() {
        form.form.reset();
    }
});