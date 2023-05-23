package com.internship.agileexpress.controller;


import com.internship.agileexpress.dto.TeamDto;
import com.internship.agileexpress.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/team")
public class TeamController {

    @Autowired
    TeamService teamService;

    @PostMapping("/create/{projectId}")
    public ResponseEntity<?> createTeam(@RequestBody TeamDto teamDto, @PathVariable Integer projectId){
        teamService.createTeam(teamDto, projectId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/view/{teamId}")
    public ResponseEntity<?> getTeam(@PathVariable Integer teamId){
        return ResponseEntity.ok(teamService.getTeam(teamId));
    }

    @GetMapping("/view/all/{projectId}")
    public ResponseEntity<?> getAllTeams(@PathVariable Integer projectId){
        return ResponseEntity.ok(teamService.getAllTeams(projectId));
    }

    @GetMapping("/members/{teamId}")
    public ResponseEntity<?> getTeamMembers(@PathVariable Integer teamId){
        return ResponseEntity.ok(teamService.getTeamMembers(teamId));
    }

    @PutMapping("/update/{teamId}")
    public ResponseEntity<?> updateTeam(@RequestBody TeamDto teamDto, @PathVariable Integer teamId){
        return ResponseEntity.ok(teamService.updateTeam(teamDto, teamId));
    }

    @DeleteMapping("/delete/{teamId}")
    public ResponseEntity<?> deleteTeam(@PathVariable Integer teamId){
        teamService.deleteTeam(teamId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}