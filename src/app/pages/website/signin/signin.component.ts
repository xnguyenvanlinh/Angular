import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import isAdmin from '../../../utils';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  token: string | undefined;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.validateForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  public send(form: NgForm | any): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }
  }
  ngOnInit(): void {}
  validateForm: FormGroup;
  submitForm(): void {
    this.authService.signin(this.validateForm.value).subscribe(
      (data: any) => {
        localStorage.setItem('user', data.accessToken);
        isAdmin()
          ? this.router.navigateByUrl('admin')
          : this.router.navigateByUrl('');
      },
      ({ error }) => {
        alert(error);
      }
    );
  }
}
