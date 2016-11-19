/// <reference path="~/Scripts/ext-4.2.1.883/ext-all-dev.js" />
var baseUrl = "http://" + window.location.hostname + "/ExtJS.WebApi/api/";
Ext.onReady(function () {

    Ext.regModel('PostInfo',
    {
        fields: [{ name: 'province' }, { name: 'post' }]
    });

    var postStore = Ext.create('Ext.data.Store',
    {
        model: 'PostInfo',
        data: [
            { province: '北京', post: 100000 },
            { province: '通县', post: 101100 },
            { province: '昌平', post: 102200 }
        ]
    });

    Ext.regModel('BookInfo',
   {
       fields: [{ name: 'Name', type: 'string' }]
   });

    var bookStore = Ext.create('Ext.data.JsonStore',
    {
        model: 'BookInfo',
        proxy: {
            type: 'ajax', 
            url: baseUrl + 'Book/Get',
            //url:'book.json',
            reader: { type: 'json' }
        }
    });




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
            mstTarget: 'qtip'
        },
        items: [
        {
            name: 'userName',
            fieldLabel: '姓名'
        }, {
            xtype: 'numberfield',
            name: 'age',
            allowDecimals: false,
            maxValue: 150,
            minValue: 0,
            fieldLabel: '年龄'
        }, {
            xtype: 'textarea',
            fieldLabel: '备注',
            id: 'memo'
        }, {
            xtype: 'radio',
            name: 'sex1',
            fieldLabel: '性别',
            boxLabel: '男'
        }, {
            xtype: 'radio',
            name: 'sex1',
            fieldLabel: '性别',
            boxLabel: '女'
        }, {
            xtype: 'checkboxfield',
            name: 'swim1',
            fieldLabel: '爱好',
            boxLabel: '游泳'
        }, {
            xtype: 'checkboxfield',
            name: 'walk1',
            fieldLabel: '爱好',
            boxLabel: '散步'
        }, {
            xtype: 'radiogroup',
            fieldLabel: '性别',
            columns: 2,
            items: [
                { boxLabel: '男', name: 'sex', inputValue: 'male' },
                { boxLabel: '女', name: 'sex', inputValue: 'female' }
            ]
        }, {
            xtype: 'checkboxgroup',
            fieldLabel: '爱好',
            columns: 3,
            items: [
                { boxLabel: '游泳', name: 'swim' },
                { boxLabel: '散步', name: 'walk' },
                { boxLabel: '阅读', name: 'read' },
                { boxLabel: '游戏', name: 'game' },
                { boxLabel: '电影', name: 'movie' }
            ]
        }, {
            xtype: 'triggerfield',
            id: 'memo1',
            fieldLabel: '触发字段',
            hideTrigger: false,
            onTriggerClick: function () {
                var memo = form.getForm().findField('memo1');
                alert(memo.getValue());
            }
        }, {
            xtype: 'spinnerfield',
            fieldLabel: '微调字段',
            id: 'salary',
            value: 100,
            onSpinUp: function () {
                var salaryCmp = Ext.getCmp('salary');
                salaryCmp.setValue(Number(salaryCmp.getValue()) + 1);
            },
            onSpinDown: function () {
                var salaryCmp = Ext.getCmp('salary');
                salaryCmp.setValue(Number(salaryCmp.getValue()) - 1);
            }
        }, {
            xtype: 'combo',
            listConfig: {
                emptyText: '未能找到匹配值',
                maxHeight: 160
            },
            name: 'post',
            fieldLabel: '邮政编码',
            triggerAction: 'all',
            store: postStore,
            displayField: 'province',
            valueField: 'post',
            queryMode: 'local',
            forceSelection: true,
            typeAhead: true,
            value: '100000'
        }, {
            xtype: 'combo',
            fieldLabel: '书籍列表',
            listConfig: {
                loadingText: '正在加载书籍信息',
                emptyText: '未能找到匹配值',
                maxHeight: 160,
               
            },

            triggerAction: 'all',
            store: bookStore,
            displayField: "Name",
            valueField: "Name",
            //mode: 'local',
            queryMode: 'remote',
            queryDelay: 300
        }
        ],
        buttons: [
        {
            text: '设定',
            handler: function () {
                form.form.setValues({ userName: 'tom', age: '11' });
            }
        }, {
            text: '取值',
            handler: function () {
                var memo = form.getForm().findField('memo');
                alert(memo.getValue());
            }
        }]
    });
});


