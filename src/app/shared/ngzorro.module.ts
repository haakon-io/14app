import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@NgModule({
  exports: [
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzSpinModule,
    NzInputModule,
    NzPaginationModule,
  ],
  declarations: [],
})
export class NgZorroAntdModule {}
