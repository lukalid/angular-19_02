import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private router: Router) { }

  token: string;

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => console.log(error));
    this.router.navigate(['/recipes']);
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => firebase.auth().currentUser.getIdToken().then(
        (token) => {
          this.token = token;
          this.router.navigate(['/recipes']);
        }
      ))
      .catch((error) => console.log(error));
  }

  getToken() {
    firebase.auth().currentUser.getIdToken().then((token) => this.token = token);
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/recipes']);
  }

}
