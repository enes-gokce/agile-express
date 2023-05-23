package com.internship.agileexpress.repository;

import com.internship.agileexpress.entity.Project;
import com.internship.agileexpress.entity.Sprint;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SprintRepository extends JpaRepository<Sprint, Integer> {

    List<Sprint> findAll();
    List<Sprint> findSprintByProjectOrderBySprintId(Project project);

    Sprint findSprintBySprintId(Integer sprintId);
}
