import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPostsComponent } from "./list-posts/list-posts.component";
import { PostComponent } from "./post/post.component";

import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    ListPostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatFormFieldModule
  ],
  exports: [
    ListPostsComponent,
    PostComponent,
    MatFormFieldModule,
    MatMenuModule
  ]
})
export class ComponentsModule { }
