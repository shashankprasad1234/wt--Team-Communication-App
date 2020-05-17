import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjectlistPage } from './projectlist.page';

describe('ProjectlistPage', () => {
  let component: ProjectlistPage;
  let fixture: ComponentFixture<ProjectlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

});
