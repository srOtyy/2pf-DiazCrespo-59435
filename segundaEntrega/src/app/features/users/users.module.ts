import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ModalComponent } from './modal/modal.component';
import { UserListComponent } from './user-list/user-list.component';
import { userList } from '../../helpers/mock';


@NgModule({
  declarations: [

    ModalComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ],
  exports:[UserListComponent]
})
export class UsersModule { }
