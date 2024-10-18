import { Injectable } from '@angular/core';
import { ICourse } from '../../shared/interface';
import { coursesList } from '../../helpers/mock';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private coursesSubject: BehaviorSubject<ICourse[]> = new BehaviorSubject<ICourse[]>(coursesList)
  constructor() { }
  getObservable(): Observable<ICourse[]>{
    return this.coursesSubject.asObservable()
  }
  addCourse(course: ICourse){
    const newList = [...this.coursesSubject.value, course]
    this.coursesSubject.next(newList)
  }
  deleteCourse(id:string){
    const newList = this.coursesSubject.value.filter(course => course.id !== id)
    this.coursesSubject.next(newList)
  }
  updateCourse(id:string, courseEdit:Partial<ICourse>){
    const courseToEdit = this.coursesSubject.value.find(course => course.id === id)
    if(!courseToEdit){
      console.log("usuario no encontrado")
    }else{
      const newList = this.coursesSubject.value.map(course => course.id === id ? {...courseToEdit,...courseEdit} : course)
      this.coursesSubject.next(newList)
    }
    
  }
}
