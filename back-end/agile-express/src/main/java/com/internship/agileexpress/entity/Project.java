package com.internship.agileexpress.entity;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name = "projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer projectId;

    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.MERGE, CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "username",referencedColumnName = "username")
    private User projectManager;

    private String title;
    private String content;

    private String startDate;
    private String finishDate;
}
