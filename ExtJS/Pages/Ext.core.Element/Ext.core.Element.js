/// <reference path="~/Scripts/ext-4.2.1.883/ext-all-dev.js" />
Ext.onReady(function () {
    var panel = new Ext.Panel({
        title: '示例',
        renderTo: 'sub1',
        bodyPadding: 5,
        width: '300px',
        html: "<div id='div1' style='height:100px'>我的 id 是 div1 </div>"
    });
    var el = Ext.select(["div1"], true, "fat1");
    el.on('click',
        function () {
            Ext.Msg.alert('msg', 'Ext.select(["div1"], true, "fat1")  div1');
        });

    var panel2 = Ext.create('Ext.panel.Panel',
    {
        id: 'panel2',
        title: 'Selector',
        renderTo: 'sub2',
        width: '300px',
        html: "<div id='div2' property1='pro1' style='height:100px'><div id='01 property1='pro1'>我的id是sub3</div><div id='02'></div></div>"
    });
    var el2 = Ext.query('#div2');
    var targetD = Ext.query('div[property1=pro1]');
    if (el2.length > 0 || targetD.length > 0) {
        var msg = 'Ext.query(\'#div2\') 取得了' +
            el2.length +
            '个id 为 div2 的节点，' +
            'Ext.query(\'div[property1=pro1]\') 取得了' +
            targetD.length +
            '个类型为 div  具备属性property1，且值为 pro1 的节点';
        console.log(msg);
    };
    var comp = Ext.getCmp('panel2');
    console.log('Ext.getCmp(\'panel2\') id:panel2 type:' + comp.getXType());

    var dom = Ext.getDom('panel2');
    console.log("Ext.getDom('panel2') id:" + dom.id + " 通过另一种方式取得id：" + panel2.el.dom.id);
    console.log('panel2 是否为空？' + Ext.isEmpty(panel2));


    COM.PCCW.portal();

    var arr = [];
    for (var i = 0; i < 5; i++) {
        arr.push(i);
    }
    Ext.each(arr, function (item, index, allItems) { if (index < 1) console.log(allItems) });

    var srcObj = { name: 'srcObj.name' };
    var tarObj = {};
    Ext.apply(tarObj, srcObj);
    console.log(srcObj.name);
    console.log(Ext.encode(srcObj));
    console.log(Ext.decode("{name:'dcd'}"));
    console.log(Ext.typeOf(arr));
});

Ext.namespace('COM.PCCW');
COM.PCCW.portal = function () {
    console.log('COM.PCCW');
}


//Ext.get('节点ID')
//Ext.select('css类型或Elment数组',true/false(Element的数组集合),'查询时的根节点')
/*
Ext.query('span');
Ext.query('span','search root');
Ext.query('#foo');
Ext.query('.foo');
Ext.query('*');
Ext.query('div p');
Ext.query('div span');

*/

