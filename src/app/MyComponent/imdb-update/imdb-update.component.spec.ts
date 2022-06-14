import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdbUpdateComponent } from './imdb-update.component';

describe('ImdbUpdateComponent', () => {
  let component: ImdbUpdateComponent;
  let fixture: ComponentFixture<ImdbUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImdbUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImdbUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
