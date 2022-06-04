package com.example.controller;

import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("user")
public class UserHomeController {
	
	@GetMapping("/home")
	public String getUserHome(Model model) {
		Calendar todayTime = Calendar.getInstance();
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy年MM月dd日(E)");
		String nowDate = simpleDateFormat.format(todayTime.getTime());
		model.addAttribute("nowDate", nowDate);
		return "user/home";
	}
}
