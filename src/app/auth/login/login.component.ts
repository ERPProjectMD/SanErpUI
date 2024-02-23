import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  loginForm = this.fb.group({
    userName: [null, Validators.required],
    password: [null, Validators.required],
  });

  onSubmit(): void {
    alert('Thanks!');
  }
}
