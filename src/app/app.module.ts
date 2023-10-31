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
        redirect_uri: window.location.origin + '/callback',
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

/***

 http://localhost:4200/callback?error=invalid_request&error_description=client%20requires%20organization%20membership%2C%20but%20user%20does%20not%20belong%20to%20any%20organization&state=Mk5FOF8zVXBlUjBCYlBmaTJPckR4QVZsQ3hiQUpENDlkS3huZ1lUTHEuVw%3D%3D
 */
