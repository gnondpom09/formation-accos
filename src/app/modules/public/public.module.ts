import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PublicComponent } from './public.component';
import { ToolbarComponent } from "./toolbar/toolbar.component";

import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [HomeComponent, ContactComponent, PublicComponent, ToolbarComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatMenuModule
  ]
})
export class PublicModule { }
