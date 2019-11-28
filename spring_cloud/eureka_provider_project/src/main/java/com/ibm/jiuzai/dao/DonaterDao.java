package com.ibm.jiuzai.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.ibm.jiuzai.entity.Donateuser;
import com.ibm.jiuzai.entity.Project;

public interface DonaterDao {
	List<Project> selectAllProject();
	int insertDonater(Donateuser d);
	List<Donateuser> selectAllDonater(@Param("donor")String donor,
			@Param("identity")String identity,
			@Param("projecttype")String projecttype,
			@Param("donordate")String donordate,
			@Param("donatype")int donatype,
			@Param("offSet")int offSet);
	
	List<Donateuser> selectDonaterForUpdate(@Param("projecttype")String projecttype,
			@Param("userlevel")String userlevel,
			@Param("intact")String intact,
			@Param("qualitydate")String qualitydate,
			@Param("donatype")int donatype,
			@Param("offSet")int offSet);
	int updateDonater(@Param("donaterlist") List<Donateuser> d);
}
