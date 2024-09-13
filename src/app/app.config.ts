import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp({
      projectId: "vouting-firebase-auth",
      appId: "1:201818235425:web:401774cde545e4ae39b960",
      storageBucket: "vouting-firebase-auth.appspot.com",
      apiKey: "AIzaSyBaPPwQe1MAzjJKSK70-UqC_Zbfy2EuTP0",
      authDomain: "vouting-firebase-auth.firebaseapp.com",
      messagingSenderId: "201818235425",
      measurementId: "G-BNCM4V52KM"
    })),
    provideAuth(() => getAuth()),
    provideHttpClient(withFetch())
  ]
};
