import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { AdminComponent } from './components/admin/admin.component';
import { ClientComponent } from './components/client/client.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductsComponent } from './components/products/products.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PermissionComponent } from './pages/permission/permission.component';
import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DetailworkComponent } from './pages/detailwork/detailwork.component';
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
        path: 'detailwork',
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
        redirectTo: 'product',
        pathMatch: 'full',
      },
      {
        path: 'product',
        children: [
          {
            path: '',
            component: ProductsComponent,
          },
          {
            path: 'add',
            component: ProductAddComponent,
          },
          {
            path: ':id',
            component: ProductDetailComponent,
          },
          {
            path: 'edit/:id',
            component: ProductEditComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
