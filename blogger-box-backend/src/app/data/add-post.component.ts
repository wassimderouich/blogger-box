import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../data/category.service';
import { PostService } from '../data/post.services';
import { PostWithoutID } from '../data/post';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Category } from '../data/category';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;
  categories: Category[] = [];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private postService: PostService
  ) {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
      category: ['', Validators.required], // Ensure 'category' control is properly defined
      content: ['', [Validators.required, Validators.maxLength(2500)]]
    });
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      const newPost: PostWithoutID = this.postForm.value;
      this.postService.createPost(newPost).subscribe(response => {
        Swal.fire('Post Submitted Successfully', '', 'success').then(() => {
          this.router.navigate(['/']);
        });
      });
    } else {
      Swal.fire('Please review your post', '', 'error');
    }
  }
}
