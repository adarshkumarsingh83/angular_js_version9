package com.espark.adarsh.service;


import com.espark.adarsh.bean.UserBean;
import com.espark.adarsh.entity.Role;
import com.espark.adarsh.entity.User;
import com.espark.adarsh.entity.UserRole;
import com.espark.adarsh.repository.UserRepository;
import com.espark.adarsh.repository.UserRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserRoleRepository  userRoleRepository;


    public UserBean getUserById(Long userId) {
        return this.userRepository.findById(userId)
                .get()
                .getUserBean();
    }

    public List<UserBean> getUsers() {
        return this.userRepository.findAll()
                .stream()
                .map(user -> user.getUserBean())
                .collect(Collectors.toList());
    }

    public UserBean createUser(UserBean userBean) {
        User user = userBean.getUser();
        List<UserRole> roles = userBean.getUserRoles()
                .stream()
                .map(roleName-> this.userRoleRepository.findByRoleName(Role.getRole(roleName)) )
                .collect(Collectors.toList());
        user.setRoles(roles);
        return this.userRepository.save(user).getUserBean();
    }

    public UserBean updateUser(UserBean userBean) {
        User user = userBean.getUser();
        List<UserRole> roles = userBean.getUserRoles()
                .stream()
                .map(roleName-> this.userRoleRepository.findByRoleName(Role.getRole(roleName)) )
                .collect(Collectors.toList());
        user.setRoles(roles);
        return this.userRepository.save(user).getUserBean();
    }

    public UserBean deleteUser(Long userId) {
        UserBean userBeanResponse =
                this.userRepository.findById(userId)
                        .get()
                        .getUserBean();
        User user = userBeanResponse.getUser();
        user.setRoles(null);
        this.delete(user);
        return userBeanResponse;
    }
    private void delete(User user){
        this.userRepository.delete(user);
    }
}
