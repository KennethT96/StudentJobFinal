package com.example.RegisterLogin.usersController;

import com.example.RegisterLogin.dto.LoginDTO;
import com.example.RegisterLogin.dto.UserDTO;
import com.example.RegisterLogin.response.LoginResponse;
import com.example.RegisterLogin.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/users")

public class UsersController {

    @Autowired
    private UserService userService;

    @PostMapping(path = "/save")
    public String saveUsers(@RequestBody UserDTO usersDTO)
    {
        String id = userService.addUsers(usersDTO);
        return id;
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUsers(@RequestBody LoginDTO loginDTO)
    {
        LoginResponse loginResponse = userService.loginUsers(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }

}
