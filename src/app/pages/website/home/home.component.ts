import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models';
import { BlogService } from 'src/app/services/blog.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ProjectService } from 'src/app/services/project.service';
import { _date } from 'src/app/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  blog: any = [];
  project: any = [];
  profile: any = {};
  constructor(
    private blogService: BlogService,
    private projectService: ProjectService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.getBlog();
    this.getProject();
    this.getInfor();
  }

  open() {
    window.open(
      'https://drive.google.com/uc?id=1PiOUW-iXEUxlQkhRna4vEK-Mnb9OuPvV&export=download',
      '_blank'
    );
  }

  getBlog() {
    this.blogService.getLimitBlog(2).subscribe((data) => {
      this.blog = data.map((b: any) => {
        return {
          ...b,
          createdAt: _date(b.createdAt),
        };
      });
    });
  }

  getProject() {
    this.projectService.read().subscribe((data) => {
      this.project = data.map((p: any) => {
        return {
          ...p,
          createdAt: _date(p.createdAt),
        };
      });
    });
  }

  getInfor() {
    this.profileService.read().subscribe((data) => {
      this.profile = data;
    });
  }
}
