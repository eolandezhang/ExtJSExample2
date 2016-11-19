/// <reference path="~/Scripts/ext-4.2.1.883/ext-all-dev.js" />
Ext.onReady(function () {

    var toolbar = new Ext.toolbar.Toolbar({
        renderTo: 'toolbar'
    });

    var fileMenu = new Ext.menu.Menu({
        shadow: 'frame',
        allowOtherMenus: true,
        items: [
            new Ext.menu.Item(
                { text: '新建', handler: onMenuItem }),
            { text: '打开', handler: onMenuItem },
            { text: '关闭', handler: onMenuItem }
        ]
    });

    var editMenu = new Ext.menu.Menu({
        shadow: 'drop',
        allowOtherMenus: true,
        items: [
            { text: '复制', handler: onMenuItem },
            { text: '粘贴', handler: onMenuItem },
            { text: '剪切', handler: onMenuItem }
        ]
    });

    var userMenu = new Ext.menu.Menu({
        ignoreParentClicks: true,
        plain: true,
        items: [
        {
            text: '个人信息',
            menu: new Ext.menu.Menu({
                ignoreParentClicks: true,
                items: [
                {
                    text: '基本信息',
                    menu: new Ext.menu.Menu({
                        items: [
                            { text: '身高', handler: onMenuItem },
                            { text: '体重', handler: onMenuItem }
                        ]
                    })
                }]
            })
        }]
    });

    var menu1 = new Ext.menu.Menu({
        items: [
        {
            xtype: 'textfield',
            hideLabel: true,
            width: 100
        }, {
            text: '颜色选择',
            menu: new Ext.menu.ColorPicker()
        }, {
            xtype: 'datepicker'
        }, {
            xtype: 'buttongroup',
            columns: 3,
            title: '按钮组',
            items: [
            {
                text: '用户管理',
                scale: 'large',
                colspan: 3,
                width: 170
            }, {
                text: '新建'
            }, {
                text: '打开'
            }, {
                text: '保存'
            }]
        }
        ]
    });

    var menu2 = new Ext.menu.Menu({
        items: [
        {
            text: '主题颜色',
            menu: new Ext.menu.Menu({
                items: [
                {
                    text: '红色主题',
                    checked: true,
                    group: 'theme',
                    checkHandler: onItemCheck
                }, {
                    text: '蓝色主题',
                    checked: false,
                    group: 'theme',
                    checkHandler: onItemCheck
                }]
            })
        }, {
            text: '是否启用',
            checked: false
        }]

    });

    toolbar.add(
        { text: '文件', menu: fileMenu },
        { text: '编辑', menu: editMenu },
        { text: '用户', menu: userMenu },
        { text: '组', menu: menu1 },
        { text: '选项', menu: menu2 }
    );

    function onMenuItem(item) {
        alert(item.text);
    }

    function onItemCheck(item) {
        alert(item.text);
    }
});


