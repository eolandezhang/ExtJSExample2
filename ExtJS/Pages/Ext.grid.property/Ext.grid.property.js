/// <reference path="~/Scripts/ext-4.2.1.883/ext-all-dev.js" />
/// <reference path="~/Scripts/ext-4.2.1.883/ext-all.js" />
var baseUrl = "http://" + window.location.hostname + "/ExtJS.WebApi/api/";
Ext.onReady(function () {

    var grid = Ext.create('Ext.grid.property.Grid',
    {
        title: 'Ext.grid.property.Grid示例',
        width:300,
        renderTo: 'grid1',
        customEditors: {
            '性别': Ext.create('Ext.form.ComboBox',
            {
                editable: false,
                displayField: 'sex',
                mode: 'local',
                triggerAction: 'all',
                store: Ext.create('Ext.data.ArrayStore',
                {
                    fields: ['sex'],
                    data: [['男'], ['女']]
                })
            }),
            '出生日期': Ext.create('Ext.form.DateField',
            {
                format: 'Y/m/d',
                selectOnFocus: true,
                allowBlank: false
            })
        },
        customRenderers: {
            '是否已婚': function (v) {
                return v ? '是' : '否';
            },
            '出生日期': Ext.util.Format.dateRenderer('Y/m/d')
        },
        source: {
            '员工名称': '张三',
            '出生日期': Ext.Date.parse('10/15/2007', 'm/d/Y'),
            '性别': '男',
            '是否已婚': false,
            '年龄':29
        }
    });

});

