package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class UserHomeController {
	
	/**ユーザホーム画面を表示*/
	@GetMapping("/home")
	public String getUserList() {
		//ユーザーホーム画面を表示
		return "user/home";
	}
}
