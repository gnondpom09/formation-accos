import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from '../pages/contact/contact.component';
import { HomeComponent } from '../pages/home/home.component';

const routes: Routes = [
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   outlet: 'content'
  // },
  // {
  //   path: 'contact',
  //   component: ContactComponent,
  //   outlet: 'content'
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolbarRoutingModule { }
