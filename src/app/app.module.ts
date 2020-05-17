import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { AuthenticateService} from './services/authentication.service';

import * as firebase from 'firebase';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from  '@ionic/storage'; // Need to download this manually using npm install --save @ionic/storage

firebase.initializeApp(environment.firebase);


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
           FormsModule,
           IonicModule.forRoot(),
           AppRoutingModule,
           AngularFireModule.initializeApp(environment.firebase),
           AngularFireDatabaseModule,ReactiveFormsModule,
           AngularFireAuthModule,IonicStorageModule.forRoot(),
           BrowserModule,
           AngularFireAnalyticsModule,
           AngularFirestoreModule,
           HttpClientModule],
  providers: [
    AngularFirestore,
    HttpClientModule,
    StatusBar,
    SplashScreen,
    AuthenticateService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
