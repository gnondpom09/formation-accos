import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../../models/post.model';
import { Constants } from '../../constants/constants'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl = 'https://hacker-news.firebaseio.com/v0/';

  constructor(private http: HttpClient) {}

  /**
   * Get list of ids
   */
  getAllPostsId(): Observable<Number[]> {
    return this.http.get<Number[]>(this.apiUrl + 'topstories.json');
  }

  /**
   * Get All Posts
   * @param id id of post
   */
  getPostDetail(id: Number): Observable<Post> {
    return this.http.get<Post>(this.apiUrl + 'item/' + id + '.json');
  }
}
