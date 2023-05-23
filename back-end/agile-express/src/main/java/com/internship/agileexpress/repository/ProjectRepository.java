package com.internship.agileexpress.repository;

import com.internship.agileexpress.entity.Project;
import com.internship.agileexpress.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Integer> {

    List<Project> findProjectByProjectManagerOrderByProjectId(User user);
    List<Project> findAll();
    Project findProjectByProjectId(Integer projectId);
}
