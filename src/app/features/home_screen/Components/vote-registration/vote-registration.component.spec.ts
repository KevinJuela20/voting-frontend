import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteRegistrationComponent } from './vote-registration.component';

describe('VoteRegistrationComponent', () => {
  let component: VoteRegistrationComponent;
  let fixture: ComponentFixture<VoteRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoteRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
