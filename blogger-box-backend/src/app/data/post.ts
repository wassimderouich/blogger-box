import {Category} from "./category";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

export interface Post {
    id: string;
    title:string;
    content: string;
    createdDate: string;
    category: Category;
    
}

export type PostWithoutID = {
  title: string;
  category: { id: string; name: string };  // Ensure category is an object
  content: string;
};

export type PostWithTimestamp = Post & { timestamp: string };