package com.internship.agileexpress.controller;

import com.internship.agileexpress.dto.SprintDto;
import com.internship.agileexpress.service.SprintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/sprint")
public class SprintController {

    @Autowired
    SprintService sprintService;

    @PostMapping("/create/{projectId}")
    public ResponseEntity<?> createSprint(@RequestBody SprintDto sprintDto, @PathVariable Integer projectId){
        sprintService.createSprint(sprintDto, projectId);
        return new ResponseEntity<>("System created the sprint for project: " + projectId + ".", HttpStatus.OK);
    }

    @GetMapping("/view/{sprintId}")
    public ResponseEntity<?> getSprint(@PathVariable Integer sprintId){
        return ResponseEntity.ok(sprintService.getSprint(sprintId));
    }

    @GetMapping("/view/inactive/all/{projectId}")
    public ResponseEntity<?> getAllInactiveSprints(@PathVariable Integer projectId){
        return ResponseEntity.ok(sprintService.getAllInactiveSprints(projectId));
    }

    @GetMapping("/view/active/{projectId}")
    public ResponseEntity<?> getActiveSprint(@PathVariable Integer projectId){
        return ResponseEntity.ok(sprintService.getActiveSprint(projectId));
    }

    @PutMapping("/update/{sprintId}")
    public ResponseEntity<?> updateSprint(@RequestBody SprintDto sprintDto, @PathVariable Integer sprintId){
        return ResponseEntity.ok(sprintService.updateSprint(sprintDto, sprintId));
    }

    @GetMapping("/view/{sprintId}/tasks")
    public ResponseEntity<?> getSprintTasks(@PathVariable Integer sprintId){
        return ResponseEntity.ok(sprintService.getSprintTasks(sprintId));
    }

    @PutMapping("/activate/{sprintId}")
    public ResponseEntity<?> activateSprint(@PathVariable Integer sprintId){
        return ResponseEntity.ok(sprintService.activateSprint(sprintId));
    }

    @PutMapping("/inactivate/{sprintId}")
    public ResponseEntity<?> inactivateSprint(@PathVariable Integer sprintId){
        return ResponseEntity.ok(sprintService.inactivateSprint(sprintId));
    }

}
