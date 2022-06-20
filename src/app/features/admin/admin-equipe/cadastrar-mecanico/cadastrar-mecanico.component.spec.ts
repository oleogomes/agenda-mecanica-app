import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarMecanicoComponent } from './cadastrar-mecanico.component';

describe('CadastrarMecanicoComponent', () => {
  let component: CadastrarMecanicoComponent;
  let fixture: ComponentFixture<CadastrarMecanicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarMecanicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
