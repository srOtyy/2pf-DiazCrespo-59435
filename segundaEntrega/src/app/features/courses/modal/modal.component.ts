import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { generarIdAleatorio } from '../../../shared/utils';
import { CoursesService } from '../../../core/services/courses.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit{
  creating: boolean = true
  btnText: string = 'Crear'
  categorys: string[] = ['Programación','Diseño','Base de datos']
  formulario: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    id: new FormControl(''),
    category: new FormControl('',[Validators.required])

  })
  
  constructor(private _coursesService:CoursesService,
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  ngOnInit(): void {
    if(this.data){
      this.creating = false;
      this.btnText = 'Guardar'
      this.formulario.patchValue(this.data)
      this.formulario.value.category = this.data.category
    }
  }
  close():void{
    this.dialogRef.close()
  }
  // ABM
  addNewCourse():void{
    this.formulario.value.id = generarIdAleatorio()
    this._coursesService.addCourse(this.formulario.value)
  }
  updateCourse(id: string):void{
    this._coursesService.updateCourse(id,this.formulario.value)
  }
  send():void{
    if(this.creating){
      this.addNewCourse()
    }else{
      this.updateCourse(this.formulario.value.id)
    }
    this.close()
    
  }
}
