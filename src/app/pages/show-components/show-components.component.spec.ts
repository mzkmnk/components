import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowComponentsComponent } from './show-components.component';

describe('ShowComponentsComponent', () => {
  let component: ShowComponentsComponent;
  let fixture: ComponentFixture<ShowComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
