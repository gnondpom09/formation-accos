import { Component, OnInit } from '@angular/core';

import { PostService } from "../../../../services/post/post.service";
import { Post } from 'src/app/models/post.model';

@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
    // Properties
    posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    // Init
    this.posts = [];

    // Get all posts
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getAllPostsId().subscribe((postsId) => {
      postsId.forEach((id) =>
        this.postService.getPostDetail(id).subscribe((item) => {
          this.posts.push(item);
        })
      );
    });
  }
}
