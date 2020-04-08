import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { ChatPageModule } from '../chat/chat.module';
import { HomePageModule } from '../home/home.module';
import { ProjectlistPageModule } from '../projectlist/projectlist.module';
import { TasklistPageModule } from '../tasklist/tasklist.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    ChatPageModule,
    HomePageModule,
    ProjectlistPageModule,
    TasklistPageModule,
    ChatPageModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
