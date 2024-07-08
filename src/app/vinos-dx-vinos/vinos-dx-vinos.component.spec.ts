import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinosDxVinosComponent } from './vinos-dx-vinos.component';

describe('VinosDxVinosComponent', () => {
  let component: VinosDxVinosComponent;
  let fixture: ComponentFixture<VinosDxVinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VinosDxVinosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinosDxVinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
