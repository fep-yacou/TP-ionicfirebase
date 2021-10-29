import { Component, OnInit } from '@angular/core';
// L'import qui nous permet de gérer l'authentification...
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // Declaration de la variable qui contiendra l'email et password de l'utilisateur
  dataUser = {
    email: '',
    password: ''
 };



  constructor(
    public afAuth: AngularFireAuth,
    public route: Router
  ) {

   }

   login() {
  this.afAuth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password).then(
    res => {
      this.route.navigate(["/homeprofile"])
    }
  )
   this.dataUser = {
     email: '',
     password: ''
   };
}

  ngOnInit() {
  }

}
