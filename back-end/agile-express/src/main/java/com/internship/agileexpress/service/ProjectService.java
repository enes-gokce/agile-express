package com.internship.agileexpress.service;

import com.internship.agileexpress.dto.ProjectDto;
import com.internship.agileexpress.entity.Project;
import com.internship.agileexpress.entity.User;
import com.internship.agileexpress.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    @Autowired
    UserService userService;

    @Autowired
    ProjectRepository projectRepository;

    public void createProject(ProjectDto projectDto){

        Project project = new Project();
        User user = userService.getUser();
        project.setProjectManager(user);
        project.setTitle(projectDto.getTitle());
        project.setContent(projectDto.getContent());
        project.setStartDate(projectDto.getStartDate());
        project.setFinishDate(projectDto.getFinishDate());

        projectRepository.save(project);
    }

    public Project getProject(Integer projectId){

        return projectRepository.findProjectByProjectId(projectId);
    }

    public Project updateProject(ProjectDto projectDto, Integer projectId){
        Project project = projectRepository.findProjectByProjectId(projectId);

        if(projectDto.getTitle() != null){
            project.setTitle(projectDto.getTitle());
        }
        if(projectDto.getContent() != null){
            project.setContent(projectDto.getContent());
        }
        if(projectDto.getStartDate() != null){
            project.setStartDate(projectDto.getStartDate());
        }
        if(projectDto.getFinishDate() != null){
            project.setFinishDate(projectDto.getFinishDate());
        }

        projectRepository.save(project);
        return project;
    }

    public void deleteProject(Integer projectId){
        projectRepository.deleteById(projectId);
    }

    public List<Project> getAllProjects(){
        return projectRepository.findAll();
    }
}
