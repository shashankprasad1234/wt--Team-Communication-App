import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticateService } from '../services/authentication.service';
import { IonicStorageModule } from '@ionic/storage';
import { element } from 'protractor';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from '../services/firebase.service';
import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { HomePage } from './home.page';
import { HttpClient, HttpHandler } from '@angular/common/http';




//firebase.initializeApp(environment.firebase);



describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(), RouterTestingModule, IonicStorageModule.forRoot(), FormsModule,AngularFireModule.initializeApp(environment.firebase)],
      providers: [ AuthenticateService,AngularFirestore, FirebaseService,HttpClient,HttpHandler]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  
it('project_added_successfully', function(){
  fixture = TestBed.createComponent(HomePage);
  component = fixture.componentInstance;
  component.setdata("test1234","newproject", "test1234","do task 1",["Machine Learning", "Operating Systems"])
  component.addname();
  component.addtask();
  let button = fixture.debugElement.nativeElement.querySelector('#save');
  button.click();
  expect(component.saveProject()).toEqual(1);
});
it('project_add_fail_noprojectname', function(){
  fixture = TestBed.createComponent(HomePage);
  component = fixture.componentInstance;
  component.setdata("test1234","", "test1234","do task 1",["Machine Learning", "Operating Systems"])
  component.addname();
  component.addtask();
  let button = fixture.debugElement.nativeElement.querySelector('#save');
  button.click();
  expect(component.saveProject()).toEqual(0);
});
it('project_add_fail_nomembername', function(){
  fixture = TestBed.createComponent(HomePage);
  component = fixture.componentInstance;
  component.setdata("test1234","newproject", "","do task 1",["Machine Learning", "Operating Systems"])
  component.addname();
  component.addtask();
  let button = fixture.debugElement.nativeElement.querySelector('#save');
  button.click();
  expect(component.saveProject()).toEqual(0);
});
it('project_add_fail_notasksassigned', function(){
  fixture = TestBed.createComponent(HomePage);
  component = fixture.componentInstance;
  component.setdata("test1234","newproject", "test1234","",[])
  component.addname();
  component.addtask();
  let button = fixture.debugElement.nativeElement.querySelector('#save');
  button.click();
  expect(component.saveProject()).toEqual(0);
});

});
