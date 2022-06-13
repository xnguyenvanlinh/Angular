import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { ProjectService } from 'src/app/services/project.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(
    private projectService: ProjectService,
    private blogService: BlogService,
    private router: Router
  ) {}
  product: any = [];
  isBlog: boolean = false;
  isProject: boolean = false;
  confirm(id: string): void {
    this.isBlog
      ? this.blogService.destroy(id).subscribe(
          () => {
            this.getBlog();
          },
          (error) => {
            alert(error);
          }
        )
      : this.projectService.destroy(id).subscribe(
          () => {
            this.getProject();
          },
          (error) => {
            alert(error);
          }
        );
  }
  ngOnInit(): void {
    this.getProject();
    this.router.url === '/admin/blog'
      ? (this.getBlog(), (this.isBlog = true))
      : (this.getProject(), (this.isProject = true));
  }
  getBlog() {
    this.blogService.read().subscribe((data) => {
      this.product = data;
    });
  }
  getProject() {
    this.projectService.read().subscribe((data) => {
      this.product = data;
    });
  }
  expandSet = new Set<any>();
  onExpandChange(id: any, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
}
