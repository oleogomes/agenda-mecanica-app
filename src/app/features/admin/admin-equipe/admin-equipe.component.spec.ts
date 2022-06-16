import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEquipeComponent } from './admin-equipe.component';

describe('AdminEquipeComponent', () => {
  let component: AdminEquipeComponent;
  let fixture: ComponentFixture<AdminEquipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEquipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
