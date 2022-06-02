import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

@NgModule({
  exports: [
    NzLayoutModule,
    NzMenuModule,
    NzTableModule,
    NzFormModule,
    NzPopconfirmModule,
    NzButtonModule,
    NzInputModule,
    NzUploadModule,
    NzPageHeaderModule,
  ],
})
export class NgZorroAntdModule {}
