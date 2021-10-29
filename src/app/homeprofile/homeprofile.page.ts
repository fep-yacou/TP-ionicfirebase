import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-homeprofile',
  templateUrl: './homeprofile.page.html',
  styleUrls: ['./homeprofile.page.scss'],
})
export class HomeprofilePage implements OnInit {

  public personlist : any;

  constructor(
    public afAuth: AngularFireAuth,
    public route: Router,
    public fireData : AngularFirestore
  ) { }

  logout() {
    this.afAuth.signOut();
    // this.route.navigate(["/login"])
  }

  ngOnInit() {
    this.fireData.collection('users').valueChanges().subscribe(
      (res)=>{
        this.personlist=res;
      }
    );
  }

}
