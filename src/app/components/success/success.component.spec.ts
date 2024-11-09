import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccessComponent } from './success.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SuccessComponent', () => {
  let component: SuccessComponent;
  let fixture: ComponentFixture<SuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display success message', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.success__title')?.textContent).toContain('Success!');
    expect(compiled.querySelector('.success__message')?.textContent).toContain('Your registration was successful.');
  });

  it('should have a back to form button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('.success__button') as HTMLButtonElement;
    expect(button).toBeTruthy();
    expect(button.textContent).toContain('Back to Form');
  });
});