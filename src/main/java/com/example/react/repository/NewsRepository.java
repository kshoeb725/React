package com.example.react.repository;



import com.example.react.model.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NewsRepository extends JpaRepository<News, Long> {
    List<News> findByCategory(String category); // Optional if you want backend filtering
    List<News> findByTitleContainingIgnoreCase(String title);
    @Query("SELECT n.title FROM News n WHERE LOWER(n.title) LIKE LOWER(CONCAT(:query, '%'))")
    List<String> findTitlesByPrefix(String query);

}
