import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/models';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private profileService: ProfileService, private router: Router) {}

  profile: Profile = {
    name: '',
    position: '',
    about: '',
    cv: '',
  };

  ngOnInit(): void {
    this.getInfor();
  }

  click() {
    this.router.navigate(['admin/profile/edit']);
  }

  getInfor() {
    this.profileService.read().subscribe((data) => {
      this.profile = data;
      console.log(data);
    });
  }
}
