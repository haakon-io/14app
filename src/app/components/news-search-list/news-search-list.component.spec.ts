import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSearchListComponent } from './news-search-list.component';

describe('NewsSearchListComponent', () => {
  let component: NewsSearchListComponent;
  let fixture: ComponentFixture<NewsSearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsSearchListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
