import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { PostPageComponent } from './main/post-page/post-page.component';
import { AboutComponent } from './main/about/about.component';
import { SearchComponent } from './main/search/search.component';
import { MaterialModule } from './material.module';
import { environment } from '../environments/environment';
import { LoginPageComponent } from './registration/login-page/login-page.component';
import { SignupPageComponent } from './registration/signup-page/signup-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPageComponent } from './registration/resetpage/resetpage.component';
import { SearchPipe } from './main/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainPageComponent,
    PostPageComponent,
    AboutComponent,
    SearchComponent,
    LoginPageComponent,
    SignupPageComponent,
    ResetPageComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
