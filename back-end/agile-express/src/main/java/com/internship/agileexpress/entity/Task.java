package com.internship.agileexpress.entity;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer taskId;

    private String title;
    private String content;

    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.MERGE, CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "project_id",referencedColumnName = "projectId")
    private Project project;

    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.MERGE, CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "username",referencedColumnName = "username")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.MERGE, CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "sprint_id",referencedColumnName = "sprintId")
    private Sprint sprint;

    private String status = "To-do";
    private String isAssignedToUser = "false";
    private String isAssignedToSprint = "false";
    private String startDate;
    private int duration = 0;
    private int storyPoint;
}
