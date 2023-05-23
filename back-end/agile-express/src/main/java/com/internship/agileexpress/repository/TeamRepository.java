package com.internship.agileexpress.repository;

import com.internship.agileexpress.entity.Project;
import com.internship.agileexpress.entity.Team;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TeamRepository extends JpaRepository<Team, Integer> {

    List<Team> findAll();
    List<Team> findTeamByProject(Project project);
    Team findTeamByTeamId(Integer teamId);


}
