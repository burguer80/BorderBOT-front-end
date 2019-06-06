import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Components
import {BorderListComponent} from './components/border-list/border-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/borders', pathMatch: 'full'},
  {path: 'borders', component: BorderListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
