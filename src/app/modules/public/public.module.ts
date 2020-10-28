import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

import { PublicComponent } from './public.component';
import { ToolbarComponent } from "./toolbar/toolbar.component";

import { ComponentsModule } from "../../components/components.module";
import { PostsComponent } from './pages/posts/posts.component';

@NgModule({
  declarations: [
    PublicComponent, 
    ToolbarComponent,
    HomeComponent,
    ContactComponent, 
    PostsComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ComponentsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PublicModule { }
