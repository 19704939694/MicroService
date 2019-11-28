package com.ibm.jiuzai.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.jiuzai.entity.User;
import com.ibm.jiuzai.service.UserService;

@RestController
@CrossOrigin(origins = "*",maxAge = 3600)
public class providerController {
	@Autowired
	private UserService userService;

	@RequestMapping("/login")
	@ResponseBody
	public User sayhello(String userName,String password) {
		long beginTime = System.currentTimeMillis();
		System.out.println("server"+userName);
		System.out.println("server"+password);
		User user = userService.selectByPrimaryKey(userName,password);
		return user;
	}
}
