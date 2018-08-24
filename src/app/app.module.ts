import { MatTableModule } from '@angular/material/table';
import { RepublicaComponent } from './app/../Components/republica/republica.component';
import { LoginComponent } from './app/../Components/login/login.component';
import { AppComponent } from './app/../Components/app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {HttpModule} from '@angular/http';

import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { UsuarioService } from './services/usuario.service';
import { MatButtonModule } from '../../node_modules/@angular/material/button';
import { DinamicListComponent } from './Components/dinamic-list/dinamic-list.component';
import { RegisterComponent } from './Components/register/register.component';
import { DinamicTableComponent } from './Components/dinamic-table/dinamic-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RepublicaComponent,
    DinamicListComponent,
    RegisterComponent,
    DinamicTableComponent,
  ], 
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    HttpModule,
    MatTableModule
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
