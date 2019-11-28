package com.ibm.jiuzai.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.ibm.jiuzai.dao.DonaterDao;
import com.ibm.jiuzai.dao.ProjectDao;
import com.ibm.jiuzai.entity.Donateuser;

@Service
public class DonaterService {
	@Autowired
	private DonaterDao donaterDao;

	public int insertDonater(Donateuser d) {
		System.out.println("开始插入.....");
		int result = 0;
		try {
			result = donaterDao.insertDonater(d);
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("插入结束......");
		return result;
	}
	
	public int updateDonater(Donateuser[] d) {
		System.out.println("开始插入.....");
		List<Donateuser> donaters = Arrays.asList(d);
		int result = 0;
		try {
			result = donaterDao.updateDonater(donaters);
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("插入结束......");
		return result;
	}
	//@Cacheable(value = "donater", key = "'donater'")
	public List selectAllDonater(Donateuser d) {
		System.out.println("开始查询.....");
		List list = null;
		try {
			list = donaterDao.selectAllDonater(d.getDonor(), d.getIdentity(), d.getProjecttype(), d.getDonordate(), d.getDonatype(),d.getOffSet());
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("查询结束......");
		return list;
	}
	
	public List selectDonaterForUpdate(Donateuser d) {
		System.out.println("开始查询.....");
		List list = null;
		try {
			list = donaterDao.selectDonaterForUpdate(d.getProjecttype(), d.getUserlevel(), d.getIntact(), d.getQualitydate(),d.getDonatype(), d.getOffSet());
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("查询结束......");
		return list;
	}
}
