package com.internship.agileexpress.dto;

import lombok.Data;

@Data
public class TaskDto {

    private String title;
    private String content;
    private String status;
    private String isAssignedToUser;
    private String isAssignedToSprint;
    private String startDate;
    private int duration;
    private int storyPoint;

}
