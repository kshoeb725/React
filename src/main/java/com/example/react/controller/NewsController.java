package com.example.react.controller;

import com.example.react.model.News;
import com.example.react.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/news")
@CrossOrigin(origins = "http://localhost:3000")
public class NewsController {

    @Autowired
    private NewsRepository newsRepository;

    @GetMapping
    public List<News> getAllNews() {
        return newsRepository.findAll();
    }
    @GetMapping("/search")
    public List<String> searchNewsTitles(@RequestParam String query) {
        return newsRepository.findTitlesByPrefix(query);
    }
}

