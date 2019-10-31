import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogStateListComponent } from './blog-state-list.component';

describe('BlogStateListComponent', () => {
  let component: BlogStateListComponent;
  let fixture: ComponentFixture<BlogStateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogStateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogStateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
