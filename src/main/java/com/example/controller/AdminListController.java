package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class AdminListController {
	
	/**新規登録申請者一覧を表示*/
	@GetMapping("/list")
	public String getAdminList() {
		return "admin/list";
	}
}
