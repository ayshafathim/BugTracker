import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BComponent } from './b/b.component';
import { BugupdationComponent } from './bugupdation/bugupdation.component';
import { ContactComponent } from './contact/contact.component';
import { CreatebugComponent } from './createbug/createbug.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { LandingComponent } from './landing/landing.component';
import { SubadminComponent } from './subadmin/subadmin.component';

const routes: Routes = [
  {path:'bugupdation',component:BugupdationComponent},
  {path:'b',component:BComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'createbug',component:CreatebugComponent},
 {path:'footer',component:FooterComponent},
 {path:'b',component:BComponent},
 {path:'signup',component:SignupComponent},
 {path:'login',component:LoginComponent},
 {path:'settings',component:SettingsComponent},
 {path:'subadmin',component:SubadminComponent},
 {path:'',component:LandingComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
