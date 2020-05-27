import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ResetpasswordPage } from './resetpassword.page';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticateService } from '../services/authentication.service';
import { IonicStorageModule } from '@ionic/storage';
import { element } from 'protractor';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';


firebase.initializeApp(environment.firebase);

describe('ResetpasswordPage', () => {
  let component: ResetpasswordPage;
  let fixture: ComponentFixture<ResetpasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetpasswordPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule, IonicStorageModule.forRoot(), FormsModule],
      providers: [AuthenticateService]
    }).compileComponents();

    fixture = TestBed.createComponent(ResetpasswordPage);
    component = fixture.componentInstance;
    //component.username = "example123dddd";
    //component.password = "abcd5678";
    //component.confirmpassword = "abcd5678";
    //component.email = "example1234555@gmail.com"
    fixture.detectChanges();
  }));

  /*
  it('passwordtest', () => {
    fixture = TestBed.createComponent(ResetpasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.signupUser).toBe(1);
  });
  
})*/


it('signup_Successful', async function(){
  component = fixture.componentInstance;
  component.setuser("successul_test_inpp1234","abcd5678","abcd5678","successful_test_inpp1234@gmail.com");
  let button = fixture.debugElement.nativeElement.querySelector('ion-button');
  button.click();
  expect(component.signupUser()).toEqual(1);
});

it('signuptest_password_mismatch', async function(){
  component = fixture.componentInstance;
  component.setuser("password_mismatch_input","abcd5679","abcd5678","password_mismatch@gmail.com");
  let button = fixture.debugElement.nativeElement.querySelector('ion-button');
  button.click();
  expect(component.signupUser()).toEqual(0);
});

it('signuptest_username_length_short', async function(){
  component = fixture.componentInstance;
  component.setuser("short","abcd5678","abcd5678","short_username@gmail.com");
  let button = fixture.debugElement.nativeElement.querySelector('ion-button');
  button.click();
  expect(component.signupUser()).toEqual(0);
});

it('signuptest_password_length_short', async function(){
  component = fixture.componentInstance;
  component.setuser("short_password_inp","abcd","abcd","password_length_short@gmail.com");
  let button = fixture.debugElement.nativeElement.querySelector('ion-button');
  button.click();
  expect(component.signupUser()).toEqual(0);
});

// it('signuptest_invalid_email', async function(){
//   component = fixture.componentInstance;
//   component.setuser("invalid_email_input","abcd5678","abcd5678","invalid_email.com");
//   let button = fixture.debugElement.nativeElement.querySelector('ion-button');
//   button.click();
//   expect(component.signupUser()).toEqual(0);
// });

// it('signup_Username_exists', async function(){
//   component = fixture.componentInstance;
//   component.setuser("successul_test_inp","abcd5678","abcd5678","successful_test_inp@gmail.com");
//   let button = fixture.debugElement.nativeElement.querySelector('ion-button');
//   button.click();
//   expect(component.signupUser()).toEqual(0);
// });




// it('signup_successful', async () => {
//   fixture = TestBed.createComponent(ResetpasswordPage);
//   component = fixture.componentInstance;
//   component.setuser("example123dddd","abcd5678","abcd5678","example1234555@gmail.com");
//   expect(component.signup()).toEqual(1);

// });

// it('signup_fail_password_mismatch', async () => {
//   fixture = TestBed.createComponent(ResetpasswordPage);
//   component = fixture.componentInstance;
//   component.setuser("example123dddd","abcd5677","abcd5678","example1234555@gmail.com");
//   expect(component.signup()).toEqual(0)
// });
// it('signup_fail_usernametooshort', async () => {
//   fixture = TestBed.createComponent(ResetpasswordPage);
//   component = fixture.componentInstance;
//   component.setuser("example","abcd5678","abcd5678","example1234555@gmail.com");
//   expect(component.signup()).toEqual(0)
// });
// it('signup_fail_passwrodtooshort', async () => {
//   fixture = TestBed.createComponent(ResetpasswordPage);
//   component = fixture.componentInstance;
//   component.setuser("example123dddd","abcd567","abcd567","example1234555@gmail.com");
//   expect(component.signup()).toEqual(0)
// });
/*
it('signup_successful', async () => {
  fixture = TestBed.createComponent(ResetpasswordPage);
  component = fixture.componentInstance;
  component.setuser("example123dddd","abcd5678","abcd5678","example1234555@gmail.com");
  await expectAsync(component.signupUser()).toBeResolved(1)
});
it('signup_fail_password_mismatch', async () => {
  fixture = TestBed.createComponent(ResetpasswordPage);
  component = fixture.componentInstance;
  component.setuser("example123dddd","abcd5677","abcd5678","example1234555@gmail.com");
  await expectAsync(component.signupUser()).toBeResolved(0)
});

it('signup_fail_usernametooshort', async () => {
  fixture = TestBed.createComponent(ResetpasswordPage);
  component = fixture.componentInstance;
  component.setuser("example","abcd5678","abcd5678","example1234555@gmail.com");
  await expectAsync(component.signupUser()).toBeResolved(0)
});

it('signup_fail_passwrodtooshort', async () => {
  fixture = TestBed.createComponent(ResetpasswordPage);
  component = fixture.componentInstance;
  component.setuser("example123dddd","abcd567","abcd567","example1234555@gmail.com");
  await expectAsync(component.signupUser()).toBeResolved(0)
});
*/
})
