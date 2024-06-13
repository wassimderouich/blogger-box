package com.dauphine.blogger.repositories;
import com.dauphine.blogger.models.Category;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
public interface CategoryRepository extends JpaRepository<Category,UUID>{
@Query("""
		SELECT category
		From Category category
		WHERE UPPER(category.name) LIKE UPPER(CONCAT('%', :name,'%'))
		
		""")
List<Category> findALLLikeName(@Param("name") String name);

}
