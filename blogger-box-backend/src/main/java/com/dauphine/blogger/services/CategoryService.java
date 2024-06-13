package com.dauphine.blogger.services;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.dauphine.blogger.models.Category;

public interface CategoryService {
List<Category> getAll();
Category getByID(UUID id);
Category create(String name);
Category updateName(UUID id, String name);
boolean deleteById(UUID id);
@Query("""
        SELECT category
        FROM Category category
        WHERE category.name LIKE CONCAT('%', :name, '%')
        """)
    List<Category> getAllLikeName(@Param("name") String name);
}
