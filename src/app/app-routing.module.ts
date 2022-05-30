import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { PostPageComponent } from './main/post-page/post-page.component';
import { ProfileComponent } from './main/profile/profile.component';
import { SearchComponent } from './main/search/search.component';
import { LoginPageComponent } from './registration/login-page/login-page.component';
import { ResetPageComponent } from './registration/resetpage/resetpage.component';
import { SignupPageComponent } from './registration/signup-page/signup-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'post/:id',
    component: PostPageComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'signup',
    component: SignupPageComponent,
  },
  {
    path: 'reset',
    component: ResetPageComponent,
  },{
    path: 'profile',
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
