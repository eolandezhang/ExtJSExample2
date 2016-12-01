/// <reference path="~/Scripts/ext-4.2.1.883/ext-all-dev.js" />
/// <reference path="~/Scripts/ext-4.2.1.883/ext-all.js" />
Ext.onReady(function () {
    console.log(Ext.util.Format.htmlEncode("<>&"));
    console.log(Ext.JSON.decode("{ name: 'lucy' }"));
    console.log(Ext.JSON.encode({ name: 'lucy' }));
    var item = new Ext.util.MixedCollection();
    item.add('01', { name: 'a' });
    item.add('02', { name: 'b' });
    console.log(item.length);
    console.log(item.containsKey('01'));
    console.log(item.first().name + "," + item.get('02').name);


    var task = {
        run: function () {
            console.log(new Date());
        },
        interval: 1000,
        repeat: 3
    };
    var runner = new Ext.util.TaskRunner();
    runner.start(task);

    

   


});