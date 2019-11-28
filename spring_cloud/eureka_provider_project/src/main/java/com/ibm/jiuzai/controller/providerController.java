package com.ibm.jiuzai.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.jiuzai.entity.Donateuser;
import com.ibm.jiuzai.entity.Project;
import com.ibm.jiuzai.entity.User;
import com.ibm.jiuzai.service.DonaterService;
import com.ibm.jiuzai.service.ProjectService;
import com.ibm.jiuzai.service.UserService;

@RestController
@CrossOrigin(origins = "*",maxAge = 3600)
public class providerController {
	@Autowired
	private ProjectService projectService;
	
	@Autowired
	private DonaterService donaterService;

	@RequestMapping("/allproject")
	@ResponseBody
//	public User sayhello(String userid) {
//		long beginTime = System.currentTimeMillis();
//		System.out.println("server"+userid);
//		User user = userService.selectByPrimaryKey(userid);
//		long time = System.currentTimeMillis() - beginTime;
//		return user;
//	}
	public List<Project> selectAllProject() {
		long beginTime = System.currentTimeMillis();
		List<Project> list = projectService.selectAllProject();
		System.out.println("server"+list);
		return list;
	}
	
	@RequestMapping("/insert")
	@ResponseBody
	public int insertDonater(@RequestBody Donateuser d){
		System.out.println(d.getDonor());
		int i  =donaterService.insertDonater(d);
		System.out.println("server--------"+i);
		return i;
		
	}
	
	@RequestMapping("/update")
	@ResponseBody
	public int updateDonater(@RequestBody Donateuser[] d){
		System.out.println(d.length);
		int i  =donaterService.updateDonater(d);
		System.out.println("server--------"+i);
		return i;
		
	}
	
	@RequestMapping("/alldonater")
	@ResponseBody
	public List<Project> selectAllDonater(@RequestBody Donateuser d) {
		long beginTime = System.currentTimeMillis();
		List<Project> list = donaterService.selectAllDonater(d);
		System.out.println("server"+list);
		return list;
	}
	
	@RequestMapping("/sdforupdate")
	@ResponseBody
	public List<Project> selectDonaterForUpdate(@RequestBody Donateuser d) {
		long beginTime = System.currentTimeMillis();
		List<Project> list = donaterService.selectDonaterForUpdate(d);
		System.out.println("server"+list);
		return list;
	}
}
