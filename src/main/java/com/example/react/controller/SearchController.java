package com.example.react.controller;



import com.example.react.model.Author;
import com.example.react.model.News;
import com.example.react.repository.AuthorRepository;
import com.example.react.repository.NewsRepository;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/search")
@CrossOrigin(origins = "*")
public class SearchController {

    private final AuthorRepository authorRepository;
    private final NewsRepository newsRepository;

    public SearchController(AuthorRepository authorRepository, NewsRepository newsRepository) {
        this.authorRepository = authorRepository;
        this.newsRepository = newsRepository;
    }

    @GetMapping("/suggestions")
    public Map<String, List<Map<String, String>>> getSuggestions(@RequestParam("q") String query) {
        Map<String, List<Map<String, String>>> result = new HashMap<>();

        List<Author> authors = authorRepository.findByNameContainingIgnoreCase(query);
        List<Map<String, String>> authorResults = new ArrayList<>();
        for (Author author : authors) {
            Map<String, String> authorMap = new HashMap<>();
            authorMap.put("name", author.getName());
            authorMap.put("slug", author.getSlug());
            authorMap.put("type", "author");
            authorResults.add(authorMap);
        }

        List<News> newsList = newsRepository.findByTitleContainingIgnoreCase(query);
        List<Map<String, String>> newsResults = new ArrayList<>();
        for (News news : newsList) {
            Map<String, String> newsMap = new HashMap<>();
            newsMap.put("title", news.getTitle());
            newsMap.put("slug", news.getSlug());
            newsMap.put("type", "news");
            newsResults.add(newsMap);
        }

        result.put("authors", authorResults);
        result.put("news", newsResults);

        return result;
    }
}
