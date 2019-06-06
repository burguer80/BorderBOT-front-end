import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';

import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTableModule
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

// Components
import {AppComponent} from './app.component';

// Services
import {BorderService} from './border.service';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {BorderCardComponent} from './components/border-card/border-card.component';
import {BorderListComponent} from './components/border-list/border-list.component';


@NgModule({
  declarations: [
    AppComponent,
    BorderCardComponent,
    BorderListComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
  exports: [MatButtonModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatTableModule],
  providers: [BorderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
