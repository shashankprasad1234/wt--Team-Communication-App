import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserdetailPage } from './userdetail.page';

const routes: Routes = [
  {
    path: 'userdetail',

    
    component: UserdetailPage,
    children:[
      
        {
          path: 'userdetail/menu',
          loadChildren: () => import('../menu/menu.module').then( m => m.MenuPageModule)
        }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserdetailPageRoutingModule {}
