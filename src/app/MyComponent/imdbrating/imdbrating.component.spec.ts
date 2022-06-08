import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdbratingComponent } from './imdbrating.component';

describe('ImdbratingComponent', () => {
  let component: ImdbratingComponent;
  let fixture: ComponentFixture<ImdbratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImdbratingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImdbratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
