import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './components/views/home/home.component';
import { FormsModule } from '@angular/forms';

// header (toolbars)
import {MatToolbarModule} from '@angular/material/toolbar';

// sideNav (left)
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

// tables
import {MatTableModule} from '@angular/material/table';

// icons
import {MatIconModule} from '@angular/material/icon';

// buttons
import {MatButtonModule} from '@angular/material/button';

// inputs
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

// snackBar
import {MatSnackBarModule} from '@angular/material/snack-bar';

// 
import { UnityListComponent } from './components/views/unity/unity-list/unity-list.component';
import { UnityReadComponent } from './components/views/unity/unity-read/unity-read.component';
import { UnityCreateComponent } from './components/views/unity/unity-create/unity-create.component';
import { UnityDeleteComponent } from './components/views/unity/unity-delete/unity-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    UnityListComponent,
    UnityReadComponent,
    UnityCreateComponent,
    UnityDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
