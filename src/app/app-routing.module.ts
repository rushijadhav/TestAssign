import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { OtherDetailsComponent } from './other-details/other-details.component';


const routes: Routes = [
  { path:"list", component:EmployeeComponent},
  { path:"other",component:OtherDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
