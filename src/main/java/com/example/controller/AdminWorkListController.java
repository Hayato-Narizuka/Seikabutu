package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class AdminWorkListController {
	
	/**新規登録申請者一覧を表示*/
	@GetMapping("/work")
	public String getAdminList() {
		return "admin/work";
	}
}
