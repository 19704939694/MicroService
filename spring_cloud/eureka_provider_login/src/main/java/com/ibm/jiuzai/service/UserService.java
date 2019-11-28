package com.ibm.jiuzai.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.ibm.jiuzai.dao.UserDao;
import com.ibm.jiuzai.entity.User;

@Service
public class UserService {
	@Autowired
	private UserDao userDao;

	//@Cacheable(value = "user", key = "'user'")

	public User selectByPrimaryKey(String userName,String password) {
		System.out.println("开始查询.....");
		User user = userDao.selectByPrimaryKey(userName,password);
		System.out.println("查询结束......");
		return user;
	}
}
