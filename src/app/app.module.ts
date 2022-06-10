import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientComponent } from './components/client/client.component';
import { AdminComponent } from './components/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { ProductsComponent } from './components/products/products.component';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HeaderComponent } from './components/header/header.component';
import { PermissionComponent } from './pages/permission/permission.component';
import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DetailworkComponent } from './pages/detailwork/detailwork.component';
registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductAddComponent,
    FooterComponent,
    ClientComponent,
    AdminComponent,
    ProductEditComponent,
    SignupComponent,
    SigninComponent,
    PermissionComponent,
    HomeComponent,
    WorksComponent,
    BlogComponent,
    DetailworkComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    ScrollingModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NgZorroAntdModule,
  ],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, NgZorroAntdModule],
  providers: [
    ProductService,
    { provide: NZ_I18N, useValue: en_US },
    { provide: NzMessageService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
