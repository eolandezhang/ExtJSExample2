/// <reference path="~/Scripts/ext-4.2.1.883/ext-all-dev.js" />
/// <reference path="~/Scripts/ext-4.2.1.883/ext-all.js" />
var baseUrl = "http://" + window.location.hostname + "/ExtJS.WebApi/api/";
Ext.onReady(function () {
    Ext.data.validations.presenceMessage = '必须是有效值.';
    Ext.data.validations.lengthMessage = '长度错误.';
    Ext.data.validations.formatMessage = '格式错误.';
    Ext.data.validations.inclusionMessage = '没有包括在可接受的数据中.';
    Ext.data.validations.exclusionMessage = '不是可接受的值.';
    Ext.apply(Ext.data.validations,
    {
        number: function (config, value) {
            if (value === undefined) {
                return false;
            }
            var min = config.min;
            var max = config.max;
            if ((min && value < min) || (max && value > max)) {
                return false;
            } else {
                return true;
            }
        },
        numberMessage: '数值范围错误。'
    });

    Ext.define("User1",
    {
        extend: 'Ext.data.Model',
        fields: [
            { name: 'name', type: 'string' },
            { name: 'age', type: 'int' },
            { name: 'phone', type: 'string' },
            { name: 'gender', type: 'string' },
            { name: 'username', type: 'string' },
            { name: 'alive', type: 'boolean', defaultValue: true }
        ],
        validations: [
            { type: 'presence', field: 'age' },
            { type: 'number', field: 'age', min: 30 },
            { type: 'length', field: 'name', min: 2 },
            { type: 'inclusion', field: 'gender', list: ['男', '女'] },
            { type: 'exclusion', field: 'username', list: ['admin@xx.xx', 'user@xx.xx'] }
        ]
    });

    var user = Ext.create('User1',
    {
        name: 'tom',
        age: 44,
        phone: '555-555-5555',
        gender: '男',
        username: 'admin1@xx.xx'
    });


    console.log(user.get('name'));

    var errors = user.validate();

    var message = [];
    errors.each(function (v) {
        message.push(v.field + ':' + v.message);
    });

    console.log(message.join('\n'));


    Ext.define('Book',
    {
        extend: 'Ext.data.Model',
        fields: [
            { name: 'Name', type: 'string' },
            { name: 'Desc', type: 'string' }
        ],
        proxy: {
            type: 'ajax',
            url: baseUrl + 'Book/Get'
        }
    });

    var book = Ext.ModelManager.getModel('Book');

    book.load('1',
    {
        success: function (rec) {
            console.log(rec.get('Name'));//论语
            console.log(rec.get('Desc'));//论语
        }
    });


    Ext.define('User',
    {
        extend: 'Ext.data.Model',
        fields: [
            { name: 'Name', type: 'string' },
            { name: 'Id', type: 'int' }
        ],
        hasMany: {
            model: 'UserProduct',
            name: 'getUserProducts',
            autoLoad: false
        },
        proxy: {
            type: 'ajax',
            url: baseUrl + 'User/Get'
        }
    });


    Ext.define('UserProduct',
    {
        extend: 'Ext.data.Model',
        fields: [
            { name: 'Id', type: 'int' },
            { name: 'Title', type: 'string' },
            { name: 'User_Id', type: 'int' }
        ],
        proxy: {
            type: 'ajax',
            url: baseUrl + 'UserProduct/Get',
            reader: {
                type: 'json'
            }
        }
    });



    var user1 = Ext.ModelManager.getModel('User');
    user1.load(1,
    {
        success: function (rec) {
            var products = rec.getUserProducts();
            products.load({
                callback: function (records, operation, success) {
                    var msg = [];
                    for (var i = 0; i < records.length; i++) {
                        var rec = records[i];
                        msg.push('【产品名称】:' + rec.get('Title') + '    【用户id】：' + rec.get('User_Id'));
                    }
                    console.log(msg.join(','));
                }

            });
        }
    });
    /*
    结果：
    【产品名称】:电视    【用户id】：1,【产品名称】:冰箱    【用户id】：1
    */
});

