import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './componentes/main/main.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { StadiumsComponent } from './componentes/stadiums/stadiums.component';
import { CalendarComponent } from './componentes/calendar/calendar.component';
import { TeamsComponent } from './componentes/teams/teams.component';
import { HeaderComponent } from './componentes/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    StadiumsComponent,
    CalendarComponent,
    TeamsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
