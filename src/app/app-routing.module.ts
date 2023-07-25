import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllDataComponent } from './all-data/all-data.component';
import { AddDataComponent } from './add-data/add-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';


const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'add',component:AddDataComponent},
{path:'all',component:AllDataComponent},
{path:'edit/:id',component:EditDataComponent},
{ path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
