import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryBlogService } from 'src/app/services/category-blog.service';
import { CategoryProjectService } from 'src/app/services/category-project.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  category: any = [];
  listOfCategory: any = [];
  isBlog: boolean = false;
  isProject: boolean = false;
  constructor(
    private router: Router,
    private categoryBlogService: CategoryBlogService,
    private categoryProjectServer: CategoryProjectService
  ) {}
  confirm(id: string | number): void {
    this.isBlog
      ? this.categoryBlogService.destroy(id).subscribe(
          () => {
            this.getCateBlog();
          },
          (error) => {
            alert(error);
          }
        )
      : this.categoryProjectServer.destroy(id).subscribe(
          () => {
            this.getCateProject();
          },
          (error) => {
            alert(error);
          }
        );
  }
  ngOnInit(): void {
    this.router.url === '/admin/cate_blog'
      ? (this.getCateBlog(), (this.isBlog = true))
      : (this.getCateProject(), (this.isProject = true));
  }
  getCateBlog() {
    this.categoryBlogService.read().subscribe((data) => {
      this.category = data.map((category, index) => {
        return {
          key: index,
          id: category.id,
          name: category.name,
          expand: false,
        };
      });
      for (let i = 0; i < data.length; i++) {
        this.listOfCategory.push(
          data[i]?.posts.map((item: any, index: number) => {
            return {
              key: index,
              id: item.id,
              name: item.title,
              image: item.image,
              intro: item.short_desc,
              createdAt: item.createdAt,
              updatedAt: item.updatedAt,
            };
          })
        );
      }
    });
  }
  getCateProject() {
    this.categoryProjectServer.read().subscribe((data) => {
      this.category = data.map((category, index) => {
        return {
          key: index,
          id: category.id,
          name: category.name,
          expand: false,
        };
      });
      for (let i = 0; i < data.length; i++) {
        this.listOfCategory.push(
          data[i]?.projects.map((item: any, index: number) => {
            return {
              key: index,
              id: item.id,
              name: item.name,
              image: item.image,
              intro: item.short_desc,
              createdAt: item.createdAt,
              updatedAt: item.updatedAt,
            };
          })
        );
      }
    });
  }
}
