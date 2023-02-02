import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesCComponent } from './paises-c.component';

describe('PaisesCComponent', () => {
  let component: PaisesCComponent;
  let fixture: ComponentFixture<PaisesCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisesCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
