import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastfmComponent } from './lastfm.component';

describe('LastfmComponent', () => {
  let component: LastfmComponent;
  let fixture: ComponentFixture<LastfmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastfmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastfmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
