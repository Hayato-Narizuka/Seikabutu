package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class AdminHomeController {

    /** 管理者ホーム画面を表示 */
    @GetMapping("/home")
    public String getAdminHome() {
        return "admin/home";
    }
}
