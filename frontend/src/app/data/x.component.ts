import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';   
import { Category } from './category';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-x',
  templateUrl: './x.component.html',
  styleUrls: ['./x.component.css']
})
export class XComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((categories) => {
      this.categories = categories;
    });
  }
}
