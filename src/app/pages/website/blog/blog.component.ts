import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  constructor(private blogService: BlogService) {}
  blogs: any = [];
  ngOnInit(): void {
    this.getBlog();
  }

  getBlog() {
    this.blogService.getLimitBlog(5).subscribe((data) => {
      this.blogs = data;
    });
  }
}
