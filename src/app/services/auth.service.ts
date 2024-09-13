import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private aut:Auth) { }

  //register new user
  register(email:string, password:string){
    return createUserWithEmailAndPassword(this.aut, email, password);
  }

  


}
