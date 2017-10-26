import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { AppComponent } from './app.component';
import { AppService } from '../services/app.service';
import { LoginComponent } from '../login/login.component';
import { AdminComponent } from '../login/admin.component';
import { routingComponents } from '../routers/app.router';
import { RoutingModule } from '../routers/app.router';
import { MatToolbarModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LocalStorageModule } from 'angular-2-local-storage';
import { SignupComponent } from '../login/signup.component';
import { CategoryPipe } from '../pipes/search.contacts';
@NgModule({
  declarations: [
    AppComponent,AdminComponent,LoginComponent,routingComponents,SignupComponent,CategoryPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    NoopAnimationsModule,
    RoutingModule,
    MatToolbarModule,
    HttpModule,
    FormsModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
  })
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
