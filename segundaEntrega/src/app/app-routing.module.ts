import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';
import { ListCoursesComponent } from './features/courses/list-courses/list-courses.component';
import { UserListComponent } from './features/users/user-list/user-list.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component:DashboardComponent,
    loadChildren: ()=> import('./features/dashboard/dashboard.module').then((m)=>m.DashboardModule)
  },
  {
    path: 'users',
    component: UserListComponent,
    loadChildren: ()=> import('./features/users/users.module').then(m => m.UsersModule)
  },
  {path: 'courses',
    component:ListCoursesComponent,
    loadChildren: ()=> import('./features/courses/courses.module').then(m=>m.CoursesModule)
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
