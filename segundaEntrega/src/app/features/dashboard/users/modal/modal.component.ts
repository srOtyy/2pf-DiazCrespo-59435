import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../../core/services/users.service';
import { generarIdAleatorio } from '../../../../shared/utils';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit{
  creating: boolean = true
  btnText: string = 'Crear'
  formulario: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(6)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    id: new FormControl(''),
    courses: new FormControl([]),
    rol: new FormControl('alumno')

  })
  
  constructor(private _usersService:UsersService,
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  ngOnInit(): void {
    if(this.data){
      this.creating = false;
      this.btnText = 'Guardar'
      this.formulario.patchValue(this.data)
    }
  }
  close():void{
    this.dialogRef.close()
  }
  // ABM
  addNewUser():void{
    this.formulario.value.id = generarIdAleatorio()
    this._usersService.addUser(this.formulario.value)
  }
  updateUser(id: string):void{
    this._usersService.updateUser(id,this.formulario.value)
  }
  send():void{
    if(this.creating){
      this.addNewUser()
    }else{
      this.updateUser(this.formulario.value.id)
    }
    this.close()
    
  }
 
}
