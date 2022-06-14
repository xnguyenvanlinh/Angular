import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
})
export class WorksComponent implements OnInit {
  projects: any = [];
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projectService.read().subscribe((data) => {
      this.projects = data;
    });
  }
}
