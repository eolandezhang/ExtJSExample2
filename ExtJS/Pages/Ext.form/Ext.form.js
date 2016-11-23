/// <reference path="~/Scripts/ext-4.2.1.883/ext-all-dev.js" />
var baseUrl = "http://" + window.location.hostname + "/ExtJSProject.WebApi/api/";
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
            url: baseUrl + 'Book/GetByName',
            reader: { type: 'json' }
        }
    });




    Ext.QuickTips.init();
    var form = new Ext.form.Panel({
        title: '表单',
        bodyStyle: {
            padding: '10px'
        },
        //width: 400,
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
                emptyText: '未能找到匹配值'
            },
            triggerAction: 'all',
            store: bookStore,
            displayField: "Name",
            valueField: "Name",
            queryMode: 'remote',
            queryDelay: 300,
            allQuery: '',
            queryParam: 'name',
            minChars: 1
        }, {
            fieldLabel: '时间选择框',
            xtype: 'timefield',
            //width: 220,
            mstTarget: 'side',
            autoFitErrors: false,
            maxValue: '18:00',
            maxText: '时间应该小于{0}',
            minValue: '10:00',
            minText: '10:00',
            //pickerMaxHeight: 70,
            increment: 60,
            format: 'G时i分s秒',
            invalidText: '时间格式无效'
        }, {
            fieldLabel: '日期选择框',
            xtype: 'datefield',
            msgTarget: 'side',
            autoFitErrors: false,
            format: 'Y年m月d日',
            maxValue: '12/31/2008',
            minValue: '01/01/2008',
            disableDates: ['2008年03月12日'],
            disableDatesText: '禁止选择该日期',
            disableDays: [0, 6],
            disabledDaysText: '禁止选择该日期',
            value: '12/31/2008'
        }, {
            name: 'age',
            xtype: 'hidden'
        }, {
            fieldLabel: 'HTML字段',
            xtype: 'htmleditor',
            width: 800,
            height: 150,
            value: 'ExtJS4',
            createLinkText: '创建超链接',
            defaultLinkValue: 'http://',
            enableAlignments: true,
            enableColors: true,
            enableFont: true,
            enableFontSize: true,
            enableFormat: true,
            enableLinks: true,
            enableLists: true,
            enableSourceEdit: true,
            fontFamilies: ['宋体', '隶书', '黑体']
        }, {
            fieldLabel: '展示字段',
            xtype: 'displayfield',
            value: '<b>ExtJS4登场'
        }, {
            xtype: 'label',
            forId: 'title',
            text: '昵称'
        }, {
            name: 'title',
            xtype: 'textfield',
            inputId: 'title',
            hideLabel: true
        }, {
            title: '产品信息',
            xtype: 'fieldset',
            collapsible: true,
            bodyPadding: 5,
            checkboxToggle: true,
            checkboxName: 'description',
            items: [{
                xtype: 'textfield',
                fieldLabel: '产地'
            }, {
                xtype: 'textfield',
                fieldLabel: '售价'
            }]
        }, {
            fieldLabel: '商品名称'
        }, {
            xtype: 'fieldcontainer',
            fieldLabel: '生产日期',
            hideLabel: false,
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            combineErrors: true,
            fieldDefaults: {
                hideLabel: true,
                allowBlank: false
            },
            defaultType: 'textfield',
            items: [{
                fieldLabel: '年',
                flex: 1,
                inputId: 'yearId'
            }, {
                xtype: 'label',
                forId: 'yearId',
                text: '年'
            }, {
                fieldLabel: '月',
                flex: 1,
                inputId: 'monthId'
            }, {
                xtype: 'label',
                forId: 'monthId',
                text: '月'
            }, {
                fieldLabel: '日',
                flex: 1,
                inputId: 'dayId'
            }, {
                xtype: 'label',
                forId: 'dayId',
                text: '日'
            }
            ]
        }, {
            fieldLabel: '产地来源'
        }, {
            xtype: 'filefield',
            name: 'photo',
            fieldLabel: '照片',
            anchor: '100%',
            buttonText: '选择照片...'
        }, {
            fieldLabel: '电子邮件',
            vtype: 'email'
        }, {
            fieldLabel: '网址',
            vtype: 'url'
        }, {
            fieldLabel: '字母',
            vtype: 'alpha'
        }, {
            fieldLabel: '字母和数字',
            vtype: 'alphanum'
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


