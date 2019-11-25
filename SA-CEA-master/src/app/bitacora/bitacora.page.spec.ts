import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { bitacoraPage } from './bitacora.page';

describe('BitacoraPage', () => {
  let component: bitacoraPage;
  let fixture: ComponentFixture<bitacoraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ bitacoraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(bitacoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
