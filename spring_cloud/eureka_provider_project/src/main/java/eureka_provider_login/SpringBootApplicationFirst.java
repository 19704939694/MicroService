package eureka_provider_login;


import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
@MapperScan("com.ibm.jiuzai.dao")
public class SpringBootApplicationFirst {
	public static void main(String[] args) {
		SpringApplication.run(SpringBootApplicationFirst.class, args);
	}
}
