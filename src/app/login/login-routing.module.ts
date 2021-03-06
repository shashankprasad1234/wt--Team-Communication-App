import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';


const routes: Routes = [
  {
    path: '',
    component: LoginPage,
    children:[
      {
        path: 'menu',
        loadChildren: () => import('../menu/menu.module').then( m => m.MenuPageModule)
      }
    ]
  },
  // {
  //   path: 'resetpassword',
  //   loadChildren: () => import('../resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
  // },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
