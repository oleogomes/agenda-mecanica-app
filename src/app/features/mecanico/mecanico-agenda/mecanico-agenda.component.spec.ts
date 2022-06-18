import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanicoAgendaComponent } from './mecanico-agenda.component';

describe('MecanicoAgendaComponent', () => {
  let component: MecanicoAgendaComponent;
  let fixture: ComponentFixture<MecanicoAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MecanicoAgendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MecanicoAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
