package eureka_consumer.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import eureka_consumer.entity.Donateuser;
import eureka_consumer.entity.Project;
import eureka_consumer.entity.User;


@RestController
@CrossOrigin(origins = "*",maxAge = 3600)
public class MainController {
	@Autowired
	private RestTemplate resttemplate;

	@RequestMapping("/login")	
	public User hello(@RequestParam String userName,@RequestParam String password){		
		//String userId = request.getParameter("id");				//返回值类型和我们的业务返回值一致		
		String url2="http://PROVODER-LOGIN/login?userName="+userName+"&password="+password;	
        System.out.println(userName);
        System.out.println(password);
		return resttemplate.getForObject(url2, User.class);
	}
	
	@RequestMapping("/allproject")	
	public List<Project> getAllProject(){		
		//String userId = request.getParameter("id");				//返回值类型和我们的业务返回值一致		
		String url2="http://PROVODER-PROJECT/allproject";	
		return resttemplate.getForObject(url2,List.class);		
	}
	
	@RequestMapping("/insert")	
	public int insertDonater(@RequestBody Donateuser d){		
		//String userId = request.getParameter("id");				//返回值类型和我们的业务返回值一致		
		String url2="http://PROVODER-PROJECT/insert";	
		return resttemplate.postForObject(url2, d, int.class);
	}
	
	@RequestMapping("/update")	
	public int updateDonater(@RequestBody Donateuser[] d){
		System.out.println(d[0].getDonatype());
		System.out.println(d[0].getMsindex());
		//String userId = request.getParameter("id");				//返回值类型和我们的业务返回值一致		
		String url2="http://PROVODER-PROJECT/update";	
		return resttemplate.postForObject(url2, d, int.class);
	}
	
	@RequestMapping("/alldonater")	
	public List<Donateuser> getAllDonater(@RequestBody Donateuser d){		
		//String userId = request.getParameter("id");				//返回值类型和我们的业务返回值一致		
		String url2="http://PROVODER-PROJECT/alldonater";	
		return resttemplate.postForObject(url2, d, List.class);	
	}
	
	@RequestMapping("/sdforupdate")	
	public List<Donateuser> getDonaterForUpdate(@RequestBody Donateuser d){		
		//String userId = request.getParameter("id");				//返回值类型和我们的业务返回值一致		
		String url2="http://PROVODER-PROJECT/sdforupdate";	
		return resttemplate.postForObject(url2, d, List.class);	
	}
	
//	@RequestMapping("/update")	
//	public void getDonaterForUpdate(@RequestBody Donateuser[] d){		
//		//String userId = request.getParameter("id");				//返回值类型和我们的业务返回值一致		
////		String url2="http://PROVODER-PROJECT/sdforupdate";	
////		return resttemplate.postForObject(url2, d, List.class);	
//		System.out.println(d.length);
//		if(d.length>0){
//			System.out.println(d[0].getUserlevel());
//		}
//	}
	

//	@RequestMapping("/hello")
//	@ResponseBody
//	public String hello(@RequestParam String userid) {
//		// String userId = request.getParameter("id"); //返回值类型和我们的业务返回值一致
//		String url2 = "http://PROVODER-LOGIN/hello?userid=" + userid;
//		System.out.println(userid);
//		return userid;
//		// return resttemplate.getForObject(url2, User.class);
//	}
	
}
