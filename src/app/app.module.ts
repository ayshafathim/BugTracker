import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BugupdationComponent } from './bugupdation/bugupdation.component';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CreatebugComponent } from './createbug/createbug.component';
import { BComponent } from './b/b.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { BugService } from './bug.service';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { LandingComponent } from './landing/landing.component';
import { SubadminComponent } from './subadmin/subadmin.component';
import { EditbugComponent } from './editbug/editbug.component';

@NgModule({
  declarations: [
    AppComponent,
    BugupdationComponent,
    BComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    CreatebugComponent,
  
    SignupComponent,
    LoginComponent,
    SettingsComponent,
    LandingComponent,
    SubadminComponent,
    EditbugComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [BugService],
  bootstrap: [AppComponent]
})
export class AppModule { }
