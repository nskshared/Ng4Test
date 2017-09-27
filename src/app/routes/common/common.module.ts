import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  MdButtonModule,
  MdCardModule,
  MdDatepickerModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdNativeDateModule,
  MdOptionModule,
  MdSelectModule,
  MdSliderModule,
  MdSlideToggleModule
} from '@angular/material';
import {Error404Component} from './error404/error404.component';
import {Error500Component} from './error500/error500.component';

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
    MdDatepickerModule,
    MdNativeDateModule,
  
  ],
  declarations:[Error404Component, Error500Component],
  exports:[Error404Component, Error500Component],
  providers:[]
})
export class SharedModule {

}
