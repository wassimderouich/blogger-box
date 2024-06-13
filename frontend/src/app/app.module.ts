import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar.component';
import { PostService } from './data/post.services';
import { PostListComponent } from './data/post-list.component.ts/post-list.component';
import { PostListItemComponent } from './data/post-list.component.ts/post-list-item/post-list-item.component';
import { CategoryService } from './data/category.service';  // Import CategoryService
import { XComponent } from './data/x.component';  // Import XComponent
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddPostComponent } from './data/add-post.component';
import { AddCategoryComponent } from './data/add-category.component';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PostListComponent,
    PostListItemComponent,
    AddPostComponent,
    AddCategoryComponent ,
    XComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    CategoryService  // Provide CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
