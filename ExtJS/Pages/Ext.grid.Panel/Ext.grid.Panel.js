/// <reference path="~/Scripts/ext-4.2.1.883/ext-all-dev.js" />
/// <reference path="~/Scripts/ext-4.2.1.883/ext-all.js" />
var baseUrl = "http://" + window.location.hostname + "/ExtJS.WebApi/api/";
Ext.onReady(function () {
    var datas = [
        [100, '张三', '男', true, new Date(1979, 09, 13), 2500],
        [100, '李四', '女', false, new Date(1978, 10, 01), 1500],
        [300, '王五', '男', false, new Date(1981, 01, 01), 1000]
    ];

    var grid = Ext.create('Ext.grid.Panel',
     {
         title: '简单Grid表格',
         renderTo: 'grid1',
         width: 800,

         frame: true,
         columnLines: true,

         //selType: 'rowmodel',

         //selType: 'cellmodel',
         //tbar:[
         //{
         //    text: '取得所选单元格',
         //    handler: function () {
         //        var cell = grid.getSelectionModel().getCurrentPosition();
         //        console.log(cell);
         //    }
         //}],

         multiSelect: true,
         selModel: {
             selType: 'checkboxmodel'
         },
         tbar: [
             {
                 text: '取得所选行',
                 handler: function () {
                     var msg = [];
                     var rows = grid.getSelectionModel().getSelection();
                     for (var i = 0; i < rows.length; i++) {
                         msg.push(rows[i].get('name'));
                     }
                     console.log(msg.join('\n'));
                 }
             }
         ],

         features: [
             Ext.create('Ext.grid.feature.RowBody',
             {
                 getAdditionalData: function (data, idx, record, orig) {
                     var headerCt = this.view.headerCt;
                     var colspan = headerCt.getColumnCount();
                     return {
                         rowBody: record.get('name'),
                         rowBodyCls: 'rowbodyColor',
                         rowBodyColspan: colspan
                     }
                 }
             }),
             {
                 ftype: 'summary'
             },
             //Ext.create('Ext.grid.feature.Grouping', {
             //    groupByText: '用本字段分组',
             //    showGroupsText: '显示分组',
             //    groupHeaderTpl: '性别：{name} ({rows.length})',
             //    startCollapsed: true
             //}),
             Ext.create('Ext.grid.feature.GroupingSummary',
             {
                 groupByText: '用本字段分组',
                 showGroupsText: '显示分组',
                 groupHeaderTpl: '性别：{name} ({rows.length})',
                 startCollapsed: true
             })
         ],


         viewConfig: {
             forceFit: true,
             stripeRows: true
         },
         store: {
             fields: ['id', 'name', 'sex', 'leader', 'birthday', 'salary'],
             groupField: 'sex',
             proxy: {
                 type: 'memory',
                 data: datas,
                 reader: 'array'
             },
             autoLoad: true
         },
         columns: [
             {
                 header: '行号',
                 xtype: 'rownumberer',
                 width: 35
             },
             {
                 header: '操作',
                 xtype: 'actioncolumn',
                 width: 50,
                 items: [
                     {
                         icon: '../../Images/Icons/edit.png',
                         handler: function (grid, rowIndex, colIndex) {
                             var rec = grid.getStore().getAt(rowIndex);
                             console.log('edit:' + rec.get('name'));
                         }
                     }
                 ]
             },
             { header: 'id', width: 100, dataIndex: 'id', sortable: true },
             {
                 header: '姓名', width: 80, dataIndex: 'name', sortable: true,
                 summaryType: 'count',
                 summaryRenderer: function (value) {
                     return '员工总数：' + value;
                 }
             },
             {
                 header: '性别',
                 dataIndex: 'sex'
             },
             {
                 header: '组长',
                 width: 50,
                 dataIndex: 'leader',
                 sortable: true,
                 xtype: 'booleancolumn',
                 trueText: '是',
                 falseText: '否'
             },
             {
                 header: '生日',
                 width: 120,
                 dataIndex: 'birthday',
                 sortable: true,
                 xtype: 'datecolumn',
                 format: 'Y年m月d日'
             },
             {
                 header: '薪资',
                 width: 120,
                 dataIndex: 'salary',
                 sortable: true,
                 xtype: 'numbercolumn',
                 format: '0,000',
                 summaryType: 'average',
                 summaryRenderer: function (value) {
                     return '平均薪资：' + value;
                 }
             }, {
                 header: '描述',
                 xtype: 'templatecolumn',
                 tpl: '{name}<tpl if="leader==false">不</tpl>是组长'
             }
         ]
     });

});

