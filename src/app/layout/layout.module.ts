import {NgModule} from '@angular/core';
import {MdButtonModule, MdCardModule, MdGridListModule, MdIconModule} from '@angular/material';
import {LayoutComponent} from './layout.component';
import {RoutesModule} from '../routes/routes.module';

@NgModule({
  imports:[
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdGridListModule,
    RoutesModule,
  ],
  providers:[],
  declarations:[
    LayoutComponent,
  ],
  exports:[
    LayoutComponent,
  ]
})
export class LayoutModule {
}
