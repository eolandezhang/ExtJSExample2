/// <reference path="~/Scripts/ext-4.2.1.883/ext-all-dev.js" />
/// <reference path="~/Scripts/ext-4.2.1.883/ext-all.js" />
var baseUrl = "http://" + window.location.hostname + "/ExtJS.WebApi/api/";
Ext.onReady(function () {

    var tree1 = Ext.create('Ext.tree.Panel',
    {
        title: '树面板简单示例',
        width: 150,
        height: 200,
        renderTo: 'tree1',
        root: {
            text: '树根',
            expanded: true,
            children: [
                {
                    text: '节点1',
                    leaf: true
                }, {
                    text: '节点2',
                    leaf: true
                }
            ]
        },
        viewConfig: {
            plugins: {
                ptype: 'treeviewdragdrop'
            }
        }
    });
    var tree3 = Ext.create('Ext.tree.Panel',
    {
        title: '树面板简单示例',
        width: 150,
        height: 200,
        renderTo: 'tree3',
        root: {
            text: '树根',
            expanded: true
        },
        viewConfig: {
            plugins: {
                ptype: 'treeviewdragdrop'
            }
        }
    });


    var tree2 = Ext.create('Ext.tree.Panel',
    {
        title: '树面板简单示例2',
        width: 400,
        height: 200,
        renderTo: 'tree2',
        fields: ['name', 'description'],
        columns: [
        {
            xtype: 'treecolumn',
            text: '名称',
            dataIndex: 'name',
            width: 140,
            sortable: true
        }, {
            text: '描述',
            dataIndex: 'description',
            width: 200,
            flex: 1,
            sortable: true
        }],
        root: {
            text: '树根',
            expanded: true,
            children: [
                {
                    name: '节点11',
                    description: '节点11的描述',
                    checked: true,
                    leaf: true
                }, {
                    name: '节点22',
                    description: '节点22的描述',
                    checked: false,
                    leaf: true
                }
            ]
        }
    });

});

