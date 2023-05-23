package com.internship.agileexpress.controller;

import com.internship.agileexpress.dto.TaskDto;
import com.internship.agileexpress.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.criteria.CriteriaBuilder;

@RestController
@RequestMapping("/api/task")
public class TaskController {

    @Autowired
    TaskService taskService;

    @PostMapping("/create/{projectId}")
    public ResponseEntity<?> createTask(@RequestBody TaskDto taskDto, @PathVariable Integer projectId){
        taskService.createTask(taskDto, projectId);
        return new ResponseEntity<>("System created the task for project: " + projectId + ".", HttpStatus.OK);
    }

    @GetMapping("/view/{taskId}")
    public ResponseEntity<?> getTask(@PathVariable Integer taskId){
        return ResponseEntity.ok(taskService.getTask(taskId));
    }

    @GetMapping("/view/backlog/{projectId}")
    public ResponseEntity<?> getBacklog(@PathVariable Integer projectId){
        return ResponseEntity.ok(taskService.getBacklog(projectId));
    }

    @PutMapping("/update/{taskId}")
    public ResponseEntity<?> updateTask(@RequestBody TaskDto taskdto, @PathVariable Integer taskId){
        return ResponseEntity.ok(taskService.updateTask(taskdto, taskId));
    }

    @DeleteMapping("delete/{taskId}")
    public void deleteTask(@PathVariable Integer taskId) {
        taskService.deleteTask(taskId);
    }

    @PutMapping("/assign/{taskId}/user/{username}")
    public ResponseEntity<?> assignTaskToUser(@PathVariable Integer taskId, @PathVariable String username){
        return ResponseEntity.ok(taskService.assignTaskToUser(taskId, username));
    }

    @PutMapping("/assign/{taskId}/sprint/{sprintId}")
    public ResponseEntity<?> assignTaskToSprint(@PathVariable Integer taskId, @PathVariable Integer sprintId){
        return ResponseEntity.ok(taskService.assignTaskToSprint(taskId, sprintId));
    }

    @PutMapping("/unassign/sprint/{taskId}")
    public ResponseEntity<?> unassignTaskToSprint(@PathVariable Integer taskId){
        return ResponseEntity.ok(taskService.unassignTaskToSprint(taskId));
    }

}
