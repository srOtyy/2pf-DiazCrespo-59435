import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
@NgModule({
  declarations: [],
  imports: [
    MatListModule,MatFormFieldModule,ReactiveFormsModule,FormsModule,MatButtonModule,MatIconModule,MatInputModule,MatToolbarModule,MatSidenavModule
  ],
  exports:[MatListModule,MatFormFieldModule,ReactiveFormsModule,FormsModule,MatButtonModule,MatIconModule,MatInputModule,MatToolbarModule,MatSidenavModule]
})
export class SharedModule { }
