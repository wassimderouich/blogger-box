package com.dauphine.blogger.controllers;

import com.dauphine.blogger.models.Post;
import com.dauphine.blogger.services.PostService;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/v1/posts")
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    public List<Post> getAllPosts() {
        return postService.getALL();
    }

    @GetMapping("/{id}")
    public Post getPostById(@PathVariable UUID id) {
        return postService.getById(id);
    }

    @GetMapping("/category/{categoryId}")
    public List<Post> getPostsByCategoryId(@PathVariable UUID categoryId) {
        return postService.getALLByCategoryId(categoryId);
    }

    @PostMapping
    public Post createPost(@RequestBody Post post) {
        return postService.create(post.getTitle(), post.getContent(), post.getCategory().getId());
    }

    @PutMapping("/{id}")
    public Post updatePost(@PathVariable UUID id, @RequestBody Post post) {
        return postService.update(id, post.getTitle(), post.getContent());
    }

    @DeleteMapping("/{id}")
    public boolean deletePost(@PathVariable UUID id) {
    	System.out.println(id);
        return postService.deleteById(id);
    }
}
