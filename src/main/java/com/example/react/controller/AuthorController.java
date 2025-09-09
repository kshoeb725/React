package com.example.react.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.example.react.model.Author;
import com.example.react.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/authors")
@CrossOrigin(origins = "http://localhost:3000")  // Allow React frontend
public class AuthorController {

    @Autowired
    private AuthorRepository authorRepository;

    @GetMapping("/{slug}")
    public ResponseEntity<Author> getAuthorBySlug(@PathVariable String slug) {
        Author author = authorRepository.findBySlug(slug);
        if (author == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(author);
    }
}
