import { Injectable } from '@angular/core';
import { IUser } from '../../shared/interface';
import { userList } from '../../helpers/mock';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usuariosSubject: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>(userList)
  constructor() { }
  getObservable(): Observable<IUser[]>{
    return this.usuariosSubject.asObservable()
  }
  addUser(user: IUser){
    const newList = [...this.usuariosSubject.value, user]
    this.usuariosSubject.next(newList)
  }
  deleteUser(id:string){
    const newList = this.usuariosSubject.value.filter(user => user.id !== id)
    this.usuariosSubject.next(newList)
  }
  updateUser(id:string, userEdit:Partial<IUser>){
    const userToEdit = this.usuariosSubject.value.find(user => user.id === id)
    if(!userToEdit){
      console.log("usuario no encontrado")
    }else{
      const newList = this.usuariosSubject.value.map(user => user.id === id ? {...userToEdit,...userEdit} : user)
      this.usuariosSubject.next(newList)
    }
    
  }
}
