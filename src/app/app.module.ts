import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AuthModule.forRoot({
      domain: 'development-playground.us.auth0.com',
      clientId: 'EBviEdZguoZOL7j8K6e9u1kxYoK05bR3',
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: 'https://people-service-epsilon.com',
        scope: 'openid profile offline_access',
      },
    }),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
