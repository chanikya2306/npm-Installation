import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { ToastrComponent } from './npm i ngx-toastr/toastr/toastr.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'toastr',component:ToastrComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
