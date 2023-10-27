import { Component, Inject, OnInit } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';

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
    console.log('Trying to add test role to other user');
    const roleId = 'rol_n3aWDhpbtVoCvPXf';
    const url = `https://login.auth0.com/api/v2/roles/${roleId}/users`;
    const userId = 'auth0|653bda2e9b73f78151a79469';
    const users = [userId];

    let data = JSON.stringify({
      users: users,
    });

    let config = {
      method: 'POST',
      maxBodyLength: Infinity,
      url: url,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
