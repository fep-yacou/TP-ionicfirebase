import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public afDB: AngularFireDatabase
  ) {}

  // add() {
  //   this.afDB.list('User/').push({
  //     pseudo: 'drissas'
  //   });
  }


