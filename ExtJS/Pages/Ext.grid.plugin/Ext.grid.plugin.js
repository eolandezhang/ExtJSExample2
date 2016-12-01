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
         height: 200,
         frame: true,
         columnLines: true,
         viewConfig: {
             forceFit: true,
             stripeRows: true,
             plugins: [
                  Ext.create('Ext.grid.plugin.DragDrop',
             {
                 dragGroup: 'grid1',
                 dropGroup: 'grid2'
             })
             ]
         },
         selType: 'cellmodel',
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
             { header: 'id', width: 100, dataIndex: 'id', sortable: true },
             {
                 header: '姓名', width: 80, dataIndex: 'name', sortable: true
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
                 width: 200,
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
                 format: '0,000'
             }
         ]
     });
    
    var grid2 = Ext.create('Ext.grid.Panel',
     {
         title: '简单Grid表格2',
         renderTo: 'grid2',
         height: 200,
         frame: true,
         columnLines: true,
         viewConfig: {
             forceFit: true,
             stripeRows: true,
             plugins: [
                 Ext.create('Ext.grid.plugin.DragDrop',
                     {
                         dragGroup: 'grid2',
                         dropGroup: 'grid1'
                     })
             ]
         },
         selType: 'cellmodel',
         store: {
             fields: ['id', 'name', 'sex', 'leader', 'birthday', 'salary'],
             groupField: 'sex',
             proxy: {
                 type: 'memory',
                 data: [],
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
             { header: 'id', width: 100, dataIndex: 'id', sortable: true },
             {
                 header: '姓名', width: 80, dataIndex: 'name', sortable: true
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
                 width: 200,
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
                 format: '0,000'
             }
         ]
     });


});

