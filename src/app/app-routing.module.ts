import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './components/template/nav/nav.component';


import { HomeComponent } from './components/views/home/home.component';
import { UnityListComponent } from './components/views/unity/unity-list/unity-list.component';
import { UnityCreateComponent } from './components/views/unity/unity-create/unity-create.component';
import { UnityDeleteComponent } from './components/views/unity/unity-delete/unity-delete.component';
import { UnityReadComponent } from './components/views/unity/unity-read/unity-read.component';
import { UnityUpdateComponent } from './components/views/unity/unity-update/unity-update.component';
import { PlayerReadAllComponent } from './components/views/player/player-read-all/player-read-all.component';


const routes: Routes = [
 // {
   // path: '', component: NavComponent, children: [
      { path: 'home', component: HomeComponent },

      { path: 'unities',                    component:   UnityListComponent },
      { path: 'unities/create',             component:   UnityCreateComponent },
      { path: 'unities/read/:id',           component:   UnityReadComponent },
      { path: 'unities/delete/:id',         component:   UnityDeleteComponent },
      { path: 'unities/update/:id',         component:   UnityUpdateComponent },
      
      { path: 'players',                    component:   UnityListComponent },
      { path: 'unities/:id_unity/players',  component:   PlayerReadAllComponent },      
   // ]
 // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
