import { Routes, RouterModule } from '@angular/router';
import { AlbunesComponent } from './components/albunes/albunes.component';
import { FotosComponent } from './components/fotos/fotos.component';

const routes: Routes = [
  { path: 'albunes', component: AlbunesComponent },
  { path: 'fotos/:id', component: FotosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'albunes' }
];

export const APP_ROUTING = RouterModule.forRoot(routes);
