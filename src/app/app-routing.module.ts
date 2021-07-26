import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './components/template/nav/nav.component';


import { HomeComponent } from './components/views/home/home.component';
import { UnityListComponent } from './components/views/unity/unity-list/unity-list.component';
import { UnityReadComponent } from './components/views/unity/unity-read/unity-read.component';

const routes: Routes = [
 // {
   // path: '', component: NavComponent, children: [
      { path: 'home', component: HomeComponent },

      { path: 'unities',           component:   UnityListComponent },
      { path: 'unities/read/:id',  component:   UnityReadComponent },
      
      { path: 'players',           component:   UnityListComponent },      
   // ]
 // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
