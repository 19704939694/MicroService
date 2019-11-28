package com.ibm.jiuzai.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.ibm.jiuzai.dao.ProjectDao;
import com.ibm.jiuzai.dao.UserDao;
import com.ibm.jiuzai.entity.Project;
import com.ibm.jiuzai.entity.User;

@Service
public class ProjectService {
	@Autowired
	private ProjectDao projcetDao;

	@Cacheable(value = "projects", key = "'projects'")

	public List selectAllProject() {
		System.out.println("开始查询.....");
		List list = null;
		try {
			list = projcetDao.selectAllProject();
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("查询结束......");
		return list;
	}
}
