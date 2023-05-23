package com.internship.agileexpress.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "users", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"username"}),
        @UniqueConstraint(columnNames = {"email"})
})
public class User {

    @Id
    private String username;

    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.MERGE, CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "team_id",referencedColumnName = "teamId")
    private Team team;

    private String name;
    private String surname;
    private String email;
    private String role;
}
