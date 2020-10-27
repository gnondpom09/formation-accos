import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGard } from "./modules/guards/auth-guard";

const routes: Routes = [
  { 
    path: '', 
    // canActivate: [AuthGard],
    loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule) 
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
