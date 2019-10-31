import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogStateDetailsComponent } from './blog-state-details.component';

describe('BlogStateDetailsComponent', () => {
  let component: BlogStateDetailsComponent;
  let fixture: ComponentFixture<BlogStateDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogStateDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogStateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
