import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/app/modules/about/about.component';
import { OilforyouComponent } from '../oilforyou/oilforyou.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { OfeComponent } from './home/ofe/ofe.component';
import { RegComponent } from './reg/reg.component';
import { WrlComponent } from './wrl/wrl.component';


const routes: Routes = [
  {path:'',component:HomeComponent,children:[
    {path:'about',component:AboutComponent},
    {path:'oilforyou',component:OilforyouComponent},
    {path:'reg',component:RegComponent},
    {path:'ofe',component:OfeComponent},
    {path:'wrl',component:WrlComponent},
    {path:'contactus',component:ContactusComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
