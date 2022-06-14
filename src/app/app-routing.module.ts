import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { AdminComponent } from './components/admin/admin.component';
import { ClientComponent } from './components/client/client.component';
import { SigninComponent } from './pages/website/signin/signin.component';
import { SignupComponent } from './pages/website/signup/signup.component';
import { HomeComponent } from './pages/website/home/home.component';
import { WorksComponent } from './pages/website/works/works.component';
import { BlogComponent } from './pages/website/blog/blog.component';
import { DetailworkComponent } from './pages/website/detailwork/detailwork.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { CategoryComponent } from './pages/admin/category/category.component';
import { CategoryFormComponent } from './pages/admin/category-form/category-form.component';
import { ProductComponent } from './pages/admin/product/product.component';
import { ProductFormComponent } from './pages/admin/product-form/product-form.component';
import { ProfileEditComponent } from './pages/admin/profile-edit/profile-edit.component';
const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },

      {
        path: 'works',
        component: WorksComponent,
      },
      {
        path: 'blog',
        component: BlogComponent,
      },
      {
        path: 'detailwork/:id',
        component: DetailworkComponent,
      },
      {
        path: 'login',
        component: SigninComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            component: ProfileComponent,
          },
          {
            path: 'edit',
            component: ProfileEditComponent,
          },
        ],
      },
      {
        path: 'cate_blog',
        children: [
          {
            path: '',
            component: CategoryComponent,
          },
          {
            path: 'add',
            component: CategoryFormComponent,
          },
          {
            path: ':id/edit',
            component: CategoryFormComponent,
          },
        ],
      },
      {
        path: 'cate_project',
        children: [
          {
            path: '',
            component: CategoryComponent,
          },
          {
            path: 'add',
            component: CategoryFormComponent,
          },
          {
            path: ':id/edit',
            component: CategoryFormComponent,
          },
        ],
      },
      {
        path: 'project',
        children: [
          {
            path: '',
            component: ProductComponent,
          },

          {
            path: 'add',
            component: ProductFormComponent,
          },
          {
            path: ':id/edit',
            component: ProductFormComponent,
          },
        ],
      },
      {
        path: 'blog',
        children: [
          {
            path: '',
            component: ProductComponent,
          },
          {
            path: 'add',
            component: ProductFormComponent,
          },
          {
            path: ':id/edit',
            component: ProductFormComponent,
          },
        ],
      },
      {
        path: '',
        component: ProductComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
