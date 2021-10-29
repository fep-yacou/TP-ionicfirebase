import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  // déclaration de la variable qui contient l'utilisateur connecté
  public user: any;

  constructor(
    public afAuth: AngularFireAuth,
    public afStore: AngularFirestore
  ) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(
      res=>{
      if(res){
          // console.log(res.uid)
          this.afStore.collection("users").doc(res.uid).valueChanges().subscribe(
            res2=>{
              console.log(res2)
              // on stocke les données de l'utilisateur connecté dans 'user'
              this.user=res2
            }
          )
      }
      }
    )
  }

}
