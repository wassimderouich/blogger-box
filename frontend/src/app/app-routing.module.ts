import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './data/post-list.component.ts/post-list.component';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar.component';
import { PostListItemComponent } from './data/post-list.component.ts/post-list-item/post-list-item.component';
import { AddPostComponent } from './data/add-post.component';

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'home', component: AppComponent },
  { path: 'top-bar', component: TopBarComponent },
  { path: 'post-item', component: PostListItemComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect any unknown route to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
