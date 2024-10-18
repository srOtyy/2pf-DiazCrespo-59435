import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { CoursesService } from '../../../../core/services/courses.service';
import { ICourse } from '../../../../shared/interface';
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss'
})
export class CoursesListComponent implements OnInit,OnDestroy{
  coursesList: ICourse[] = []
  
  readonly dialog = inject(MatDialog);
  private suscription: Subscription | null = null; 
  constructor(private _coursesService:CoursesService){}
  ngOnInit(): void {
    this.suscribe()
  }
  ngOnDestroy(): void {
    this.unsuscribe()
  }
  suscribe():void{
    this.suscription = this._coursesService.getObservable().subscribe({
      next: data => this.coursesList = data,
      error: error=> console.log("error en la suscripcion",error)
    })
  }
  unsuscribe():void{
    if(this.suscription){
      this.suscription.unsubscribe()
      this.suscription = null
    }
  }
  
  deleteUser(id: string):void{
    this._coursesService.deleteCourse(id)
  }
  openModal(course?: ICourse): void {
    if(course){//editando
      const dialogRef = this.dialog.open(ModalComponent,{
        data: course
      });
      dialogRef.afterClosed().subscribe();
     
    }else{//creando
      const dialogRef = this.dialog.open(ModalComponent);
      dialogRef.afterClosed().subscribe();

    }
  }
}
