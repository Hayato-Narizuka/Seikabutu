'use strict';

var userData = null;//ユーザーデータ
var table = null;//DataTablesオブジェクト

/**画面ロード時の処理.*/
jQuery(function($){
	
	//DataTablesの初期化
	createDataTables();
	
	/**検索ボタンを押したときの処理.*/
	$('#btn-search').click(function (event) {
		//検索
		search();
	});
});

/**検索処理.*/
function search() {
	
	//formの値を取得
	var formData = $('#user-search-form').serialize();
	
	//ajax通信
	$.ajax({
		type : "GET",
		url : '/user/get/list',
		data: formData,
		dataType : 'json',
		contentType: 'application/json; charset=UTF-8',
		cache : false,
		timeout : 5000,
	}).done(function(data) {
		//ajax成功時の処理
		console.log(data);
		//JSONを変数に入れる
		userData = data;
		//DataTables作成
		createDataTables();
		
	}).fail(function(jqXHR, textStatus, errorThrown) {
		//ajax失敗時の処理
		alert('検索処理に失敗しました');
		
	}).always(function() {
		//常に実行する処理(特になし)
	});
}

/**DataTables作成.*/
function createDataTables() {
	
	//既にDataTablesが作成されている場合
	if (table !== null) {
		//DataTables破棄
		table.destroy();
	}
	
	//DataTable作成
	table = $('#user-list-table').DataTable({
		//日本語化
		language: {
			url:'/webjars/datatables-plugins/i18n/Japanese.json'
		},
		//データーのセット
		data: userData,
		//データと列のマッピング
		columns: [
			{data: 'userId'},//ユーザーID
			{data: 'userName'},//ユーザー名
			{
				data: 'birthday',//誕生日
				render: function (data, type, row) {
					var date = new Date(data);
					var year = date.getFullYear();
					var month = date.getMonth() + 1;
					var date = date.getDate();
					return year + '/' + month + '/' + date;
				}
			},
			{data: 'age'},//年齢
			{
				data:'gender',//性別
				render: function (data, type, row) {
					var gender = '';
					if (data === 1) {
						gender = '男性';
					} else {
						gender = '女性';
					}
					return gender;
				}
			},
			{
				data: 'userId',//詳細画面のURL
				render: function (data, type, row) {
					var url = '<a href="/user/detail/'+ data +'">詳細</a>';
					return url;
				}
			},
		]
	});
}