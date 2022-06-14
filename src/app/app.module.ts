import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientComponent } from './components/client/client.component';
import { AdminComponent } from './components/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SignupComponent } from './pages/website/signup/signup.component';
import { SigninComponent } from './pages/website/signin/signin.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/website/home/home.component';
import { WorksComponent } from './pages/website/works/works.component';
import { BlogComponent } from './pages/website/blog/blog.component';
import { DetailworkComponent } from './pages/website/detailwork/detailwork.component';
import { CategoryComponent } from './pages/admin/category/category.component';
import { CategoryFormComponent } from './pages/admin/category-form/category-form.component';
import { ProductComponent } from './pages/admin/product/product.component';
import { ProductFormComponent } from './pages/admin/product-form/product-form.component';
import {
  RECAPTCHA_SETTINGS,
  RecaptchaFormsModule,
  RecaptchaModule,
  RecaptchaSettings,
} from 'ng-recaptcha';
import { environment } from '../environments/environment';
import { ProfileEditComponent } from './pages/admin/profile-edit/profile-edit.component';
registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientComponent,
    AdminComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    WorksComponent,
    BlogComponent,
    DetailworkComponent,
    CategoryComponent,
    CategoryFormComponent,
    ProductComponent,
    ProductFormComponent,
    ProfileEditComponent,
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
    RecaptchaFormsModule,
    RecaptchaModule,
  ],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, NgZorroAntdModule],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NzMessageService },
    Title,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
