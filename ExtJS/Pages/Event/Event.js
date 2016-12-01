/// <reference path="~/Scripts/ext-4.2.1.883/ext-all-dev.js" />
/// <reference path="~/Scripts/ext-4.2.1.883/ext-all.js" />
Ext.onReady(function () {
    var button = Ext.get('btn');
    button.addListener('click', function () { console.log('hello world') });
    var quit = Ext.get('btnquit');
    quit.addListener('click',
        function () {
            newEmployee.fireEvent('quit');
        });



});

Ext.define('Employee', {
    mixins: {
        observable: 'Ext.util.Observable'
    },
    constructor: function (config) {
        this.mixins.observable.constructor.call(this, config);
        this.addEvents(
            'fired',
            'quit'
        );
    }
});
var newEmployee = new Employee({
    name: 'lucy',
    listeners: {
        quit: function () {
            // By default, "this" will be the object that fired the event.
            console.log(this.name + " has quit!");
        }
    }
});
