import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';

  constructor( private loginService: LoginService ) {

  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyC-KyRnBsJFar93hs2m8uVEPOlj2zj8o64",
      authDomain: "listado-personas-d4e32.firebaseapp.com",
    })
  }

  isAutenticado() {
    return this.loginService.isAutenticado()
  }

  Salir() {
    this.loginService.logout();
  }
 
}
