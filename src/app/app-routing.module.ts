import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {path: '', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  {
    path: '',
    loadChildren: () => import('./resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  // {
  //   path: 'newuser',
  //   loadChildren: () => import('./newuser/newuser.module').then( m => m.NewuserPageModule)
  // },
  // {
  //   path: 'userdetail',
  //   loadChildren: () => import('./userdetail/userdetail.module').then( m => m.UserdetailPageModule)
  // },
 
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  // },
  
  // { path: 'home', 
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: 'projectlist',
  //   loadChildren: () => import('./projectlist/projectlist.module').then( m => m.ProjectlistPageModule)
  // },
  // {
  //   path: 'tasklist',
  //   loadChildren: () => import('./tasklist/tasklist.module').then( m => m.TasklistPageModule)
  // },
  // {
  //   path: 'chat',
  //   loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  // },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/*
{ path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  { path: 'home', 
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'newuser',
    loadChildren: () => import('./newuser/newuser.module').then( m => m.NewuserPageModule)
  },
  {
    path: 'userdetail',
    loadChildren: () => import('./userdetail/userdetail.module').then( m => m.UserdetailPageModule)
  },
  {
    path: 'resetpassword',
    loadChildren: () => import('./resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  */