package com.ibm.jiuzai.dao;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import com.ibm.jiuzai.entity.Project;
import com.ibm.jiuzai.entity.User;

//@Mapper
public interface ProjectDao {
    //User selectByPrimaryKey(String id);
    List<Project> selectAllProject();
//	@Select("select * from student where id = ${id}")
//	@Delete("delete from user_t where id = ${id}")
//	@Results({            
//	@Result(property = "id",  column = "id"),            
//	@Result(property = "name", column = "name"),            
//	@Result(property = "age", column = "age")    })    
//	User get(@Param("id") String id);
//	int delete(@Param("id") String id);
	
}
