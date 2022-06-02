import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isAuth } from '../../utils';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}
  isShow = false;
  ngOnInit(): void {
    if (isAuth() == null) {
      this.isShow = false;
    } else {
      this.isShow = true;
    }
  }
  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('signin');
  }
}
