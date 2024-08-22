import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgsGoogleAuthComponent } from './ngs-google-auth.component';

describe('NgsGoogleAuthComponent', () => {
  let component: NgsGoogleAuthComponent;
  let fixture: ComponentFixture<NgsGoogleAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgsGoogleAuthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgsGoogleAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
