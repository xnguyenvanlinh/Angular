import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-detailwork',
  templateUrl: './detailwork.component.html',
  styleUrls: ['./detailwork.component.css'],
})
export class DetailworkComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService
  ) {}
  project: any;
  ngOnInit(): void {
    const param = this.activatedRoute.snapshot.params['id'];
    this.projectService.get(param).subscribe((data) => {
      this.project = data;
      console.log(data);
    });
  }
}
