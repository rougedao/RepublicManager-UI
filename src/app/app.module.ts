import { RepublicaService } from './services/republica.service';
import { AuthGuard } from './security/auth.guard';
import { BaseService } from './services/base.service';
import { JwtModule } from '@auth0/angular-jwt';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppErrorHandler } from './global-error-handler';
import { ErrorHandler } from '@angular/core';
import { RegisterComponent } from './Components/Usuario/register-form/register-form.component';
import { RepublicaComponent } from './Components/Republic/republica-form/republica-form.component';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app/../Components/app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { UsuarioService } from './services/usuario.service';
import { AuthenticationService } from './services/authentication.service';
import { MatButtonModule } from '../../node_modules/@angular/material/button';
import { DinamicTableComponent } from './Components/shared/dinamic-table/dinamic-table.component';
import { DinamicListComponent } from './Components/shared/dinamic-list/dinamic-list.component';
import { LoginComponent } from './Components/Usuario/login-form/login-form.component';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { PageNotFoundComponent } from './Components/shared/page-not-found/page-not-found.component';
import { RepublicaListComponent } from './Components/Republic/republica-list/republica-list.component';
import { UserNotAuthorizedComponent } from './Components/shared/user-not-authorized/user-not-authorized.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { environment } from '../environments/environment';
import { NavbarComponent } from './Components/navbar/navbar.component';


export function tokenGetter() {
  return localStorage.getItem('jwt');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RepublicaComponent,
    DinamicListComponent,
    RegisterComponent,
    DinamicTableComponent,
    PageNotFoundComponent,
    RepublicaListComponent,
    UserNotAuthorizedComponent,
    NavbarComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:61209'],
      }
    }),
    RouterModule.forRoot([
      // Always place more specifc routes first, after the initial home page
      // {path:'profile/:username',component: ProfileComponent} for routing to specif pages
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'republica', component: RepublicaListComponent, canActivate : [AuthGuard] },
      { path: 'UserNotAuthorized', component: UserNotAuthorizedComponent },
      { path: 'navbar', component: NavbarComponent, canActivate : [AuthGuard] },
      { path: 'shoppingCart', component: ShoppingCartComponent , canActivate : [AuthGuard] },
      { path: '**', component: PageNotFoundComponent }
    ]),
    NgbModule.forRoot()
  ],
  providers: [
    // BaseService,
    UsuarioService,
    RepublicaService,
    AuthenticationService,
    AuthGuard,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
