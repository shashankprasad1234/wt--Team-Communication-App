import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules} from '@angular/router';


import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'userdetail/menu',
    redirectTo: 'main/home',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    redirectTo: 'main/home',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MenuPage,
    children: [
      { path: 'home', 
    loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
    },
    {
      path: 'projectlist',
      loadChildren: () => import('../projectlist/projectlist.module').then( m => m.ProjectlistPageModule)
    },
    {
      path: 'chat',
      loadChildren: () => import('../chat/chat.module').then( m => m.ChatPageModule)
    },
    {
      path: 'profile',
      loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
    }
  ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
