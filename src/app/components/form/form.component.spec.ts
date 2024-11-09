import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [FormComponent, ReactiveFormsModule],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty form', () => {
    expect(component.registrationForm.get('email')?.value).toBe('');
    expect(component.registrationForm.get('password')?.value).toBe('');
  });

  it('should validate email format', () => {
    const emailControl = component.registrationForm.get('email');
    emailControl?.setValue('invalid-email');
    expect(emailControl?.hasError('email')).toBeTruthy();
    emailControl?.setValue('valid@email.com');
    expect(emailControl?.hasError('email')).toBeFalsy();
  });

  it('should validate password length', () => {
    const passwordControl = component.registrationForm.get('password');
    passwordControl?.setValue('short');
    expect(passwordControl?.hasError('minlength')).toBeTruthy();
    passwordControl?.setValue('validpassword');
    expect(passwordControl?.hasError('minlength')).toBeFalsy();
  });

  it('should disable submit button when form is invalid', () => {
    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
    expect(submitButton.disabled).toBeTruthy();

    component.registrationForm.setValue({
      email: 'valid@email.com',
      password: 'validpassword'
    });
    fixture.detectChanges();

    expect(submitButton.disabled).toBeFalsy();
  });

  it('should navigate to success page on valid form submission', () => {
    component.registrationForm.setValue({
      email: 'valid@email.com',
      password: 'validpassword'
    });
    component.onSubmit();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/success']);
  });
});