import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { SuccessComponent } from './components/success/success.component';

export const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  { path: 'form', component: FormComponent },
  { path: 'success', component: SuccessComponent }
];