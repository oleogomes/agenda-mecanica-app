import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarServicoComponent } from './agendar-servico.component';

describe('AgendarServicoComponent', () => {
  let component: AgendarServicoComponent;
  let fixture: ComponentFixture<AgendarServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendarServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendarServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
