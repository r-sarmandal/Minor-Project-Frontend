import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MissingFormComponent } from './pages/missing-form/missing-form.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FoundFormComponent } from './pages/found-form/found-form.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },

  {
    path:'login',
    component: LoginComponent,
    pathMatch:'full'
  },

  {
    path:'',
    component: HomeComponent,
    pathMatch:'full'
  },

  {
    path:'missingform',
    component: MissingFormComponent,
    pathMatch:'full'
  },

  {
    path:'foundform',
    component: FoundFormComponent,
    pathMatch:'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
