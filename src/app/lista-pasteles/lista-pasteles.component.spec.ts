import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPastelesComponent } from './lista-pasteles.component';

describe('ListaPastelesComponent', () => {
  let component: ListaPastelesComponent;
  let fixture: ComponentFixture<ListaPastelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPastelesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPastelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
