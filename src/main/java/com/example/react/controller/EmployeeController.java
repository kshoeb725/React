package com.example.react.controller;



import com.example.react.model.Employee;
import com.example.react.repository.EmployeeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {
    private final EmployeeRepository repo;
    public EmployeeController(EmployeeRepository repo){ this.repo = repo; }

    @GetMapping
    public List<Employee> all(){ return repo.findAll(); }
}

