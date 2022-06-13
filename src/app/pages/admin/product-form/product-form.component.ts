import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryBlogService } from 'src/app/services/category-blog.service';
import { CategoryProjectService } from 'src/app/services/category-project.service';
import axios from 'axios';
import { ProjectService } from 'src/app/services/project.service';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  validateForm: FormGroup;
  heading: string = '';
  placeholder: string = '';
  categories: any = [];
  text_node: string = '';
  fileList: any = [];
  uploading = false;
  action: string = '';
  data_product: any = {};
  category_old: any = '';
  createdAt: number = 0;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoryBlogService: CategoryBlogService,
    private categoryProjectService: CategoryProjectService,
    private projectService: ProjectService,
    private blogService: BlogService
  ) {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      category: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    const param = this.activatedRoute.snapshot.params['id'];
    const { url } = this.router;
    if (param) {
      this.text_node = 'Cập nhật';
      url.slice(0, 8) === '/admin/p'
        ? ((this.heading = 'Tên dự án'),
          this.getCateProject(),
          (this.placeholder = 'Nhập tên dự án'),
          this.projectService.get(param).subscribe((data) => {
            this.data_product = data;
            this.category_old = data.categoryProjectId;
            this.createdAt = data.createdAt;
            this.fileList = data.images.map((image, index) => {
              return {
                uid: index,
                name: 'Ảnh ' + (index + 1),
                status: 'done',
                response: 'Server Error 500',
                url: image,
              };
            });
          }),
          (this.action = 'update_project'))
        : ((this.heading = 'Tiêu đề'),
          (this.placeholder = 'Nhập tiêu đề bài viết'),
          this.getCateBlog(),
          this.blogService.get(param).subscribe((data) => {
            this.data_product = data;
            this.category_old = data.categoryPostId;
            this.createdAt = data.createdAt;
            this.fileList = data.images.map((image, index) => {
              return {
                uid: index,
                name: 'Ảnh ' + (index + 1),
                status: 'done',
                response: 'Server Error 500',
                url: image,
              };
            });
          }),
          (this.action = 'update_blog'));
    } else {
      this.text_node = 'Thêm';
      url === '/admin/project/add'
        ? ((this.heading = 'Tên dự án'),
          (this.placeholder = 'Nhập tên dự án'),
          this.getCateProject(),
          (this.action = 'add_project'))
        : ((this.heading = 'Tiêu đề'),
          (this.placeholder = 'Nhập tiêu đề bài viết'),
          this.getCateBlog(),
          (this.action = 'add_blog'));
    }
  }

  getCateProject() {
    this.categoryProjectService.read().subscribe((data) => {
      this.categories = data;
    });
  }

  getCateBlog() {
    this.categoryBlogService.read().subscribe((data) => {
      this.categories = data;
    });
  }

  validateConfirmPassword(): void {
    setTimeout(() =>
      this.validateForm.controls['confirm'].updateValueAndValidity()
    );
  }

  async submitForm(): Promise<void> {
    if (this.validateForm.valid) {
      switch (this.action) {
        case 'add_project':
          let dataProject = {
            ...this.validateForm.value,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            images: await this.uploadImage(this.fileList),
            categoryProjectId: this.validateForm.value.category,
          };
          delete dataProject.category;
          this.projectService.create(dataProject).subscribe(
            (data) => {
              console.log(data);
              // this.router.navigateByUrl('admin/project');
            },
            (error) => {
              alert(error);
            }
          );
          break;
        case 'add_blog':
          let dataBlog = {
            ...this.validateForm.value,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            images: await this.uploadImage(this.fileList),
            categoryPostId: this.validateForm.value.category,
          };
          delete dataBlog.category;
          this.blogService.create(dataBlog).subscribe(
            (data) => {
              console.log(data);
              // this.router.navigateByUrl('admin/blog')
            },
            (error) => {
              alert(error);
            }
          );
          break;
        case 'update_project':
          let dataProjectUpdate = {
            ...this.validateForm.value,
            updatedAt: Date.now(),
            createdAt: this.createdAt,
            categoryProjectId: this.validateForm.value.category,
            id: +this.activatedRoute.snapshot.params['id'],
          };
          delete dataProjectUpdate.category;
          const updateProject = (data: any) => {
            this.projectService.update(data).subscribe((data) => {
              console.log(data);
            });
          };
          if (this.checkImageNew().length == 0) {
            const data = {
              ...dataProjectUpdate,
              images: this.fileList.map((file: any) => file.url),
            };
            updateProject(data);
          } else {
            const data = {
              ...dataProjectUpdate,
              images: this.filtered([
                ...this.fileList.map((file: any) => file.url),
                ...(await this.uploadImage(this.checkImageNew())),
              ]),
            };
            console.log(data.images);
            updateProject(data);
          }
          break;
        case 'update_blog':
          let dataBlogUpdate = {
            ...this.validateForm.value,
            updatedAt: Date.now(),
            createdAt: this.createdAt,
            categoryPostId: this.validateForm.value.category,
            id: +this.activatedRoute.snapshot.params['id'],
          };
          delete dataBlogUpdate.category;
          const updateBlog = (data: any) => {
            this.projectService.update(data).subscribe((data) => {
              console.log(data);
            });
          };
          if (this.checkImageNew().length == 0) {
            const data = {
              ...dataProjectUpdate,
              images: this.fileList.map((file: any) => file.url),
            };
            updateBlog(data);
          } else {
            const data = {
              ...dataProjectUpdate,
              images: this.filtered([
                ...this.fileList.map((file: any) => file.url),
                ...(await this.uploadImage(this.checkImageNew())),
              ]),
            };
            console.log(data.images);
            updateBlog(data);
          }
          break;
        default:
          break;
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

  checkImageNew() {
    return this.fileList.filter((image: any) =>
      image.hasOwnProperty('originFileObj')
        ? image.hasOwnProperty('originFileObj')
        : ''
    );
  }

  checkImageOld() {
    return this.fileList.filter((image: any) =>
      image.hasOwnProperty('originFileObj') ? '' : image
    );
  }

  filtered = (data: any) => {
    return data.filter((el: any) => {
      return !!el;
    });
  };

  async uploadImage(files: any) {
    const images = [];
    const CLOUDINARY_API =
      'https://api.cloudinary.com/v1_1/xnguyenvanlinh/image/upload';
    for (const file of files) {
      const formData = new FormData();
      const { originFileObj } = file;
      formData.append('file', originFileObj);
      formData.append('upload_preset', 'linhnvph13162');
      const { data } = await axios.post(CLOUDINARY_API, formData, {
        headers: {
          'Content-Type': 'application/form-data',
        },
      });
      images.push(data.url);
    }
    return images;
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsPristine();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
  }
  // Reset Form
}
