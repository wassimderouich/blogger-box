import {Component, Input} from '@angular/core';
import { Post } from '../post-list.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls:['./post-list-item.component.css']

})
export class PostListItemComponent {
    @Input()
    post!: Post;
}


