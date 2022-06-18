import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosClienteComponent } from './servicos-cliente.component';

describe('ServicosClienteComponent', () => {
  let component: ServicosClienteComponent;
  let fixture: ComponentFixture<ServicosClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicosClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
