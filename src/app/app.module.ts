import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LayoutComponent} from './layout/layout.component';
import {EmployeeService} from './services/employee.service';
import {RoutesModule} from './routes/routes.module';
import {EmployeeModule} from './routes/employee/employee.module';
import {SharedModule} from './routes/common/common.module';
import {HttpModule} from '@angular/http';
import {EditFormComponent} from './routes/employee/edit-form/edit-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations:[
    AppComponent,
    LayoutComponent
  ],
  imports:[
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    SharedModule,
    EmployeeModule,
    RoutesModule,
  ],
  entryComponents:[EditFormComponent],
  providers:[EmployeeService],
  bootstrap:[AppComponent]
})
export class AppModule {
}
