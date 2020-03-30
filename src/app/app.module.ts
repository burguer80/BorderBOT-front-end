import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {environment} from '../environments/environment';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';

// Components
import {AppComponent} from './app.component';

// Services
import {BorderService} from './services/border.service';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {BorderCardComponent} from './components/border-card/border-card.component';
import {BorderListComponent} from './components/border-list/border-list.component';
import {BorderSearchPipe} from './pipes/border-search.pipe';
import {FormsModule} from '@angular/forms';
import {DateAgoPipe} from './pipes/date-ago.pipe';
import {ServiceWorkerModule} from '@angular/service-worker';
import {RecentBordersStoreService} from './services/recent-borders-storage.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {LocalStoreService} from './services/local-store.service';
import {FavoriteBordersStoreService} from './services/favorite-borders-store.service';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {LatestBordersEffects} from './effects/latest-borders.effects';


@NgModule({
  declarations: [
    AppComponent,
    BorderCardComponent,
    BorderListComponent,
    BorderSearchPipe,
    DateAgoPipe
  ],
  imports: [
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
    MatSelectModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MatProgressBarModule,
    MatTabsModule,
    ScrollingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([LatestBordersEffects])
  ],
  exports: [MatButtonModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatTableModule,
    MatInputModule],
  providers: [BorderService, FavoriteBordersStoreService, LocalStoreService, RecentBordersStoreService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
