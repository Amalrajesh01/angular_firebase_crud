import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllDataComponent } from './all-data/all-data.component';


const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'all',component:AllDataComponent},
{path:'all/:id',component:AllDataComponent},
{ path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
