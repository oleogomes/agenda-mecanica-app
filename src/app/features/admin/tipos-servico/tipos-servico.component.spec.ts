import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposServicoComponent } from './tipos-servico.component';

describe('TiposServicoComponent', () => {
  let component: TiposServicoComponent;
  let fixture: ComponentFixture<TiposServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
