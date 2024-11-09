import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

/**
 * FormComponent maneja el formulario de registro de usuario.
 * Utiliza formularios reactivos para el manejo de entradas y validación.
 */

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

   /**
   * Inicializa el formulario de registro con los campos de correo electrónico y contraseña.
   * Configura validadores para ambos campos.
   */
  private initForm(): void {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

   /**
   * Maneja el envío del formulario.
   * Si el formulario es válido, navega a la página de éxito.
   */
  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.router.navigate(['/success']);
    }
  }

 /**
   * Verifica si un control del formulario tiene un error específico.
   * @param controlName - El nombre del control del formulario.
   * @param errorName - El nombre del error a verificar.
   * @returns True si el control tiene el error especificado, false en caso contrario.
 */
  hasError(controlName: string, errorName: string): boolean {
    const control = this.registrationForm.get(controlName);
    return !!control?.hasError(errorName) && (control?.dirty || control?.touched);
  }
}