import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from 'src/app/material.module';
import { AboutComponent } from 'src/app/modules/about/about.component';
import { OilforyouComponent } from '../oilforyou/oilforyou.component';
import { RegComponent } from './reg/reg.component';
import { ContactusComponent } from './contactus/contactus.component';
import { OfeComponent } from './home/ofe/ofe.component';
import { WrlComponent } from './wrl/wrl.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    OilforyouComponent,
    RegComponent,
    ContactusComponent,
    OfeComponent,
    WrlComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
