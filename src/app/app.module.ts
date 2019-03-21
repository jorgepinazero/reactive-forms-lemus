import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CreateComponent } from './create/create.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { DisplaypatientComponent } from './displaypatient/displaypatient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListPatientsComponent,
    DisplaypatientComponent,
    EditPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
