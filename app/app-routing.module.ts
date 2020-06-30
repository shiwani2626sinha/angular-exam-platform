import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstpageComponent} from '../app/firstpage/firstpage.component';
import { ContactusComponent } from '../app/contactus/contactus.component';
import { AboutusComponent } from '../app/aboutus/aboutus.component';


const routes: Routes = [{path:"home", component:FirstpageComponent} ,
{path:"aboutus", component:AboutusComponent},
{path:"contactus", component:ContactusComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
export const routingComponents =[ FirstpageComponent, AboutusComponent, ContactusComponent];
