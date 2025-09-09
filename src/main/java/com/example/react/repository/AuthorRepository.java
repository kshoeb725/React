package com.example.react.repository;



import com.example.react.model.Author;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AuthorRepository extends JpaRepository<Author, Long> {
    Author findBySlug(String slug);
    List<Author> findByNameContainingIgnoreCase(String name);

}
