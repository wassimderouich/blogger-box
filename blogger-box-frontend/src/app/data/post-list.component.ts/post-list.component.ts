import { Component, OnInit } from "@angular/core";
import { Post } from "../post";
import { PostService } from "../post.services";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
export {Post} from "../post";
@Component ({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
posts: Post[]=[];

constructor(private postService: PostService) {}

ngOnInit(): void {
    this.loadPosts();
}

loadPosts(): void{ 
    this.postService.getPosts().subscribe(posts => {
        this.posts=posts;
    });
}
}