'use strict'

/**画面ロード時の処理.*/
jQuery(function($){
	
	/**更新ボタンを押したときの処理.*/
	$('#btn-update').click(function (event) {
		//ユーザー更新
		updateUser();
	});
	
	/**削除ボタンを押したときの処理.*/
	$('#btn-delete').click(function (event) {
		//ユーザー削除
		deleteUser();
	});
});

/**ユーザー更新処理.*/
function updateUser() {
	
	//フォームの値を取得
	var formData = $('#user-detail-form').serializeArray();
	
	//ajax通信
	$.ajax({
		type : "PUT",
		cache : false,
		url : '/user/update',
		data: formData,
		dataType : 'json',
	}).done(function(data) {
		//ajax成功時の処理
		alert('ユーザーを更新しました');
		//ユーザー一覧画面にリダイレクト
		window.location.href = '/user/list';
		
	}).fail(function(jqXHR, textStatus, errorThrown) {
		//ajax失敗時の処理
		alert('ユーザー更新に失敗しました');
	}).always(function() {
		//常に実行する処理
	});
}

/**ユーザー削除処理.*/
function deleteUser() {
	
	//フォームの値を取得
	var formData = $('#user-delete-form').serializeArray();
	
	//ajax通信
	$.ajax({
		type : "DELETE",
		cache : false,
		url : '/user/delete',
		data: formData,
		dataType : 'json',
	});done(function(data) {
		//ajax成功時の処理
		alert('ユーザーを削除しました');
		//ユーザー一覧画面にリダイレクト
		window.location.href = '/user/list';
		
	});fail(function(jqXHR, textStatus, errorThrown) {
		//ajax失敗時の処理
		alert('ユーザー削除に失敗しました');
		
	}).always(function() {
		//常に実行する処理
	});
}