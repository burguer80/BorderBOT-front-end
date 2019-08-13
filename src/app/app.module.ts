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
  MatTableModule,
  MatInputModule, MatSelectModule
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
import {BorderSearchPipe} from './pipes/border-search.pipe';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BorderCardComponent,
    BorderListComponent,
    BorderSearchPipe
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [MatButtonModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatTableModule,
    MatInputModule],
  providers: [BorderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
