import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {MessagingService} from './messaging.service';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDKGg7wtYZ8fTvfr0rwXpK5f614t2f5ezo',
      authDomain: 'fir-a98b6.firebaseapp.com',
      databaseURL: 'https://fir-a98b6.firebaseio.com',
      projectId: 'fir-a98b6',
      storageBucket: 'fir-a98b6.appspot.com',
      messagingSenderId: '982751317574'
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
