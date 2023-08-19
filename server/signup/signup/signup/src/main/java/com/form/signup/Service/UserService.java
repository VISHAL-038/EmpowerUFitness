package com.form.signup.Service;

import com.form.signup.Repository.UserRepository;
import com.form.signup.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService
{
    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUser()
    {
        List<User> users= new ArrayList<>();
        userRepository.findAll().forEach(user  -> users.add(user));
        return users;
    }

    public User addUser(User user)
    {
        userRepository.save(user);
        return user;
    }
}
