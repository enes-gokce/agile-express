package com.internship.agileexpress.repository;

import com.internship.agileexpress.entity.Team;
import com.internship.agileexpress.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByEmail(String email);
    Optional<User> findByUsernameOrEmail(String username, String email);
    Optional<User> findByUsername(String username);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
    List<User> findAll();
    List<User> findUserByTeam(Team team);
    User findUserByUsername(String username);
    User findUserByEmail(String email);
}