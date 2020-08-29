package com.espark.adarsh.service;

import com.espark.adarsh.bean.ResponseBean;
import com.espark.adarsh.entity.User;
import com.espark.adarsh.exception.ResourceNotFound;
import com.espark.adarsh.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;


    public ResponseBean saveUser(User user) {
        ResponseBean<User> responseBean = new ResponseBean<>();
        user = this.userRepository.save(user);
        responseBean.setData(user);
        responseBean.setMessage("User Created Successfully");
        return responseBean;
    }

    public ResponseBean updateUser(Long id, User user) throws ResourceNotFound {
        if (this.userRepository.existsById(id)) {
            ResponseBean<User> responseBean = new ResponseBean<>();
            user = this.userRepository.save(user);
            responseBean.setData(user);
            responseBean.setMessage("User Updated Successfully");
            return responseBean;
        } else {
            throw new ResourceNotFound("user not found with " + id);
        }
    }

    public ResponseBean deleteUser(Long id) throws ResourceNotFound {
        if (this.userRepository.existsById(id)) {
            ResponseBean<User> responseBean = new ResponseBean<>();
            User user = this.userRepository.findById(id).get();
            this.userRepository.deleteById(id);
            responseBean.setData(user);
            responseBean.setMessage("User Deleted Successfully");
            return responseBean;
        } else {
            throw new ResourceNotFound("user not found with " + id);
        }
    }

    public ResponseBean getUser(Long id) throws ResourceNotFound {
        if (this.userRepository.existsById(id)) {
            ResponseBean<User> responseBean = new ResponseBean<>();
            User user = this.userRepository.findById(id).get();
            responseBean.setData(user);
            responseBean.setMessage("User Fetched Successfully");
            return responseBean;
        } else {
            throw new ResourceNotFound("user not found with " + id);
        }
    }

    public ResponseBean getUsers() throws ResourceNotFound {
        ResponseBean<List<User>> responseBean = new ResponseBean<>();
        if(this.userRepository.count() > 0) {
            List<User> userList = this.userRepository.findAll().stream().collect(Collectors.toList());
            responseBean.setData(userList);
            responseBean.setMessage("All User Fetched Successfully");
            return responseBean;
        }else{
            throw new ResourceNotFound("user db is empty" );
        }
    }
}
