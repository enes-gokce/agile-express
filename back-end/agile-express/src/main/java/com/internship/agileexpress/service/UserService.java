package com.internship.agileexpress.service;

import com.internship.agileexpress.dto.UserDto;
import com.internship.agileexpress.entity.User;
import com.internship.agileexpress.repository.TeamRepository;
import com.internship.agileexpress.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    TeamRepository teamRepository;

    public User getUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        Optional<User> optionalUser = userRepository.findByUsername(username);
        return optionalUser.get();
    }

    public List<User> getUnassignedUsers(){
        List<User> allUsers = userRepository.findAll();
        List<User> unassignedUsers = new ArrayList<>();
        for(User user : allUsers){
            if(user.getTeam() == null && Objects.equals(user.getRole(), "Developer")){
                unassignedUsers.add(user);
            }
        }
        return unassignedUsers;
    }

    public void saveUser(UserDto userDto){
        User user = new User();

        user.setUsername(userDto.getUsername());
        user.setName(userDto.getName());
        user.setSurname(userDto.getSurname());
        user.setEmail(userDto.getEmail());
        user.setRole(userDto.getRole());

        userRepository.save(user);
    }

    public User assignUserToTeam(Integer teamId, String username) {

        User user = userRepository.findUserByUsername(username);
        user.setTeam(teamRepository.findTeamByTeamId(teamId));
        userRepository.save(user);

        return user;
    }

    public User unassignUser(String username){
        User user = userRepository.findUserByUsername(username);
        user.setTeam(null);
        if(user.getRole().equals("Team Leader")){
            user.setRole("Developer");
        }
        userRepository.save(user);
        return user;
    }

    public User changeRole(String username){
        User user = userRepository.findUserByUsername(username);
        if(user.getRole().equals("Developer")){
            user.setRole("Team Leader");
        }
        else if(user.getRole().equals("Team Leader")){
            user.setRole("Developer");
        }
        userRepository.save(user);
        return user;
    }
}
