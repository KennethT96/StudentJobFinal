package com.example.RegisterLogin.service.impl;

import com.example.RegisterLogin.dto.LoginDTO;
import com.example.RegisterLogin.dto.UserDTO;
import com.example.RegisterLogin.entity.Users;
import com.example.RegisterLogin.repo.UsersRepo;
import com.example.RegisterLogin.response.LoginResponse;
import com.example.RegisterLogin.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class UserIMPL implements UserService {

    @Autowired
    private UsersRepo usersRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addUsers(UserDTO usersDTO) {

        Users users = new Users(
                usersDTO.getUserid(),
                usersDTO.getUsername(),
                usersDTO.getEmail(),

                this.passwordEncoder.encode(usersDTO.getPassword())
        );

        usersRepo.save(users);
        return users.getUsername();
    }

    @Override
    public LoginResponse loginUsers(LoginDTO loginDTO) {

        String msg = "";
        Users users1 = usersRepo.findByEmail(loginDTO.getEmail());
        if (users1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = users1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<Users> users = usersRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (users.isPresent()) {
                    return new LoginResponse("Login Success", true);
                } else {
                    return new LoginResponse("Login Failed", false);
                }
            } else {
                return new LoginResponse("password Not Match", false);
            }
        }else {
            return new LoginResponse("Email not exits", false);
        }
    }
}
