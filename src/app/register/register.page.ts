import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  // Declaration de la variable qui contiendra l'email et password de l'utilisateur
  dataUser = {
    email: '',
    password: '',
    nom: '',
    prenom : ''
 };
  constructor(
    public afAuth: AngularFireAuth,
    // Declaration des imports
    public route: Router,
    public fireStore: AngularFirestore
  ) { }

  signUp(){
    this.afAuth.createUserWithEmailAndPassword(this.dataUser.email, this.dataUser.password).then(
      data =>{
        console.log(data)
        // Stockage dans la base REAL TIME DATABASE
        this.fireStore.collection("users").doc(data.user.uid).set({
          "Nom": this.dataUser.nom,
          "Prenom": this.dataUser.prenom,
          "Email": this.dataUser.email,
          "Password": this.dataUser.password
        })
        // Redirection vers login page
        this.route.navigate(["/home"])
      }
    ).catch(
      error=>{
        console.log(error.message)
      }
    )
    // console.log('Password: ' + this.dataUser.password)
    // console.log('Nom: ' + this.dataUser.nom)
    // console.log('prenom: ' + this.dataUser.prenom)
  }

  ngOnInit() {
  }

}
