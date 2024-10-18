import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';

import { CoursesListComponent } from './courses-list/courses-list.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    CoursesListComponent,
      ModalComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule
  ],
  exports:[CoursesListComponent]
})
export class CoursesModule { }
