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
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [],
  imports: [
    MatListModule,MatFormFieldModule,ReactiveFormsModule,FormsModule,MatButtonModule,MatIconModule,MatInputModule,MatToolbarModule,MatSidenavModule,MatSelectModule
  ],
  exports:[MatListModule,MatFormFieldModule,ReactiveFormsModule,FormsModule,MatButtonModule,MatIconModule,MatInputModule,MatToolbarModule,MatSidenavModule,MatSelectModule]
})
export class SharedModule { }
