package com.dauphine.blogger.services;

import java.util.List;
import java.util.UUID;

import com.dauphine.blogger.models.Post;

public interface PostService {
List<Post> getALLByCategoryId(UUID categoryID);
List<Post> getALL();
Post getById(UUID id);
Post create(String title, String content, UUID categoryID);
Post update(UUID id, String title, String content);
boolean deleteById(UUID id);
}
