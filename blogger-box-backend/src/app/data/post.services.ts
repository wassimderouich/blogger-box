import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Post, PostWithoutID } from '../data/post';
import { environment } from '../environment/environment';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PostService {
  private baseUrl = `${environment.apiUrl}v1/posts`;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl).pipe(
      catchError(this.handleError)
    );
  }

  createPost(post: PostWithoutID): Observable<Post> {
    return this.http.post<Post>(this.baseUrl, post).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Something bad happened; please try again later.';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('An error occurred:', error.error.message);
    } else {
      // Server-side error
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`
      );
    }
    return throwError(errorMessage);
  }
}
