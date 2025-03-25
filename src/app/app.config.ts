import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      projectId: "angularfire-workshop",
      appId: "1:854792550483:web:0859bb959bf98f52146ea6",
      storageBucket: "angularfire-workshop.firebasestorage.app",
      apiKey: "AIzaSyDr9wqBMIcD1dpfDoFMlKgqlq8HYtM103A",
      authDomain: "angularfire-workshop-9b9bc.firebaseapp.com",
      messagingSenderId: "854792550483" })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())]
};
