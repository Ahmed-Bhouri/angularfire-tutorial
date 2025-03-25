import { Component } from '@angular/core';
import {Auth, signInWithPopup, GoogleAuthProvider, signOut, user, User} from '@angular/fire/auth';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [
    NgIf
  ]
})
export class HeaderComponent {
  title = 'My Angular App';

  user$: User | null = null;

  constructor(private auth: Auth) {
    user(auth).subscribe((user) => {
      this.user$ = user;
      console.log(this.user$);
    });
  }

  signIn(){
    signInWithPopup(this.auth, new GoogleAuthProvider())
      .then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
  }

  signOut(){
    signOut(this.auth).then(() => {
      console.log('Signed out');

    }).catch((error) => {
      console.log(error);
    });
  }
}
