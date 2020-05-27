import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ResetpasswordPage } from './resetpassword.page';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticateService } from '../services/authentication.service';
import { IonicStorageModule } from '@ionic/storage';

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
it('signup_successful', async () => {
  fixture = TestBed.createComponent(ResetpasswordPage);
  component = fixture.componentInstance;
  component.setuser("example123dddd","abcd5678","abcd5678","example1234555@gmail.com");
  expect(component.signup()).toEqual(1)
});

it('signup_fail_password_mismatch', async () => {
  fixture = TestBed.createComponent(ResetpasswordPage);
  component = fixture.componentInstance;
  component.setuser("example123dddd","abcd5677","abcd5678","example1234555@gmail.com");
  expect(component.signup()).toEqual(0)
});
it('signup_fail_usernametooshort', async () => {
  fixture = TestBed.createComponent(ResetpasswordPage);
  component = fixture.componentInstance;
  component.setuser("example","abcd5678","abcd5678","example1234555@gmail.com");
  expect(component.signup()).toEqual(0)
});
it('signup_fail_passwrodtooshort', async () => {
  fixture = TestBed.createComponent(ResetpasswordPage);
  component = fixture.componentInstance;
  component.setuser("example123dddd","abcd567","abcd567","example1234555@gmail.com");
  expect(component.signup()).toEqual(0)
});
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
