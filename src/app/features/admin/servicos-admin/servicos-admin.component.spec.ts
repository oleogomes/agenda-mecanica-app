import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosAdminComponent } from './servicos-admin.component';

describe('ServicosAdminComponent', () => {
  let component: ServicosAdminComponent;
  let fixture: ComponentFixture<ServicosAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicosAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
