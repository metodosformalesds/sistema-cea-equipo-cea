import { Injectable } from '@angular/core';
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class BDService {
  listadobitacora: any[] = [];
  listadocita: any[] = [];

  constructor() { }

  loginUser(value){
    return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(function(){
      return new Promise<any>((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
        });
    });
  }

  logoutUser() {
     return new Promise((resolve, reject) => {
       if(firebase.auth().currentUser){
         firebase.auth().signOut()
         .then(() => {
           console.log("LOG Out");
           resolve();
         }).catch((error) => {
           reject();
         });
       }
     });
  }

  registroBitacora(id,nombre,fecha,matricula,carrera,motivo){
    if(id==null || id=="" || id==undefined){
      id= Math.floor(Math.random()*99999)+1
    }
    firebase.database().ref().child('Bitacora').child(id).update({ID:id,Nombre:nombre,Fecha:fecha,
    Matricula:matricula,Carrera:carrera,Motivo:motivo})
  }

  listadoBitacora(){
    return firebase.database().ref().child('Bitacora').orderByChild('Fecha').once('value',ss=>{
      ss.forEach(aa=>{
        this.listadobitacora.push(aa.val())
      })
    })
  }

  updateBitacora(id,nombre,fecha,matricula,carrera,motivo){
    firebase.database().ref().child('Bitacora').child(id).set({ID:id,Nombre:nombre,Fecha:fecha,
      Matricula:matricula,Carrera:carrera,Motivo:motivo})
  }

  deleteBitacora(id){
    firebase.database().ref().child('Bitacora').child(id).remove();
  }

  registroCita(id,nombre,fecha,notas,carrera,motivo) {
    if(id==null || id=="" || id==undefined){
      id= Math.floor(Math.random()*99999)+1
    }
    firebase.database().ref().child('Cita').child(id).update({ID:id,Nombre:nombre,Fecha:fecha,
    Notas:notas,Carrera:carrera,Motivo:motivo})
  }

  listadoCita() {
    return firebase.database().ref().child('Cita').orderByChild('Fecha').once('value', ss =>{
      ss.forEach(aa => {
        this.listadocita.push(aa.val());
      });
    });
  }
  updateCita(id,nombre,fecha,carrera,motivo,notas){
    firebase.database().ref().child('Cita').child(id).set({ID:id,Nombre:nombre,Fecha:fecha,
      Notas:notas,Carrera:carrera,Motivo:motivo})
  }

  deleteCita(id){
    firebase.database().ref().child('Cita').child(id).remove();
  }

}
