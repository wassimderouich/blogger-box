import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Post } from '../post-list.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../../post.services';
@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls:['./post-list-item.component.css']

})
export class PostListItemComponent implements OnChanges {
    @Input()
    post!: Post;

    formattedDate!: string;

    constructor(private postService: PostService) {}


    ngOnChanges(changes: SimpleChanges): void {
      if (changes['post'] && this.post && Array.isArray(this.post.createdDate)) {
        const dateParts = this.post.createdDate.map(Number);
        if (dateParts.length >= 7) {
          const date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2], dateParts[3], dateParts[4], dateParts[5], Math.floor(dateParts[6] / 1000000));
          this.formattedDate = date.toISOString();
        } else {
          console.error('Invalid date format');
          this.formattedDate = '';
        }
      } else {
        console.error('Invalid post data or createdDate is not an array');
        this.formattedDate = '';
      }
  }
  deletePost(id: string): void {
    this.postService.deletePost(id).subscribe(() => {
      console.log('Post deleted successfully');
      window.location.reload(); 
    }, error => {
      console.error('An error occurred while deleting the post.', error);
    });
  }
}


