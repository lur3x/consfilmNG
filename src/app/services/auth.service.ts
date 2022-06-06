import { Database, set, update, ref } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public auth: Auth, private database: Database) {}

  login(value: any) {
    signInWithEmailAndPassword(this.auth, value.email, value.password)
      .then((userCredential) => {
        const user = userCredential.user;
        const date = new Date();
        update(ref(this.database, 'users/' + user.uid), {
          last_login: date,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
  logout() {}

  registerUser(value: any) {
    createUserWithEmailAndPassword(this.auth, value.email, value.password)
      .then((userCredential) => {
        const user = userCredential.user;
        set(ref(this.database, 'users/' + user.uid), {
          name: value.user,
          email: value.email,
        });
        alert('user created');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
  resetPassword(value: any, fireError?: string, success?: string) {
    sendPasswordResetEmail(this.auth, value.email)
      .then(() => {
        alert('Check your email!');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
}
