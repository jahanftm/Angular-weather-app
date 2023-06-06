import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiNoResultComponent } from './ui-no-result.component';

describe('UiNoResultComponent', () => {
  let component: UiNoResultComponent;
  let fixture: ComponentFixture<UiNoResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiNoResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiNoResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
