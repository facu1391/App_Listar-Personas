import { Injectable } from "@angular/core";
//import * as firebase from "firebase/app";
import firebase from 'firebase/compat/app'
import { Router } from "@angular/router";

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

@Injectable()
export class LoginService {
        
    token:string;
 
    constructor(private router:Router){ }
 
    login(email:string, password:string){
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                firebase.auth().currentUser?.getIdToken().then(
                    token => {
                        this.token = token;
                        this.router.navigate(['/']);
                    }
                )
            }
        )
    }
 
    getIdToken(){
        return this.token;
    }

    isAutenticado() {
        return this.token != null;
    }

    logout() {
        firebase.auth().signOut().then( () => {
            this.token = "";
            this.router.navigate(['/login']);
        }).catch(error => console.log("Error Logout:" + error));
    }

}