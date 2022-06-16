import { PageContentComponent } from './page-content.component';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('PageContentComponent', () => {
  let component: PageContentComponent;
  let fixture: ComponentFixture<PageContentComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageContentComponent ],
      imports: [RouterTestingModule ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { titulo: 'Titulo Teste', } },
        { provide: HttpClient }
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 

});
