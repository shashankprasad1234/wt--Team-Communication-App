import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetpasswordPage } from './resetpassword.page';


const routes: Routes = [
  {
    path: 'resetpassword',
    component: ResetpasswordPage,
    children: [
      {
        path: 'userdetail',
        
        
        loadChildren: () => import('../userdetail/userdetail.module').then( m => m.UserdetailPageModule),
        
      }
    ]
  },
  {path: '', loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)},
  

 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetpasswordPageRoutingModule {}
