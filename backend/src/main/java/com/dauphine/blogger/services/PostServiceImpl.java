package com.dauphine.blogger.services;

import com.dauphine.blogger.models.Category;
import com.dauphine.blogger.models.Post;
import com.dauphine.blogger.repositories.PostRepository;
import com.dauphine.blogger.repositories.CategoryRepository;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class PostServiceImpl implements PostService {
    private final PostRepository postRepository;
    private final CategoryRepository categoryRepository;

    public PostServiceImpl(PostRepository postRepository, CategoryRepository categoryRepository) {
        this.postRepository = postRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public List<Post> getALLByCategoryId(UUID categoryID) {
        return postRepository.findByCategoryId(categoryID);
    }

    @Override
    public List<Post> getALL() {
        return postRepository.findAll();
    }

    @Override
    public Post getById(UUID id) {
        return postRepository.findById(id).orElse(null);
    }

    @Override
    public Post create(String title, String content, UUID categoryID) {
        Category category = categoryRepository.findById(categoryID).orElse(null);
        if (category != null) {
            Post post = new Post(title, content, category);
            return postRepository.save(post);
        }
        return null;
    }

    @Override
    public Post update(UUID id, String title, String content) {
        Post post = getById(id);
        if (post != null) {
            post.setTitle(title);
            post.setContent(content);
            return postRepository.save(post);
        }
        return null;
    }

    @Override
    public boolean deleteById(UUID id) {
        if (postRepository.existsById(id)) {
            postRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
