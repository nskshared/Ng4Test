import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  MdButtonModule,
  MdCardModule,
  MdDatepickerModule, MdDialog, MdDialogModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdNativeDateModule,
  MdOptionModule, MdPaginatorModule,
  MdSelectModule,
  MdSliderModule,
  MdSlideToggleModule, MdTableModule
} from '@angular/material';
import {EmployeeComponent} from './employee.component';
import {EmployeeRoutingModule} from './employee-routing.module';
import {CdkTableModule} from '@angular/cdk/table';
import { EditFormComponent } from './edit-form/edit-form.component';
import {SkillPipe} from './pipe/skill.pipe';

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    MdCardModule,
    MdOptionModule,
    MdListModule,
    MdGridListModule,
    MdSelectModule,
    MdSlideToggleModule,
    MdSliderModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdDialogModule,
    MdDatepickerModule,
    MdNativeDateModule,
    CdkTableModule,
    MdTableModule,
    MdPaginatorModule,
    MdSelectModule,
    EmployeeRoutingModule
  ],
  declarations:[EmployeeComponent, EditFormComponent, SkillPipe],
  exports:[],
  providers:[]
})
export class EmployeeModule {

}
