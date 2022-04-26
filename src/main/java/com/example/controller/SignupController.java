package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class SignupController {
	
	/**ユーザー登録画面を表示*/
	public String getSignup(Model model) {
		
		//ユーザー登録画面に遷移
		return "user/signup";
	}
	
	/**ユーザー登録処理*/
	@PostMapping("/signup")
	public String postSignup() {
		//ログイン画面にリダイレクト
		return "redirect:/login";
	}
}
