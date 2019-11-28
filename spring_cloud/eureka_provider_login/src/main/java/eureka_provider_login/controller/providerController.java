package eureka_provider_login.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class providerController {
	@RequestMapping("/hello")
	public String sayhello(){
		return "i`m provide2222222222,hello consumer!";
	}
}
