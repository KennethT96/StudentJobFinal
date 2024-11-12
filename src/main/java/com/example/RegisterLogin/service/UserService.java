package com.example.RegisterLogin.service;

import com.example.RegisterLogin.dto.LoginDTO;
import com.example.RegisterLogin.dto.UserDTO;
import com.example.RegisterLogin.response.LoginResponse;

public interface UserService {
    String addUsers(UserDTO usersDTO);

    LoginResponse loginUsers(LoginDTO loginDTO);
}
