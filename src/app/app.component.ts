import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './features/main/main.component';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
/* import { environment } from '../environments/environment'; */
import { environment } from '../environments/environment';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'voting-frontend';
  constructor() {
    // Inicializar Firebase
    initializeApp(environment.firebaseConfig);
    // Puedes inicializar otros servicios aquí si es necesario
    const auth = getAuth();
    const firestore = getFirestore();
  }
}
