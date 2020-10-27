import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarRoutingModule } from './toolbar-routing.module';
import { ToolbarComponent } from './toolbar.component';
import { MatMenu } from '@angular/material/menu';


@NgModule({
  declarations: [ToolbarComponent, MatMenu],
  imports: [
    CommonModule,
    ToolbarRoutingModule
  ]
})
export class ToolbarModule { }
