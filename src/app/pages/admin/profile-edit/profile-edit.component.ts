import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { google } from 'googleapis';
import * as fs from 'fs';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css'],
})
export class ProfileEditComponent implements OnInit {
  validateForm: FormGroup;
  path: string = '';
  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private router: Router
  ) {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      position: ['', [Validators.required]],
      about: ['', Validators.required],
    });
  }
  profile: any = {
    name: '',
    position: '',
    cv: '',
    about: '',
  };
  submitForm(): void {
    this.profileService
      .update({ ...this.validateForm.value, cv: '' })
      .subscribe(
        () => {
          this.router.navigateByUrl('admin/profile');
        },
        (error) => {
          alert(error);
        }
      );
  }

  handleChange(e: any) {
    this.path = e.target.value;
  }

  ngOnInit(): void {
    this.profileService.read().subscribe((data) => {
      this.profile = data;
    });
  }
}
