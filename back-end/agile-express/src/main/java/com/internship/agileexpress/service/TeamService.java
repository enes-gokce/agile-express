package com.internship.agileexpress.service;

import com.internship.agileexpress.dto.TeamDto;
import com.internship.agileexpress.entity.Team;
import com.internship.agileexpress.entity.User;
import com.internship.agileexpress.repository.ProjectRepository;
import com.internship.agileexpress.repository.TeamRepository;
import com.internship.agileexpress.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamService {

    @Autowired
    TeamRepository teamRepository;

    @Autowired
    ProjectRepository projectRepository;

    @Autowired
    UserRepository userRepository;

    public void createTeam(TeamDto teamDto, Integer projectId){

        Team team = new Team();

        team.setProject(projectRepository.findProjectByProjectId(projectId));
        team.setTitle(teamDto.getTitle());
        team.setContent(teamDto.getContent());

        teamRepository.save(team);
    }

    public Team getTeam(Integer teamId){
        return teamRepository.findTeamByTeamId(teamId);
    }

    public List<Team> getAllTeams(Integer projectId){
        return teamRepository.findTeamByProject(projectRepository.findProjectByProjectId(projectId));
    }

    public Team updateTeam(TeamDto teamDto, Integer teamId){

        Team team = teamRepository.findTeamByTeamId(teamId);

        if(teamDto.getTitle() != null){
            team.setTitle(teamDto.getTitle());
        }
        if(teamDto.getContent() != null){
            team.setContent(teamDto.getContent());
        }

        teamRepository.save(team);
        return team;
    }

    public List<User> getTeamMembers(Integer teamId){
        return userRepository.findUserByTeam(teamRepository.findTeamByTeamId(teamId));
    }

    public void deleteTeam(Integer teamId){
        Team team = teamRepository.findTeamByTeamId(teamId);
        List<User> users = userRepository.findUserByTeam(team);
        for(User user : users){
            user.setTeam(null);
            if(user.getRole().equals("Team Leader")){
                user.setRole("Developer");
            }
        }
        teamRepository.delete(team);
    }
}
