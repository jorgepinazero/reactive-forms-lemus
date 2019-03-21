import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import {CreateComponent} from './create/create.component';
import {DisplaypatientComponent} from './displaypatient/displaypatient.component';
import {EditPatientComponent} from './edit-patient/edit-patient.component';

const routes: Routes = [
  {path: '', component: ListPatientsComponent},
  {path: 'create', component: CreateComponent},
  {path: ':id', component: DisplaypatientComponent},
  {path: ':id/edit', component: EditPatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
