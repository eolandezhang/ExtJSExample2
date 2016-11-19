/// <reference path="~/Scripts/ext-4.2.1.883/ext-all-dev.js" />


Ext.onReady(function () {

});

function ShowMsg() {
	Ext.MessageBox.alert("消息", "您好！");
}

/*
 *使用JSON对象配置组件 
 *Ext.window.MessageBox 是一个工具类，继承自 Ext.window.Window对象
 *实例用 Ext.MessageBox 或 Ext.Msg访问
 */
var config = {
	title: "消息",
	msg: "您好！"
};
function ShowMsg2() {
	//Ext.MessageBox.alert(config);
	Ext.Msg.alert(config);
}

function Confirm() {
	Ext.MessageBox.confirm("提示", "请选择", function (id) {
		alert('id:' + id);
	});
}

function Prompt() {
	Ext.MessageBox.prompt('提示',
        '请输入',
        function (id, msg) {
        	alert('id:' + id + ',msg:' + msg);
        }, this, true, '默认值');
}

function Wait() {
	Ext.MessageBox.wait('请稍等', '提示', { text: '进度条上的文字' });
	Ext.defer(function () {
		Ext.MessageBox.close();
	}, 3000);
}

function Show() {
	Ext.MessageBox.show({
		title: '提示',
		msg: '消息',
		modal: true,
		prompt: true,
		value: '请输入',
		fn: function (id, msg) {
			alert('id:' + id + ',msg:' + msg);
		},
		buttons: Ext.Msg.YESNOCANCEL,
		icon: Ext.Msg.QUESTION
	});
}

//ok

function Show2() {
	Ext.MessageBox.buttonText.yes = '按钮一';
	Ext.MessageBox.buttonText.no = '按钮二';
	Ext.MessageBox.buttonText.cancel = '按钮三';
	Ext.MessageBox.show({
		title: '提示',
		msg: '自定义按钮文字',
		modal: true,
		buttons: Ext.Msg.YESNOCANCEL
	});
}
function Show3() {
	var task = {
		run: function () {
			msgBox.updateText('Time' + Ext.util.Format.date(new Date(), 'Y-m-d g:i:s A'));
		},
		interval: 1000
	};
	var msgBox = Ext.MessageBox.show({
		title: '提示',
		msg: '自定义按钮文字',
		modal: true,
		buttons: Ext.Msg.OK,
		fn: function () {
			Ext.TaskManager.stop(task);
		}
	});

	Ext.TaskManager.start(task);
}


function Show4() {
	var msgBox = Ext.MessageBox.show({
		title: '提示',
		msg: '动态更新的进度条和信息文字',
		modal: true,
		progress: true
	});

	var count = 0;
	var percentage = 0;
	var progressText = '';

	var task = {
		run: function () {
			count++;
			percentage = count / 10;
			progressText = '当前完成度：' + percentage * 100 + '%';
			msgBox.updateProgress(percentage, progressText, '当前时间:' + Ext.util.Format.date(new Date(), 'Y-m-d g:i:s A'));
			if (count > 10) {
				Ext.TaskManager.stop(task);
				msgBox.hide();
			}
		},
		interval: 1000
	};

	Ext.TaskManager.start(task);

}


function RenderTo() {
	var ProgressBar = new Ext.ProgressBar({
		width: 300,
		renderTo: 'ProgressBar1'
	});
	var count = 0;
	var percentage = 0;
	var progressText = '';

	var task = {
		run: function () {
			count++;
			if (count > 10) {
				//Ext.TaskManager.stop(task);
				ProgressBar.hide();
			}
			percentage = count / 10;
			progressText = '当前完成度：' + percentage * 100 + '%';
			ProgressBar.updateProgress(percentage, progressText, true);

		},
		interval: 1000,
		repeat: 10
	};

	Ext.TaskManager.start(task);

}


function AutoProcessBar() {
	var ProgressBar = new Ext.ProgressBar({
		text: 'working......',
		width: 300,
		renderTo: 'ProgressBar2'
	});
	ProgressBar.wait({
		duration: 10000,
		interval: 1000,
		increment: 10,
		text: 'waiting',
		scope: this,
		fn: function () {
			alert('finish');
		}
	});
}