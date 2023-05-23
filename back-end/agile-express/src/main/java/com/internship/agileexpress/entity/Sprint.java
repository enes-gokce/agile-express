package com.internship.agileexpress.entity;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name = "sprints")
public class Sprint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer sprintId;

    private String title;
    private String content;

    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.MERGE, CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "project_id",referencedColumnName = "projectId")
    private Project project;

    private String status = "inactive";
    private String startDate;
    private String finishDate;

}
