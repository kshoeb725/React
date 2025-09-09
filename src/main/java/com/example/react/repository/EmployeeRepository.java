package com.example.react.repository;

import com.example.react.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

// EmployeeRepository.java
public interface EmployeeRepository extends JpaRepository<Employee, Long> {}

