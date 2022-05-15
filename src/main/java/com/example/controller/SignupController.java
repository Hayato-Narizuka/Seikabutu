package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class SignupController {
	
	/**ユーザー登録画面を表示*/
	@GetMapping("/signup")
	public String getSignup() {
		
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
