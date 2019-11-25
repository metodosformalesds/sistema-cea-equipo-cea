import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  isLogged: any;
  email: string;
  contrasena: String;

  constructor(public afAuth:AngularFireAuth) { 
    afAuth.authState.subscribe(user => (this.isLogged = user));
  }

  ngOnInit() {
  }

  async registrarUsuario(user){
    try {
      return await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.paswword
      );
    } catch (error) {
      console.log('No se pudo registrar',error);
    }
  }
}
