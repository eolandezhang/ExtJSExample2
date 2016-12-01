/// <reference path="~/Scripts/ext-4.2.1.883/ext-all-dev.js" />
/// <reference path="~/Scripts/ext-4.2.1.883/ext-all.js" />
var baseUrl = "http://" + window.location.hostname + "/ExtJS.WebApi/api/";
Ext.onReady(function () {

    var itemsPerPage = 4;

    var store = Ext.create('Ext.data.Store',
    {
        autoLoad: { start: 0, limit: itemsPerPage },
        fields: ['Id', 'Name'],
        pageSize: itemsPerPage,
        proxy: {
            type: 'ajax',
            url: baseUrl + 'User/GetList',
            reader: {
                type: 'json',
                root: 'rows',
                totalProperty: 'results'
            }
        }
    });

    Ext.create('Ext.grid.Panel',
    {
        title: 'Ext.toolbar.Paging 示例',
        renderTo: 'grid1',
        width: 500,
        height: 200,
        frame: true,
        store: store,
        columns: [
            { header: 'Id', width: 30, dataIndex: 'Id', sortable: true },
            { header: '姓名', width: 80, dataIndex: 'Name', sortable: true }
        ],
        bbar: [
            {
                xtype: 'pagingtoolbar',
                store: store,
                displayInfo: true
            }
        ]
    });

});

