import { Component, Inject, OnInit } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService,
    private http: HttpClient,
  ) {}

  token: any;

  ngOnInit() {
    this.auth.user$.subscribe((value: any) => {});

    this.auth.getAccessTokenSilently().subscribe(
      (value: any) => {
        console.log('token:', value);
        this.token = value;
      },
      (error: any) => {
        console.error(error);
      },
    );
  }

  callBackendPublic(): void {
    this.http.get('http://localhost:8080').subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.error(error);
      },
    );
  }

  callBackendPrivate(): void {
    console.log("I'm in call,", this.token);
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    });

    const options = {
      headers: headers,
    };

    this.http.get('http://localhost:8080/authorized', options).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.error(error);
      },
    );
  }

  addTestRoleToUser() {
    console.log('Trying to add role,', this.token);
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    });

    const options = {
      headers: headers,
    };

    this.http.get('http://localhost:8080/add-role', options).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.error(error);
      },
    );
  }

  getUsers() {
    console.log('Trying to get users,', this.token);
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    });

    const options = {
      headers: headers,
    };

    this.http.get('http://localhost:8080/get-users', options).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.error(error);
      },
    );
  }
}
