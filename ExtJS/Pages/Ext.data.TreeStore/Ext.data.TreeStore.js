/// <reference path="~/Scripts/ext-4.2.1.883/ext-all-dev.js" />
/// <reference path="~/Scripts/ext-4.2.1.883/ext-all.js" />
var baseUrl = "http://" + window.location.hostname + "/ExtJS.WebApi/api/";
Ext.onReady(function () {

    Ext.define('Tree',
    {
        extend: 'Ext.data.Model',
        fields: [
        { name: 'Id', type: 'string' },
        { name: 'Name', type: 'string' },
        { name: 'Count', type: 'int' }
        ]
    });

    var myStore = Ext.create('Ext.data.TreeStore',
    {
        model: 'Tree',
        nodeParam: 'Id',
        proxy: {
            type: 'ajax',
            url: baseUrl + 'Tree/Get',
            reader: 'json'
        },
        autoLoad: true,
        root: {
            name: '根节点',
            id: '-1'
        }
    });

    Ext.create('Ext.tree.Panel',
    {
        title: '分级异步加载树节点示例',
        renderTo: 'tree1',
        width: 250,
        height: 150,
        columns: [
            {
                xtype: 'treecolumn',
                text: '公司名称',
                dataIndex: 'Name',
                width: 150,
                sortable: true
            }, {
                text: '员工人数',
                dataIndex: 'Count',
                flex: 1,
                sortable: true
            }
        ],
        store: myStore,
        rootVisible: false,
        listeners: {
            beforeload: function (store, operation, eOpts) {
                var id = operation.node.get("Id");
                operation.params.Id = id;
            }
        }
    });




    var store = Ext.create('Ext.data.TreeStore',
    {
        proxy: {
            type: 'ajax',
            url: baseUrl + 'Tree/GetList'
        }
    });

    var tree = Ext.create('Ext.tree.Panel',
    {
        renderTo: 'tree2',
        store: store,
        rootVisible: false,
        useArrors: true,
        frame: true,
        title: '整体同步加载树节点',
        width: 300,
        height: 200,
        columns: [
            {
                xtype: 'treecolumn',
                text: '名称',
                dataIndex: 'text',
                width:200
            }
        ]
    });



});


