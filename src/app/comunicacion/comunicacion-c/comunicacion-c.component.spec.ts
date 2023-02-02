import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacionCComponent } from './comunicacion-c.component';

describe('ComunicacionCComponent', () => {
  let component: ComunicacionCComponent;
  let fixture: ComponentFixture<ComunicacionCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComunicacionCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComunicacionCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
