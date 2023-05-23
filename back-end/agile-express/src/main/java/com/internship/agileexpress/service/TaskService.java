package com.internship.agileexpress.service;

import com.internship.agileexpress.dto.TaskDto;
import com.internship.agileexpress.entity.Project;
import com.internship.agileexpress.entity.Task;
import com.internship.agileexpress.repository.ProjectRepository;
import com.internship.agileexpress.repository.SprintRepository;
import com.internship.agileexpress.repository.TaskRepository;
import com.internship.agileexpress.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class TaskService {

    @Autowired
    TaskRepository taskRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    SprintRepository sprintRepository;

    @Autowired
    ProjectRepository projectRepository;

    public void createTask(TaskDto taskDto, Integer projectId){
        Task task = new Task();

        task.setTitle(taskDto.getTitle());
        task.setContent(taskDto.getContent());
        task.setProject(projectRepository.findProjectByProjectId(projectId));
        task.setStatus(taskDto.getStatus());
        task.setStartDate(taskDto.getStartDate());
        task.setDuration(taskDto.getDuration());
        task.setStoryPoint(taskDto.getStoryPoint());

        taskRepository.save(task);
    }

    public Task getTask(Integer taskId){

        return taskRepository.findTaskByTaskId(taskId);
    }

    public List<Task> getBacklog(Integer projectId){
        List<Task> taskList = taskRepository.findTaskByProject(projectRepository.findProjectByProjectId(projectId));
        List<Task> tempList = new ArrayList<>();
        for(Task task: taskList){
            if(Objects.equals(task.getIsAssignedToSprint(), "false")){
             tempList.add(task);
            }
        }
        return tempList;
    }

    public Task updateTask(TaskDto taskDto, Integer taskId){
        Task task = taskRepository.findTaskByTaskId(taskId);

        if(taskDto.getTitle() != null){
            task.setTitle(taskDto.getTitle());
        }
        if(taskDto.getContent() != null){
            task.setContent(taskDto.getContent());
        }
        if(taskDto.getStatus() != null){
            task.setStatus(taskDto.getStatus());
        }
        if(taskDto.getIsAssignedToUser() != null){
            task.setIsAssignedToUser(taskDto.getIsAssignedToUser());
        }
        if(taskDto.getIsAssignedToSprint() != null){
            task.setIsAssignedToSprint(taskDto.getIsAssignedToSprint());
        }
        if(taskDto.getStartDate() != null){
            task.setStartDate(taskDto.getStartDate());
        }
        if(taskDto.getDuration() > -30){
            task.setDuration(taskDto.getDuration() + task.getDuration());
        }
        if(taskDto.getStoryPoint() > 0){
            task.setStoryPoint(taskDto.getStoryPoint());
        }

        taskRepository.save(task);
        return task;
    }

    public Task assignTaskToUser(Integer taskId, String username) {
        Task task = taskRepository.findTaskByTaskId(taskId);
        task.setUser(userRepository.findUserByUsername(username));
        task.setIsAssignedToUser("true");
        taskRepository.save(task);

        return task;
    }

    public Task assignTaskToSprint(Integer taskId, Integer sprintId){
        Task task = taskRepository.findTaskByTaskId(taskId);
        task.setSprint(sprintRepository.findSprintBySprintId(sprintId));
        task.setIsAssignedToSprint("true");
        taskRepository.save(task);

        return task;
    }

    public Task unassignTaskToSprint(Integer taskId){
        Task task = taskRepository.findTaskByTaskId(taskId);
        task.setSprint(null);
        task.setIsAssignedToSprint("false");
        taskRepository.save(task);

        return task;
    }

    public void deleteTask(Integer taskId){
        taskRepository.deleteById(taskId);
    }
}
