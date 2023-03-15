import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomovilesListComponent } from './components/automoviles-list/automoviles-list.component';
import { AutomovilesFormComponent } from './components/automoviles-form/automoviles-form.component';

const routes: Routes = [
  {
    path:'',
    component:AutomovilesListComponent
  },
  {
    path:'automovil',
    component:AutomovilesListComponent
  },
  {
    path:'automovil/create',
    component:AutomovilesFormComponent
  },
  {
    path:'automovil/edit/:id',
    component:AutomovilesFormComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
