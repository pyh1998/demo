package com.example.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;


@Controller
@RequestMapping("/index")
public class indexController {
    @RequestMapping("/yxlm")
    public String yxlm(){
        return "yxlm/index";
    }
    @RequestMapping("/yys")
    public String yysindex(){

        return "yys/index";
    }
    @RequestMapping("/yys/home")
    public String yyshome(){

        return "yys/home";
    }
    @RequestMapping("/riovox")
    public String riovox(){

        return "riovox/home";
    }

}