import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models';
import { CategoryBlogService } from 'src/app/services/category-blog.service';
import { CategoryProjectService } from 'src/app/services/category-project.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css'],
})
export class CategoryFormComponent implements OnInit {
  validateForm!: FormGroup;
  heading: string = '';
  text_node: string = '';
  action: string = '';
  data_category: any = {};

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public title: Title,
    private activatedRoute: ActivatedRoute,
    private categoryBlogService: CategoryBlogService,
    private categoryProjectService: CategoryProjectService,
    private _location: Location
  ) {}

  backToPage() {
    this._location.back();
  }

  ngOnInit(): void {
    const param = this.activatedRoute.snapshot.params['id'];
    const { url } = this.router;
    if (param) {
      this.text_node = 'Cập nhật';
      url.slice(0, 13) === '/admin/cate_p'
        ? ((this.heading = ' Chỉnh sửa danh mục dự án'),
          (this.action = 'update_cate_project'),
          this.categoryProjectService.get(param).subscribe((data) => {
            this.data_category = data;
          }),
          this.title.setTitle(this.heading))
        : ((this.heading = ' Chỉnh sửa danh mục bài viết'),
          (this.action = 'update_cate_blog'),
          this.title.setTitle(this.heading),
          this.categoryBlogService.get(param).subscribe((data) => {
            this.data_category = data;
          }));
    } else {
      this.text_node = 'Thêm';
      url === '/admin/cate_blog/add'
        ? ((this.heading = 'Thêm danh mục bài viết'),
          (this.action = 'add_cate_blog'),
          this.title.setTitle(this.heading))
        : ((this.heading = 'Thêm danh mục dự án'),
          (this.action = 'add_cate_project'),
          this.title.setTitle(this.heading));
    }
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      const data = {
        ...this.data_category,
        name: this.validateForm.value.name,
      };
      switch (this.action) {
        case 'add_cate_blog':
          this.categoryBlogService.create(data).subscribe(
            () => {
              this.router.navigateByUrl('admin/cate_blog');
            },
            (error) => {
              alert(error);
            }
          );
          break;
        case 'add_cate_project':
          this.categoryProjectService.create(data).subscribe(
            () => {
              this.router.navigateByUrl('admin/cate_project');
            },
            (error) => {
              alert(error);
            }
          );
          break;
        case 'update_cate_blog':
          this.categoryBlogService.update(data).subscribe(
            () => {
              this.router.navigateByUrl('admin/cate_blog');
            },
            (error) => {
              alert(error);
            }
          );
          break;
        case 'update_cate_project':
          this.categoryProjectService.update(data).subscribe(
            () => {
              this.router.navigateByUrl('admin/cate_project');
            },
            (error) => {
              alert(error);
            }
          );
          break;
        default:
          throw new Error('Có lỗi xảy ra, vui lòng thử lại sau');
      }
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
