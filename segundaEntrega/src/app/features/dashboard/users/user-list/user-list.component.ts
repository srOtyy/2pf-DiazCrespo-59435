import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from '../../../../core/services/users.service';
import { IUser } from '../../../../shared/interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit,OnDestroy{
  userList: IUser[] = []
  
  readonly dialog = inject(MatDialog);
  private suscription: Subscription | null = null; 
  constructor(private _usersService:UsersService){}
  ngOnInit(): void {
    this.suscribe()
  }
  ngOnDestroy(): void {
    this.unsuscribe()
  }
  suscribe():void{
    this.suscription = this._usersService.getObservable().subscribe({
      next: data => this.userList = data,
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
    this._usersService.deleteUser(id)
  }
  openModal(user?: IUser): void {
    if(user){//editando
      const dialogRef = this.dialog.open(ModalComponent,{
        data: user
      });
      dialogRef.afterClosed().subscribe();
     
    }else{//creando
      const dialogRef = this.dialog.open(ModalComponent);
      dialogRef.afterClosed().subscribe();

    }
  }
  
  
}
