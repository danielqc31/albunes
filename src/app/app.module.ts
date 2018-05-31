import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlbunesComponent } from './components/albunes/albunes.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { APP_ROUTING } from './app.routes';
import { AlbumService } from './services/album.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlbunesComponent,
    FotosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
