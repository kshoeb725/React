package com.example.react.service;

import com.example.react.model.Task;
import com.example.react.repository.TaskRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TaskService {
    private final TaskRepository repo;
    public TaskService(TaskRepository repo){ this.repo = repo; }

    public Task createTask(Task task){ return repo.save(task); }
    public List<Task> getAllTasks(){ return repo.findAll(); }
    public Task getTaskById(Long id){ return repo.findById(id).orElse(null); }

    public boolean existsByTitle(String title){ return repo.existsByTitle(title); }
}
