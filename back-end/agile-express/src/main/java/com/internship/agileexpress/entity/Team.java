package com.internship.agileexpress.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "teams")
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer teamId;

    private String title;
    private String content;

    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.MERGE, CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "project_id",referencedColumnName = "projectId")
    private Project project;

}
