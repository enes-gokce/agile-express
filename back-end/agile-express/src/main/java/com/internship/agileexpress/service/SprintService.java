package com.internship.agileexpress.service;

import com.internship.agileexpress.dto.SprintDto;
import com.internship.agileexpress.entity.Sprint;
import com.internship.agileexpress.entity.Task;
import com.internship.agileexpress.repository.ProjectRepository;
import com.internship.agileexpress.repository.SprintRepository;
import com.internship.agileexpress.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SprintService {

    @Autowired
    SprintRepository sprintRepository;

    @Autowired
    ProjectRepository projectRepository;

    @Autowired
    TaskRepository taskRepository;

    public void createSprint(SprintDto sprintDto, Integer projectId){

        Sprint sprint = new Sprint();

        sprint.setTitle(sprintDto.getTitle());
        sprint.setContent(sprintDto.getContent());
        sprint.setProject(projectRepository.findProjectByProjectId(projectId));
        sprint.setStartDate(sprintDto.getStartDate());
        sprint.setFinishDate(sprintDto.getFinishDate());

        sprintRepository.save(sprint);
    }

    public Sprint getSprint(Integer sprintId){

        return sprintRepository.findSprintBySprintId(sprintId);
    }

    public List<Sprint> getAllInactiveSprints(Integer projectId){

        List<Sprint> tempList = sprintRepository.findSprintByProjectOrderBySprintId(projectRepository.findProjectByProjectId(projectId));
        tempList.removeIf(sprint -> sprint.getStatus().equals("active"));

        return tempList;
    }

    public Sprint getActiveSprint(Integer projectId){
        List<Sprint> tempList = sprintRepository.findSprintByProjectOrderBySprintId(projectRepository.findProjectByProjectId(projectId));
        Sprint tempSprint = new Sprint();
        for(Sprint sprint : tempList){
            if(sprint.getStatus().equals("active")){
                tempSprint = sprint;
            }
        }
        return tempSprint;
    }

    public Sprint activateSprint(Integer sprintId){
        Sprint sprint = sprintRepository.findSprintBySprintId(sprintId);
        sprint.setStatus("active");
        sprintRepository.save(sprint);
        return sprint;
    }

    public Sprint inactivateSprint(Integer sprintId){
        Sprint sprint = sprintRepository.findSprintBySprintId(sprintId);
        sprint.setStatus("inactive");
        sprintRepository.save(sprint);
        return sprint;
    }

    public List<Task> getSprintTasks(Integer sprintId){
        return taskRepository.findTaskBySprint(sprintRepository.findSprintBySprintId(sprintId));
    }

    public Sprint updateSprint(SprintDto sprintDto, Integer sprintId){

        Sprint sprint = sprintRepository.findSprintBySprintId(sprintId);

        if(sprintDto.getTitle() != null){
            sprint.setTitle(sprintDto.getTitle());
        }
        if(sprintDto.getContent() != null){
            sprint.setContent(sprintDto.getContent());
        }
        if(sprintDto.getStartDate() != null){
            sprint.setStartDate(sprintDto.getStartDate());
        }
        if(sprintDto.getFinishDate() != null){
            sprint.setFinishDate(sprintDto.getFinishDate());
        }

        if(sprintDto.getStatus() != null){
            sprint.setStatus(sprintDto.getStatus());
        }

        sprintRepository.save(sprint);
        return sprint;
    }
}
