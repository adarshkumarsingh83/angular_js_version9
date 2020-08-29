package com.espark.adarsh.web;

import com.espark.adarsh.bean.ResponseBean;
import com.espark.adarsh.entity.User;
import com.espark.adarsh.exception.ResourceNotFound;
import com.espark.adarsh.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/user")
    public ResponseBean saveUser(@Valid @RequestBody User user) {
        return this.userService.saveUser(user);
    }

    @PutMapping("/user/{id}")
    public ResponseBean updateUser(@PathVariable("id") Long id,@Valid @RequestBody User user) throws ResourceNotFound {
        return this.userService.updateUser(id, user);
    }

    @DeleteMapping("/user/{id}")
    public ResponseBean deleteUser(@PathVariable("id") Long id) throws ResourceNotFound{
        return this.userService.deleteUser(id);
    }

    @GetMapping("/user/{id}")
    public ResponseBean getUser(@PathVariable("id") Long id) throws ResourceNotFound{
        return this.userService.getUser(id);
    }

    @GetMapping("/users")
    public ResponseBean getUsers() throws ResourceNotFound {
        return this.userService.getUsers();
    }

}
