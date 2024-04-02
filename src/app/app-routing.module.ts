import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhonenumberComponent } from './phonenumber/phonenumber.component';

const routes: Routes = [
  {
    path: '', title: 'Phone Number', component: PhonenumberComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
