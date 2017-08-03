import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: 'AIzaSyDEKFhJ1Nf8-RHXT39ryGJYKzEzbnrWKNA',
    authDomain: 'angular4-demo-c5da4.firebaseapp.com',
    databaseURL: 'https://angular4-demo-c5da4.firebaseio.com',
    projectId: 'angular4-demo-c5da4',
    storageBucket: 'angular4-demo-c5da4.appspot.com',
    messagingSenderId: '798909163850'
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
