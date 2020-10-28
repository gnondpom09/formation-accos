import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {
  // Properties
  @Input() posts: Post[];

  constructor() { }

  ngOnInit(): void {
  }

  viewPost(id: number) {
    console.log(id);
  }
}
