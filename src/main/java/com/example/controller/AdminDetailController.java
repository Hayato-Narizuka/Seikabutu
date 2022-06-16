package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class AdminDetailController {

    @GetMapping("/detail")
    public String getAdminDetail() {
        return "admin/detail";
    }
}
