import { Component } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  connected: boolean;

  constructor(
    public afAuth: AngularFireAuth,
    public route: Router
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        this.route.navigate(['home'])
        console.log('non connecté');
        this.connected = false;
      } 
    });
  }
}
