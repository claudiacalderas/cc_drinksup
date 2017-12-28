import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
// import { AppComponent } from './app.component';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
 
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
 
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { firebase } from 'firebase';
import { FirebaseProvider } from './../providers/firebase/firebase';

const firebaseConfig = {
apiKey: 'AIzaSyAAB4Ln_fniH6TibOU1bjBvI0fMzxnN6_Q',
authDomain: 'ccdrinksup.firebaseapp.com',
databaseURL: 'https://ccdrinksup.firebaseio.com',
storageBucket: 'ccdrinksup.appspot.com',
messagingSenderId: '779738454445'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
   SplashScreen,
   StatusBar,
   FirebaseProvider,
   {provide: ErrorHandler, useClass: IonicErrorHandler}
 ]
})
export class AppModule {}