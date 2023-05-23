package com.internship.agileexpress.controller;

import com.internship.agileexpress.config.JwtUtil;
import com.internship.agileexpress.dto.AuthDto;
import com.internship.agileexpress.dto.JwtDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/authenticate")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    JwtUtil jwtUtil;

    @Autowired
    AuthenticationManager authenticationManager;

    @PostMapping()
    public Object authenticate(@RequestBody AuthDto authDto) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authDto.getUsername(), authDto.getPassword()));
        } catch (BadCredentialsException e) {
            JwtDto jwtDto = new JwtDto();
            jwtDto.setToken("null");
            return jwtDto;
        }

        String token = jwtUtil.generateToken(authDto.getUsername());
        JwtDto jwtDto = new JwtDto();
        jwtDto.setToken(token);
        return jwtDto;
    }
}
