import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../data/category.service';
import { Category, CategoryCreateInput } from '../data/category';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categoryForm: FormGroup;
  categories: Category[] = [];

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService
  ) {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]]
    });
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getAll().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }

  onSubmit(): void {
    if (this.categoryForm.valid) {
      const formValue = this.categoryForm.value;
      const existingCategory = this.categories.find(category => category.name.toLowerCase() === formValue.name.toLowerCase());

      if (!existingCategory) {
        const newCategory: CategoryCreateInput = {
          name: formValue.name
        };

        this.categoryService.create(newCategory).subscribe(response => {
          Swal.fire('Category Submitted Successfully', '', 'success').then(() => {
            this.loadCategories();
            this.categoryForm.reset();
          });
        });
      } else {
        Swal.fire('Category already exists', '', 'error');
      }
    } else {
      Swal.fire('Please review your input', '', 'error');
    }
  }

  deleteCategory(category: Category): void {
    this.categoryService.delete(category).subscribe(success => {
      if (success) {
        Swal.fire('Category Deleted Successfully', '', 'success').then(() => {
          this.loadCategories();
        });
      } else {
        Swal.fire('Failed to delete category', '', 'error');
      }
    });
  }
}
