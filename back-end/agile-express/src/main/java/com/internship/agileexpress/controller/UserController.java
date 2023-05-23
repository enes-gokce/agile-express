package com.internship.agileexpress.controller;

import com.internship.agileexpress.dto.UserDto;
import com.internship.agileexpress.entity.User;
import com.internship.agileexpress.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody UserDto userDto){
        userService.saveUser(userDto);
        return new ResponseEntity<>("System saved the user.", HttpStatus.OK);
    }

    @GetMapping("/get")
    public ResponseEntity<?> getUserDetails(){
        return ResponseEntity.ok(userService.getUser());
    }

    @GetMapping("/get/unassigned")
    public ResponseEntity<?> getUnassignedUsers(){
        return ResponseEntity.ok(userService.getUnassignedUsers());
    }

    @PutMapping("/assign/{username}/team/{teamId}")
    public ResponseEntity<?> assignUserToTeam(@PathVariable Integer teamId, @PathVariable String username){
        return ResponseEntity.ok(userService.assignUserToTeam(teamId, username));
    }

    @PutMapping("/unassign/{username}")
    public ResponseEntity<?> unassignUser(@PathVariable String username){
        return ResponseEntity.ok(userService.unassignUser(username));
    }

    @PutMapping("/changeRole/{username}")
    public ResponseEntity<?> changeRole(@PathVariable String username){
        return ResponseEntity.ok(userService.changeRole(username));
    }

}
