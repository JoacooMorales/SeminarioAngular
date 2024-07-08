import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinosDxAboutComponent } from './vinos-dx-about.component';

describe('VinosDxAboutComponent', () => {
  let component: VinosDxAboutComponent;
  let fixture: ComponentFixture<VinosDxAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VinosDxAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinosDxAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
