package com.form.signup.Controller;

import com.form.signup.Service.UserService;
import com.form.signup.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserController
{
    @Autowired
    private UserService userService;

    @RequestMapping(method = RequestMethod.GET,value="/users")
    public List<User> getALlUser()
    {
        return userService.getAllUser();
    }

    @RequestMapping(method = RequestMethod.POST , value = "/users")
    public User addUser(@RequestBody User user)
    {
        return userService.addUser(user);
    }


}
