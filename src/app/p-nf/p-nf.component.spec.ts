import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PNfComponent } from './p-nf.component';

describe('PNfComponent', () => {
  let component: PNfComponent;
  let fixture: ComponentFixture<PNfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PNfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PNfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
