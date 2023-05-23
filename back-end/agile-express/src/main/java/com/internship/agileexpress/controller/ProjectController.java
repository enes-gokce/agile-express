package com.internship.agileexpress.controller;

import com.internship.agileexpress.dto.ProjectDto;
import com.internship.agileexpress.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/project")
@CrossOrigin(origins = "http://localhost:3000")
public class ProjectController {

    @Autowired
    ProjectService projectService;

    @PostMapping("/create")
    public ResponseEntity<?> createProject(@RequestBody ProjectDto projectDto){
        projectService.createProject(projectDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/view/{projectId}")
    public ResponseEntity<?> getProject(@PathVariable Integer projectId){
        return ResponseEntity.ok(projectService.getProject(projectId));
    }

    @GetMapping("/view/all")
    public ResponseEntity<?> getAllProjects(){
        return ResponseEntity.ok(projectService.getAllProjects());
    }

    @PutMapping("/update/{projectId}")
    public ResponseEntity<?> updateProject(@RequestBody ProjectDto projectDto, @PathVariable Integer projectId){
        return ResponseEntity.ok(projectService.updateProject(projectDto, projectId));
    }

    @DeleteMapping("/delete/{projectId}")
    public ResponseEntity<?> delete(@PathVariable Integer projectId){
        projectService.deleteProject(projectId);
        return new ResponseEntity<>("System deleted the project with id: "+ projectId + ".", HttpStatus.OK);
    }
}
