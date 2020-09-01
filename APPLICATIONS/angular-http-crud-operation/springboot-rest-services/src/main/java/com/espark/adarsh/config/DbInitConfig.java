package com.espark.adarsh.config;

import com.espark.adarsh.entity.User;
import com.espark.adarsh.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class DbInitConfig {

    @Autowired
    UserRepository userRepository;

    @PostConstruct
    public void init(){
        User adarsh = new User();
        adarsh.setUserName("adarsh kumar");
        adarsh.setEmail("adarsh@kumar");
        adarsh.setUserPwd("******");
        adarsh.setTerm("true");
        this.userRepository.save(adarsh);
        User radha = new User();
        radha.setUserName("radha singh");
        radha.setEmail("radha@singh");
        radha.setUserPwd("******");
        radha.setTerm("true");
        this.userRepository.save(radha);
    }
}
