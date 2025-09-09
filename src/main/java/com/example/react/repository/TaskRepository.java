package com.example.react.repository;



import com.example.react.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
    boolean existsByTitle(String title);
}

