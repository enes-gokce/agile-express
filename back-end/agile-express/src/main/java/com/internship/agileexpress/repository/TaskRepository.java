package com.internship.agileexpress.repository;

import com.internship.agileexpress.entity.Project;
import com.internship.agileexpress.entity.Sprint;
import com.internship.agileexpress.entity.Task;
import com.internship.agileexpress.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository  extends JpaRepository<Task, Integer> {

    List<Task> findTaskByProject(Project project);
    List<Task> findTaskBySprint(Sprint sprint);
    List<Task> findTaskByUser (User user);

    List<Task> findAll();
    Task findTaskByTaskId(Integer taskId);
}
